import { Component, Input } from '@angular/core';
import { INavItem } from './interfaces/navItem.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  nav: INavItem[] = [
    { icon: 'assets/cotract.svg', title: 'Заключение договора', link: ''},
    { icon: 'assets/client.svg', title: 'Клиенты', link: 'clients'},
    { icon: 'assets/hotel.svg', title: 'Отели', link: 'hotels'},
    { icon: 'assets/permit.svg', title: 'Путёвки', link: 'permits'},
    { icon: 'assets/discount.svg', title: 'Скидки', link: 'discounts'}
  ];
}
