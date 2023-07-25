import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  presentYear: number;

  constructor() {
    this.presentYear = new Date().getFullYear();
  }
}
