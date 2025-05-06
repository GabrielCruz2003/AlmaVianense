import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';  // Importa o IonicModule para suporte ao Ionic
import { AppComponent } from './app.component';  // Importa o componente principal da aplicação
import { AppRoutingModule } from './app-routing.module';  // Importa as rotas da aplicação
import { PrincipalLayoutComponent } from './layout/principal-layout/principal-layout.component';  // Importa o componente de layout
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

// Função para configurar o carregamento dos ficheiros de tradução. Procura os ficheiros JSON na pasta assets/i18n
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,            // Declara o AppComponent
    PrincipalLayoutComponent // Declara o Componente (Componente do Menu)
  ],
  imports: [
    BrowserModule,           // Importa o módulo do navegador
    IonicModule.forRoot(),   // Inicializa o IonicModule
    AppRoutingModule,         // Importa o módulo de rotas da aplicação
    HttpClientModule,
    TranslateModule.forRoot({
  loader: {
    provide: TranslateLoader,
    useFactory: (createTranslateLoader),
    deps: [HttpClient]
}
}),

  ],
  exports: [
    PrincipalLayoutComponent // Exporta o Componente (Componente do Menu) para ser utilizado em outros lugares
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
