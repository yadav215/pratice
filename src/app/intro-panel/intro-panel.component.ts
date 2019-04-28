import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-panel',
  templateUrl: './intro-panel.component.html',
  styleUrls: ['./intro-panel.component.scss']
})
export class IntroPanelComponent implements OnInit {

  mainTitle = `Your school’s one-stop <br> partner for safe  reliable <br/> student transportation`;
  subTitle = `Contact Zūm about your school <br/> transportation needs`;

  constructor() { }

  ngOnInit() {
  }

}
