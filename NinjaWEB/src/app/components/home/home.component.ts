import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  submitForm():void{
    console.log("Clicou em mim")
  }

  ngOnInit(): void {
    const submitButton  =  document.querySelector('.submitCTA')

    submitButton?.addEventListener('click', this.submitForm)
  }



}
