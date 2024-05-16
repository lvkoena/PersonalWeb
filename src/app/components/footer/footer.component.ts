import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControlApiService } from 'src/app/services/form-control-api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  formData = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    message: ''
  };

  constructor(private formControlApiService: FormControlApiService,
    private _snackBar: MatSnackBar) {}

  onSubmit() {
    this.formControlApiService.submitForm(this.formData).subscribe(response => {
      this._snackBar.open('Form submitted successfully', 'Close', {
        duration: 3000,
        panelClass: ['success-snackbar']
      });
    }, error => {
      this._snackBar.open('Error submitted form', 'Close', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
    });
  }
}
