import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-prompt-modal',
  templateUrl: './prompt-modal.component.html',
  styleUrls: ['./prompt-modal.component.scss'],
})
export class PromptModalComponent {
  password: string | undefined;

  constructor(public activeModal: NgbActiveModal) {}

  submit() {
    this.activeModal.close(this.password);
  }

  dismiss() {
    this.activeModal.dismiss();
  }
}
