import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImgZoomModalComponent } from '../img-zoom-modal/img-zoom-modal.component';

@Component({
  selector: 'app-sales-statement',
  templateUrl: './sales-statement.component.html',
  styleUrls: [
    './sales-statement.component.scss',
    '../projects-main/projects-main.component.scss',
  ],
})
export class SalesStatementComponent {
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
}
