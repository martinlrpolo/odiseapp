import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InformationPage } from './information/information.page';
import { AdventureService } from 'src/services/adventure.service';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.page.html',
  styleUrls: ['./adventure.page.scss'],
})
export class AdventurePage implements OnInit {

  constructor(
    public modalController: ModalController,
    public adventureService : AdventureService
    )
  { }

  public adventure : any = [];

  ngOnInit()
  {
    this.show();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: InformationPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

  show()
  {
    this.adventureService.show(1).subscribe(
  		response => {
        this.adventure = response;
        console.log(this.adventure);
  		},
  		error => {
        console.log(error);
  		}
    );
  }

}
