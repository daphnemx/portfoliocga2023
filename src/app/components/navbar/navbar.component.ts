import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el !== null) {
      el.scrollIntoView();
    }
  }
}
