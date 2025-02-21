import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-password-validator',
  templateUrl: './password-validator.component.html',
  styleUrls: ['./password-validator.component.css']
})
export class PasswordValidatorComponent {
  passwordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.passwordForm = this.fb.group({
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          this.hasUpperCase,
          this.hasNumber
        ]
      ]
    });
  }

  // Custom Validator for Uppercase Letters
  hasUpperCase(control: AbstractControl): { [key: string]: boolean } | null {
    const value = control.value || '';
    if (!/[A-Z]/.test(value)) {
      return { hasUpperCase: true };
    }
    return null;
  }

  // Custom Validator for Numbers
  hasNumber(control: AbstractControl): { [key: string]: boolean } | null {
    const value = control.value || '';
    if (!/[0-9]/.test(value)) {
      return { hasNumber: true };
    }
    return null;
  }

  get password() {
    return this.passwordForm.get('password');
  }

  onSubmit(): void {
    if (this.passwordForm.valid) {
      alert('Password is valid!');
    } else {
      alert('Please fix the errors.');
    }
  }
}