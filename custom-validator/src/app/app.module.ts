import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule and ReactiveFormsModule
import { AppComponent } from './app.component';
import { PasswordValidatorComponent } from './password-validator/password-validator.component';

@NgModule({
  declarations: [
    PasswordValidatorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Add this
    FormsModule           // (Optional) If using template-driven forms elsewhere
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }