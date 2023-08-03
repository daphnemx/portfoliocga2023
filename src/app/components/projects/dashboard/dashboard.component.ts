import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImgZoomModalComponent } from '../img-zoom-modal/img-zoom-modal.component';
import { PromptModalComponent } from '../../home/portfolio/portfolio-item/prompt-modal/prompt-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    './dashboard.component.scss',
    '../projects-main/projects-main.component.scss',
  ],
})
export class DashboardComponent {
  yourImageUrl: string = '';
  constructor(private modalService: NgbModal) {}

  imgZoom(imgUrl: string) {
    console.log('clicked');
    const modalRef = this.modalService.open(ImgZoomModalComponent, {
      size: 'xl',
      centered: true,
    });
    modalRef.componentInstance.imgPath = imgUrl;
  }

  openModal() {
    this.modalService.open({ size: 'xl', centered: true });
    this.yourImageUrl = './assets/img/profileclaudiagarfias.png';
  }

  openLink(url: string) {
    window.open(url, '_blank', 'noopener noreferrer');
  }

  openProtectedLink(event: MouseEvent, url: string | undefined) {
    event.preventDefault();

    const modalRef = this.modalService.open(PromptModalComponent);

    modalRef.result
      .then((password: string) => {
        if (password === 'uxclau') {
          window.open(url, '_blank', 'noopener noreferrer');
        } else {
          modalRef.componentInstance.showAlert = true; // Pass showAlert as true
        }
      })
      .catch(() => {
        // Modal dismissed, do nothing
      });
  }
}
