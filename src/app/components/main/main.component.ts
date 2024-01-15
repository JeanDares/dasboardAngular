import { Component } from '@angular/core';
import { TopWidgetsComponent } from '../top-widgets/top-widgets.component';
import { Widget1Component } from '../widget1/widget1.component';
import { Widget2Component } from '../widget2/widget2.component';
import { Widget3Component } from '../widget3/widget3.component';
import { Widget4Component } from '../widget4/widget4.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [Widget1Component, Widget2Component, Widget3Component, Widget4Component, TopWidgetsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
