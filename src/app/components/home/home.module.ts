import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BillboardComponent } from './billboard/billboard.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioItemComponent } from './portfolio/portfolio-item/portfolio-item.component';

@NgModule({
  declarations: [HomeComponent, BillboardComponent, AboutmeComponent, ContactComponent, PortfolioComponent, PortfolioItemComponent],
  imports: [CommonModule],
})
export class HomeModule {}
