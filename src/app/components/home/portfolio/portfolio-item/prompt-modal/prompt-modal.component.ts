import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-prompt-modal',
  templateUrl: './prompt-modal.component.html',
  styleUrls: ['./prompt-modal.component.scss'],
})
export class PromptModalComponent {
  password: string | undefined;
  @Input() showAlert: boolean = false;

  constructor(public activeModal: NgbActiveModal) {}

  submit() {
    if (this.password === 'uxclau') {
      this.activeModal.close(this.password); // Close the modal with the correct password
    } else {
      this.showAlert = true; // Show the alert for incorrect password
    }
  }

  dismiss() {
    this.activeModal.dismiss(); // Dismiss the modal without sending any data
  }
}
