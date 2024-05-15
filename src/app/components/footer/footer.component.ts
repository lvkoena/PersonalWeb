import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControlApiService } from 'src/app/services/form-control-api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private formControlService: FormControlApiService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.formControlService.submitForm(this.form.value).subscribe(response => {
        console.log('Form submitted successfully', response);
      });
    }
  }
}
