import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.css']
})
export class MenuComponentComponent implements OnInit {



  ngOnInit() {
  }

  isAuth = false;
  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }
  onAuth(){
    console.log('On se connecte');
  }

}
