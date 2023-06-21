import { Component, Input } from '@angular/core';

@Component({
  selector: 'portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss'],
})
export class PortfolioItemComponent {
  @Input() title: string | undefined;
  @Input() imgUrl: string | undefined;
  @Input() description: string | undefined;
  @Input() projectUrl: string | undefined;
  @Input() aosDelay: string | undefined;
}
