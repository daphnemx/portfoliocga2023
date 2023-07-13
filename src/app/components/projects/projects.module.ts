import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsMainComponent } from './projects-main/projects-main.component';
import { SalesStatementComponent } from './sales-statement/sales-statement.component';
import { ImgZoomModalComponent } from './img-zoom-modal/img-zoom-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ProjectsMainComponent,
    SalesStatementComponent,
    ImgZoomModalComponent,
  ],
  imports: [CommonModule, BrowserAnimationsModule],
})
export class ProjectsModule {}
