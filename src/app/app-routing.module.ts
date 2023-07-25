import { NgModule } from '@angular/core';
import { RouterModule, Routes, Scroll } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { AboutmeComponent } from './components/home/aboutme/aboutme.component';
import { ProjectsMainComponent } from './components/projects/projects-main/projects-main.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'aboutme',
    component: AboutmeComponent,
  },
  {
    path: 'projects/:id',
    component: ProjectsMainComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
      scrollOffset: [0, 0], // Adjust the scroll offset as needed
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
