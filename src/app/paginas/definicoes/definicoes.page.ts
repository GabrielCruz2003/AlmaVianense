import { Component, OnInit, OnDestroy } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode/dark-mode.service';
import { Subscription } from 'rxjs';
import { ToastController } from "@ionic/angular";
import { TranslateService } from '@ngx-translate/core';
import { Preferences } from '@capacitor/preferences';
import { LocalizationService } from '../../services/localization/localization.service';

@Component({
  selector: 'app-definicoes',
  templateUrl: './definicoes.page.html',
  styleUrls: ['./definicoes.page.scss'],
  standalone: false,
})
export class DefinicoesPage implements OnInit, OnDestroy {

  isDarkMode = false; // Inicializa com o estado do modo claro
  private themeSub!: Subscription;

  currentLanguage: string = 'pt'; // Define a variável com o valor inicial padrão "pt"

  constructor(
    private darkModeService: DarkModeService,
    private translateService : TranslateService,
    private toastController : ToastController,
    private LocalizationService: LocalizationService
  ) {
    this.currentLanguage = this.getCurrentLanguage();
  }

  ngOnInit() {
    // Subscreve ao estado atual do modo escuro
    this.themeSub = this.darkModeService.isDarkMode$.subscribe((value: boolean) => {
      this.isDarkMode = value;
    });
  }

  toggleTheme() {
    // Alterna o tema e atualiza o armazenamento
    this.darkModeService.toggleDarkMode();
  }

  ngOnDestroy() {
    // Cancela a subscrição ao tema quando o componente é destruído
    if (this.themeSub) {
      this.themeSub.unsubscribe();
    }
  }

  async changeLanguage(language: string) {
    await Preferences.set({ key: 'user-lang', value: language });
    await this.showToast();
    await this.LocalizationService.setLanguage(language);
    this.currentLanguage = language; // Atualiza a variável com o novo idioma
  }

  getCurrentLanguage(): string {
    return this.translateService.currentLang || 'pt'; // Retorna o idioma atual ou 'pt' se não estiver definido
  }

  async showToast() {
    const toast = await this.toastController.create({
      message: this.translateService.instant('Idioma alterado com sucesso!'),
      duration: 4000,
      color: 'appcor1',
    });
    await toast.present();
  }
}
