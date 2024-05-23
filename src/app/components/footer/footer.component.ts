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

    submitForm() {
      if (this.areFormFieldsEmpty(this.formData)) {
        this._snackBar.open('Please fill in all required fields', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
        return; 
      }
  
      this.formControlApiService.submitForm(this.formData).subscribe(
        response => {
          this._snackBar.open('Form submitted successfully', 'Close', {
            duration: 3000,
            panelClass: ['success-snackbar']
          }).afterDismissed().subscribe(() => {
            window.location.reload();
          });
        },
        error => {
          this._snackBar.open('Error submitting form', 'Close', {
            duration: 3000,
            panelClass: ['error-snackbar']
          });
        }
      );
    }
  
    private areFormFieldsEmpty(formData: any): boolean {
      for (const key in formData) {
        if (formData.hasOwnProperty(key) && !formData[key]) {
          return true; 
        }
      }
      return false;
    }
}
