import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-main',
  templateUrl: './projects-main.component.html',
  styleUrls: ['./projects-main.component.scss'],
})
export class ProjectsMainComponent implements OnInit {
  project: string = ''; // Initialize the project property

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const projectParam = params.get('id');
      this.project = projectParam ? projectParam : ''; // Assign an empty string if projectParam is null
    });
  }
}
