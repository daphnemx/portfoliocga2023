import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'img-zoom-modal',
  templateUrl: './img-zoom-modal.component.html',
  styleUrls: ['./img-zoom-modal.component.scss'],
  styles: [
    `
      .dark-modal .modal-content {
        background-color: #292b2c;
        color: white;
      }
      .dark-modal .close {
        color: white;
      }
      .light-blue-backdrop {
        background-color: #5cb3fd;
      }
    `,
  ],
})
export class ImgZoomModalComponent {
  @Input() imgPath: string = '';
  closeResult: string = '';

  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal
  ) {}

  dismiss() {
    this.activeModal.dismiss();
  }
  /*
  openBackDropCustomClass(content: any) {
    this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
  }

  openWindowCustomClass(content: any) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content: any) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  openXl(content: any) {
    this.modalService.open(content, { size: 'xl', centered: true });
  }

  openFullscreen(content: any) {
    this.modalService.open(content, { fullscreen: true });
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

  openScrollableContent(longContent: any) {
    this.modalService.open(longContent, { scrollable: true });
  }

  openModalDialogCustomClass(content: any) {
    this.modalService.open(content, { modalDialogClass: 'dark-modal' });
  }*/
}
