import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html'
  // styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor(public _app: AppComponent) {

  }

  ngOnInit() {
  }

}
