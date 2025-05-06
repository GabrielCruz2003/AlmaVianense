import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sobre-mim',
  templateUrl: './sobre-mim.page.html',
  styleUrls: ['./sobre-mim.page.scss'],
  standalone: false,
})

export class SobreMimPage {
  // Define as modais como fechadas ao iniciar a página
  isModalOpen_habilidades = false;
  isModalOpen_idiomas = false;
  isModalOpen_educacao = false;
  isModalOpen_projetos = false;

  constructor() {}
  // Metodos de alteração do estado das modais
  setOpen_habilidades(isOpen: boolean) {
    this.isModalOpen_habilidades = isOpen;
  }
  setOpen_idiomas(isOpen: boolean) {
    this.isModalOpen_idiomas = isOpen;
  }
  setOpen_educacao(isOpen: boolean) {
    this.isModalOpen_educacao = isOpen;
  }
  setOpen_projetos(isOpen: boolean) {
    this.isModalOpen_projetos = isOpen;
  }
}
