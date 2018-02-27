import { Component } from '@angular/core';

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string;
  isHappy: boolean = false;
  numberOne: number = 1;
  numberTwo:number = 2;
  name : string ='Jhonatan';
  logo: string='assets/images/logo.svg'
  passengers: Passenger[] = [{
    id: 1,
    fullname: 'Stephen',
    checkedIn: true
  }, {
    id: 2,
    fullname: 'Rose',
    checkedIn: false
  }, {
    id: 3,
    fullname: 'James',
    checkedIn: true
  }, {
    id: 4,
    fullname: 'Louise',
    checkedIn: true
  }, {
    id: 5,
    fullname: 'Tina',
    checkedIn: false
  }];


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
