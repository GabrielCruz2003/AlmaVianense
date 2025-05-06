import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { LocalizationService } from './services/localization/localization.service'; /* Importação do Serviço criado para a gestão do idioma da aplicação */
import { DarkModeService } from './services/dark-mode/dark-mode.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {

  public isDarkMode: boolean = false; // Estado do tema (claro ou escuro)
  private themeSub!: Subscription; // Subscreve ao estado atual do modo escuro
  constructor(
    
    // Injeção dos serviços
    private platform: Platform, 
    private localizationService:LocalizationService,
    private darkModeService: DarkModeService
  ) {}

  async ngOnInit() {
    await this.platform.ready(); // Aguarda concluir o carregamento do Ionic
    await this.localizationService.setInitialAppLanguage(); // Define o idioma da app (Padrão: pt ou o valor guardado)
    await this.darkModeService.initTheme(); // Aplica o tema na app (Padrão: Preferência do dispositivo ou o valor guardado)
    this.themeSub = this.darkModeService.isDarkMode$.subscribe((value: boolean) => {
      this.isDarkMode = value;
    });
  }

  // Cancela a subscrição ao tema quando o componente é destruído
  ngOnDestroy() {
    if (this.themeSub) {
      this.themeSub.unsubscribe();
    }
  }
}
