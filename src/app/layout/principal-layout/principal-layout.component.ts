import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

interface SubMenuItem {
  title: string;
  url: string;
  icon?: string;
}

interface MenuItem {
  title: string;
  icon?: string;
  url?: string;
  children?: SubMenuItem[];
  expanded?: boolean;
}

@Component({
  selector: 'app-principal-layout',
  templateUrl: './principal-layout.component.html',
  styleUrls: ['./principal-layout.component.scss'],
  standalone: false,
})
export class PrincipalLayoutComponent{
  public appPages: MenuItem[] = [
    {
      title: 'Sobre Mim',
      icon: 'person',
      url: '/sobre-mim',
    },
    {
      title: 'Viana do Castelo',
      icon: 'location',
      expanded: false,
      children: [
        {
          title: 'Informações Úteis',
          url: '/viana-do-castelo/infos-uteis',
          icon: 'information-circle',
        },
        {
          title: 'Gastronomia',
          url: '/viana-do-castelo/gastronomia',
          icon: 'restaurant',
        },
        {
          title: 'Alojamento',
          url: '/viana-do-castelo/alojamento',
          icon: 'home',
        },
        {
          title: 'Pontos Turísticos',
          url: '/viana-do-castelo/pontos-turisticos',
          icon: 'map',
        },
        {
          title: 'Clubes Desportivos',
          url: '/viana-do-castelo/clubes-desportivos',
          icon: 'football',
        },
      ],
    },
  ];

  constructor(
    // Injeta o MenuController para controlar o menu lateral
    private menu: MenuController
  ) {}

  // Método para fechar o menu
  closeMenu() {
    this.menu.close('main-menu');
  }

}
