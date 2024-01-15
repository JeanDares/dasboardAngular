import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginObj: any = {
    email: '',
    password: ''
  }

  constructor( private router: Router) {}

  onLogin(){
    if (this.loginObj.email == 'admin' && this.loginObj.password == '1234') {
      this.router.navigateByUrl('/layout')
      console.log('acesso ok')
    } else {
      alert('Credenciais invalidas')
    }
  }


}

