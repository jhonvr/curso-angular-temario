import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title: string;
  isHappy: boolean = false;
  numberOne: number = 1;
  numberTwo:number = 2;
  name : string ='Jhonatan';
  logo: string='assets/images/logo.svg'
  
  
  constructor(){
    this.title = 'Curso Angular';
  }

  handleClick(){
    this.name="Amadeo";
  }

  handleInput(event:any){
    this.name = event.target.value;
  }

  handleBlur(event:any){
    this.name = event.target.value;
  }

  handleChange(value:string){
    this.name=value;
  }

  handleClickRefs(value:string){
    console.log(value);
  }


}
