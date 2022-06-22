import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-anotheranotherpage',
  templateUrl: './anotheranotherpage.page.html',
  styleUrls: ['./anotheranotherpage.page.scss'],
})
export class AnotheranotherpagePage implements OnInit {

  changePage(){
    this.navController.navigateRoot('/home')
  }

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

}
