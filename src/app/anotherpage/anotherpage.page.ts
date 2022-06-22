import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-anotherpage',
  templateUrl: './anotherpage.page.html',
  styleUrls: ['./anotherpage.page.scss'],
})
export class AnotherpagePage implements OnInit {

  changePage(){
    this.navController.navigateRoot('/home')
  }

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

}
