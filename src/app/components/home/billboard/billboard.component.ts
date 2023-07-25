import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  keyframes,
  transition,
  query,
  stagger,
  state,
} from '@angular/animations';
import { Router, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.scss', '../home/home.component.scss'],
  animations: [
    trigger('bounceInTop', [
      transition('void => *', [
        query('.bounce-in-element', [
          style({ opacity: 0, transform: 'translateY(-500px)' }),
          stagger(200, [
            animate(
              '1s 50ms',
              keyframes([
                style({ opacity: 0, offset: 0 }),
                style({ opacity: 1, offset: 0.38 }),
                style({ transform: 'translateY(-65px)', offset: 0.55 }),
                style({ transform: 'translateY(0)', offset: 0.72 }),
                style({ transform: 'translateY(-28px)', offset: 0.81 }),
                style({ transform: 'translateY(0)', offset: 0.9 }),
                style({ transform: 'translateY(-8px)', offset: 0.95 }),
                style({ transform: 'translateY(0)', offset: 1 }),
              ])
            ),
          ]),
        ]),
      ]),
    ]),
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', animate('1200ms')),
    ]),
    trigger('slideUpAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('600ms', style({ transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class BillboardComponent implements OnInit {
  isVisible = false;
  imageUrl = ['./assets/icons/arrow-open.svg', './assets/icons/chat.svg'];
  hoveredIndex: number | null = null;
  showAnimation: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    //this.startAnimation();
  }

  /* startAnimation(): void {
    this.showAnimation = true;
    console.log(this.showAnimation);
  }
*/
  changeImage(event: MouseEvent, newImageUrl: string, index: number) {
    const target = event.currentTarget as HTMLDivElement;
    const img = target.querySelector('img');

    if (img) {
      img.setAttribute('src', newImageUrl);
    }
    this.hoveredIndex = index;
  }

  isHovered(index: number): boolean {
    return this.hoveredIndex === index;
  }

  /*scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el !== null) {
      el.scrollIntoView();
    }
  }*/

  openLink(id: string | undefined) {
    this.router.navigate([''], { fragment: id });
  }
  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el !== null) {
      el.scrollIntoView();
    }
  }
}
