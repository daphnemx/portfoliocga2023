import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss', '../home/home.component.scss'],
})
export class PortfolioComponent implements OnInit {
  categoryFiltered: string[] = [];
  originalItems: any[] = [
    {
      title: 'Sales Payment Statement',
      projectUrl: 'projects/sales-statement',
      description:
        'IBM project: a web Platform for a sales team to review monthly Payment Statement.',
      imgUrl: './assets/img/salesstatement.png',
      isProtected: false,
      category: ['UI Design', 'UX Research'],
      aosDelay: '',
    },
    {
      title: 'ADHD Website',
      projectUrl: 'projects/mental-b',
      description:
        'Angular & Firebase web site: Informative site on ADHD disorder with an online test.',
      imgUrl: './assets/img/projects/mental-b/mental-b-portfolio-img.png',
      isProtected: false,
      category: ['Front-end development'],
      aosDelay: '100',
    },
    {
      title: 'System Monitor Dashboard',
      projectUrl: 'projects/dashboard',
      description:
        'UI design for IBM: a digital dashboard to monitor sytem processes.',
      imgUrl: './assets/img/projects/dashboard/dashboard-portfolio-img.webp',
      isProtected: false,
      category: ['UI Design', 'UX Research'],
      aosDelay: '200',
    },
    {
      title: 'SocialBook',
      projectUrl: 'projects/socialbook',
      description:
        'React & Firebase web app: Social network project for sharing books knowledge.',
      imgUrl: './assets/img/projects/socialbook/socialbook-portfolio-img.webp',
      isProtected: false,
      category: ['Front-end development', 'UI Design'],
      aosDelay: '',
    },
    {
      title: 'IBM Design Festival Webpage',
      projectUrl: 'https://uxclaudia.framer.ai/projects-spark-fest',
      description: 'Webpage design for a global design festival.',
      imgUrl: './assets/img/spark.png',
      isProtected: true,
      category: ['UI Design'],
      aosDelay: '100',
    },
    {
      title: 'Industrial Aluminum Webpage',
      projectUrl: 'projects/aluminio',
      description: 'Wordpress web site for an aluminum company.',
      imgUrl: './assets/img/projects/aluminio/aluminio-portfolio-img.webp',
      isProtected: false,
      category: ['UI Design'],
      aosDelay: '200',
    },

    // Add more items to the originalItems array
  ];

  portfolioItems: any[] = this.originalItems;

  filterProjects(category: string) {
    this.clearFilters();
    if (this.categoryFiltered.includes(category)) {
      // Category already selected, remove it from the filter
      this.categoryFiltered = this.categoryFiltered.filter(
        (item) => item !== category
      );
    } else {
      // Category not selected, add it to the filter
      this.categoryFiltered.push(category);
    }

    if (this.categoryFiltered.length > 0) {
      this.portfolioItems = this.originalItems.filter((item) =>
        item.category.some((c: string) => this.categoryFiltered.includes(c))
      );
    } else {
      this.portfolioItems = this.originalItems;
    }
  }

  clearFilters() {
    this.categoryFiltered = [];
    this.portfolioItems = this.originalItems;
  }

  ngOnInit(): void {}
  projectLinks = {
    salesStatement: 'projects/sales-statement',
    spd: 'https://uxclaudia.framer.ai/projects-platform-monitoring',
    spark: 'https://uxclaudia.framer.ai/projects-spark-fest',
  };
}
