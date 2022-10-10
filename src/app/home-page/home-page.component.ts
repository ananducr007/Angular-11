import { Component, OnInit } from '@angular/core';
import { Globalvariables } from '../Shared/Global.model';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(public global:Globalvariables) { }

  ngOnInit(): void {
  }

}
