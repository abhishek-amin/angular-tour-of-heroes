import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent {

  birthday = new Date(1996, 7, 29);
  toggle = true;

  get format() { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }
}
