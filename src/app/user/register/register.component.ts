import { Component, inject } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../auth.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  auth = inject(AuthService);
  formBuilder = inject(FormBuilder);
  hide = true;
  registerform = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    displayname: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  register() {
    if (this.registerform.valid) {
      if (
        this.registerform.value.email &&
        this.registerform.value.password &&
        this.registerform.value.displayname
      ) {
        this.auth.register(
          this.registerform.value.email,
          this.registerform.value.password,
          this.registerform.value.displayname,
        );
      }
    }
  }
}
