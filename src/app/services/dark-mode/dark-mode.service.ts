import { Injectable } from '@angular/core';
// Importação de parte da biblioteca RxJS, que permite observar e aplicar alterações na hora
import { BehaviorSubject } from 'rxjs';
// Importação do 'Capacitor Preferences' que é utilizado para guardar localmente o tema
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root' // Este serviço é injetado automaticamente na raiz da aplicação (singleton global)
})
export class DarkModeService {
  // Coloca por padrao o tema claro (false)
  private darkModeSubject = new BehaviorSubject<boolean>(false);

  // Coloca o valor inicial do tema (claro) no BehaviorSubject que é o responsável por estar atento a alterações do tema
  public isDarkMode$ = this.darkModeSubject.asObservable();

  // Verifica se o utilizador já fez uma escolha de tema antes, para no caso de ter escolhido não ser alterada a escolha 
  private userPreferenceSet = false;

  // Inicia o tema ao iniciar a aplicação
  constructor() {}

  // Método que define o tema ao iniciar a aplicação
  public async initTheme() {
    // Faz um pedido (get) às preferências guardadas no dispositivo para verificar se existe algum valor guardado
    const storedPref = await Preferences.get({ key: 'darkMode' });

    if (storedPref.value !== null) {
      // Se existe valor guardado, converte o valor para booleano (true/false)
      const isDark = storedPref.value === 'true';

      // Regista que foi encontrada uma preferência do utilizador, ou seja, o utilizador já fez uma escolha de tema antes e esta nao deve ser alterada
      this.userPreferenceSet = true;

      // Aplica o tema guardado
      this.applyTheme(isDark);
    } else {
      // Se não existe valor guardado, define darkMode como false, guardando a escolha de modo claro
      this.applyTheme(false);

      // Guarda a escolha (modo claro) como padrão
      await Preferences.set({ key: 'darkMode', value: 'false' });
    }
  }

  // Método que aplica o tema à app
  private applyTheme(isDark: boolean) {
    // Atualiza o estado reativo
    this.darkModeSubject.next(isDark);

    // Adiciona ou remove a classe 'dark' ao <body>, para o CSS aplicar os estilos correspondentes
    document.body.classList.toggle('dark', isDark);
  }

  // Função para alterar manualmente o tema da app
  public async toggleDarkMode() {
    // Inverte o valor atual do tema: claro > escuro ou escuro > claro
    const newValue = !this.darkModeSubject.value;

    // Regista que foi alterada a prefencia do utilizador
    this.userPreferenceSet = true;

    // Aplica o novo tema
    this.applyTheme(newValue);

    // Guarda a nova preferência localmente
    await Preferences.set({ key: 'darkMode', value: String(newValue) });
  }
}
