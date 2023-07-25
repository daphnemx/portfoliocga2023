import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BillboardComponent } from './billboard/billboard.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioItemComponent } from './portfolio/portfolio-item/portfolio-item.component';
import { PromptModalComponent } from './portfolio/portfolio-item/prompt-modal/prompt-modal.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { MarqueeComponent } from './billboard/marquee/marquee.component';
@NgModule({
  declarations: [
    HomeComponent,
    BillboardComponent,
    AboutmeComponent,
    ContactComponent,
    PortfolioComponent,
    PortfolioItemComponent,
    PromptModalComponent,
    MarqueeComponent,
  ],
  imports: [CommonModule, FormsModule, NgbAccordionModule],
})
export class HomeModule {}
