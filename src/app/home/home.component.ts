import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit { 
  public name: string ='Võ Duy Hưng';
  public age: Date = new Date(1993,12,15); 
  public yearD: number =0; 
  public skills: any=[];
  constructor() { }

  ngOnInit(): void {
    this.skills.push(
      {skill: "C#", year: 3.6784, type: "Good"}, 
      {skill: "Javascript", year: 1, type: "Good"}, 
      {skill: "Python", year: 2, type: "Bad"});
    this.age.setFullYear(1993);
    this.age.setMonth(12);
    this.age.setDate(15);
    this.yearD= new Date().getFullYear() - this.age.getFullYear();    
    console.log(this.age);
    //console.log(this.skills);
    //console.log(this.age.getFullYear());
    //console.log(new Date().getFullYear());
    } 
  public resetName(): void{
    //console.log("ResetName")
    this.name="";
  } 
}
