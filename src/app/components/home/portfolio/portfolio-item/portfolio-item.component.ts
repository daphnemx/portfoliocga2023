import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PromptModalComponent } from './prompt-modal/prompt-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss'],
})
export class PortfolioItemComponent implements OnInit {
  ngOnInit(): void {}

  @Input() isProtected: boolean = true;
  @Input() title: string | undefined;
  @Input() imgUrl: string | undefined;
  @Input() description: string | undefined;
  @Input() projectUrl: string | undefined;
  @Input() aosDelay: string | undefined;

  constructor(private modalService: NgbModal, private router: Router) {}

  openLink(id: string | undefined) {
    this.router.navigate([id]);
    //window.open(id, '_blank', 'noopener noreferrer');
  }

  openProtectedLink(event: MouseEvent, url: string | undefined) {
    event.preventDefault();

    const modalRef = this.modalService.open(PromptModalComponent);

    modalRef.result
      .then((password: string) => {
        if (password === 'uxclau') {
          window.open(url, '_blank', 'noopener noreferrer');
        }
      })
      .catch(() => {
        // Modal dismissed, do nothing
      });
  }
}
