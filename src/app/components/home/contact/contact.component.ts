import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', '../home/home.component.scss'],
})
export class ContactComponent {
  constructor() {}

  openLink(url: string) {
    window.open(url, '_blank', 'noopener noreferrer');
  }
}
