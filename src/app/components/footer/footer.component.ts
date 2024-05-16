import { Component } from '@angular/core';
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
    message: ''
  };

  constructor(private formControlApiService: FormControlApiService) {}

  onSubmit() {
    this.formControlApiService.submitForm(this.formData).subscribe(response => {
      console.log('Form submitted successfully', response);
    }, error => {
      console.error('Error submitting form', error);
    });
  }

  // fetchForms() {
  //   this.formControlApiService.getForms().subscribe(response => {
  //     console.log('Forms fetched successfully', response);
  //   }, error => {
  //     console.error('Error fetching forms', error);
  //   });
  // }
}
