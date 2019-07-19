import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss']
})
export class ContactPage implements OnInit {
  twitter = 'prueba';
  showTwitter = true;
  tasks: string[] = [];
  nuevaTarea = '';

  constructor() {}

  ngOnInit() {}
  show() {
    this.showTwitter = true;
  }
  hide() {
    this.showTwitter = false;
  }
  toogle() {
    this.showTwitter = !this.showTwitter;
  }
  addTasks() {
    // console.log(this.nuevaTarea);
    this.tasks.push(this.nuevaTarea);
    this.nuevaTarea = '';
  }
}
