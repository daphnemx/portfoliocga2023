import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isMenuCollapsed = true;
  currentUrl: string = '';

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.listen('window', 'scroll', () => {
      this.handleScroll();
    });

    this.router.events
      .pipe(
        filter(
          (event: Event): event is NavigationEnd =>
            event instanceof NavigationEnd
        )
      )
      .subscribe((event: Event) => {
        this.currentUrl = (event as NavigationEnd).url;

        const navElement = document.querySelector('nav');

        if (navElement && this.currentUrl !== '/') {
          navElement.classList.add('navbar-visible');
          this.isMenuCollapsed = true;
        } else if (navElement) {
          navElement.classList.remove('navbar-visible');
        }
      });
  }

  handleScroll() {
    const billboardSection = document.getElementById('billboard');
    const navElement = document.querySelector('nav');

    if (billboardSection && navElement) {
      const billboardRect = billboardSection.getBoundingClientRect();

      if (billboardRect.bottom <= 0) {
        navElement.classList.add('navbar-visible');
      } else {
        navElement.classList.remove('navbar-visible');
        this.isMenuCollapsed = true;
      }
    }
  }

  /*scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el !== null) {
      el.scrollIntoView();
    }
  }*/

  openLink(id: string | undefined) {
    this.router.navigate([''], { fragment: id });
    this.isMenuCollapsed = true;
  }
}
