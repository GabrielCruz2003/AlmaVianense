import { Injectable } from '@angular/core'; 
// Importa o serviço responsável por traduzir o conteúdo da aplicação
import { TranslateService } from '@ngx-translate/core'; 
// Importação do 'Capacitor Preferences' que é utilizado para guardar localmente o idioma atual
import { Preferences } from '@capacitor/preferences'; 

// Injeta o serviço na raiz da app para não ser preciso importá-lo constantemente
@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  // Variável para armazenar o idioma selecionado
  selected = '';
  // Injeta o serviço de tradução no construtor
  constructor(private translate: TranslateService) { }
  // Função para definir o idioma inicial da aplicação
  async setInitialAppLanguage() {
    // Verifica se o idioma já foi definido anteriormente, se sim, utiliza o idioma guardado
    // Se não, define o idioma padrão como português (pt)
    let userlanguage = await (await Preferences.get({ key: "user-lang" })).value
    if (userlanguage === null) {
      userlanguage = "pt";
    }
    // Define o idioma no serviço de tradução e aplica-o
    await this.translate.setDefaultLang(userlanguage);
    await this.setLanguage(userlanguage);
  }
  // Função para definir manualmente o idioma da app.
  // 1 - Seleciona a variável | 2 - Aplica a tradução | 3 - Guarda o idioma selecionado nas preferências do dispositivo
  async setLanguage(en : string) {
  this.selected = en;
  await this.translate.use(en);
  await Preferences.set({ key: 'user-lang', value: en });
  }
  }