import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsMainComponent } from './projects-main/projects-main.component';
import { SalesStatementComponent } from './sales-statement/sales-statement.component';
import { ImgZoomModalComponent } from './img-zoom-modal/img-zoom-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MentalBComponent } from './mental-b/mental-b.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SocialbookComponent } from './socialbook/socialbook.component';
import { AluminioComponent } from './aluminio/aluminio.component';

@NgModule({
  declarations: [
    ProjectsMainComponent,
    SalesStatementComponent,
    ImgZoomModalComponent,
    MentalBComponent,
    DashboardComponent,
    SocialbookComponent,
    AluminioComponent,
  ],
  imports: [CommonModule, BrowserAnimationsModule],
})
export class ProjectsModule {}
