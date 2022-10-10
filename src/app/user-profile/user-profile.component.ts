import { Component, OnInit } from '@angular/core';
import { Globalvariables } from '../Shared/Global.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(public global:Globalvariables) { }

  ngOnInit(): void {
  }

}
