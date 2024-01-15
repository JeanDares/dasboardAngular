import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';

import {
  faBox,
  faChartBar,
  faContactBook,
  faDashboard,
  faHand,
  faLocation,
  faMoneyBill,
  faShop,
} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {

  constructor( private router: Router) {}

  faDashboard = faDashboard;
  faLocation = faLocation;
  faShop = faShop;
  faBox = faBox;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar;
  faContactBook = faContactBook;
  faHand = faHand;


  menu(){
    this.router.navigateByUrl('/projetos')
  }
}
