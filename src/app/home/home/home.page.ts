import { Component, OnInit } from '@angular/core';
import { AdventureService } from 'src/services/adventure.service';
import { GeneralService } from 'src/services/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private adventureService : AdventureService
  ) { }

  public slideOpts = { effect: 'flip' };
  public adventures : any = [];
  public pic_url : any = GeneralService.PIC_URL + "adventures/pics/";
  public profile_url : any = GeneralService.PIC_URL + "profiles/pics/";
  
  ngOnInit()
  {
    this.allAdventures();
  }

  allAdventures()
  {
    this.adventureService.all().subscribe(
  		response => {
        this.adventures = response;
  		},
  		error => {
        console.log(error);
  		}
    );
  }
  
}
