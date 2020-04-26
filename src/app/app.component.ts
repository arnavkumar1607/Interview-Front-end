import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  // styleUrls: ['./app.component.scss']
})
export class AppComponent {
 public isDesktop : boolean = false;
  constructor(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
       this.isDesktop = false;
    }else{
      this.isDesktop = true;
    }
  }
}
