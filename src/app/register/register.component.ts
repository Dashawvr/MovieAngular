import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // login(form): void {
  //   console.log(form.value);
  //   this.authService.signIn(form.value).subscribe((res) => {
  //     console.log('Logged in!');
  //     this.router.navigateByUrl('home');
  //   });
  // }

}
