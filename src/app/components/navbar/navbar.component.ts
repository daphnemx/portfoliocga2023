import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isNavbarHidden = true;

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.listen('window', 'scroll', () => {
      if (this.router.url === '/') {
        this.handleScroll();
        console.log('true');
      }
    });
    console.log('URL:', this.router.url);
  }

  handleScroll() {
    const billboardSection = document.getElementById('billboard');

    if (billboardSection) {
      const billboardRect = billboardSection.getBoundingClientRect();

      if (this.router.url === '/') {
        if (billboardRect.bottom <= 0) {
          this.isNavbarHidden = false;
        } else {
          this.isNavbarHidden = true;
        }
      }
    }
  }

  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el !== null) {
      el.scrollIntoView();
    }
  }
}
