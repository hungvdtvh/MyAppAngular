import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit { 
  public name: string ='Võ Duy Hưng';
  public age: number = 1994;
  public skills: any=[];
  constructor() { }

  ngOnInit(): void {
    this.skills.push(
      {skill: "C#", year: 3, type: "Good"}, 
      {skill: "Javascript", year: 1, type: "Good"}, 
      {skill: "Python", year: 2, type: "Bad"});
    console.log(this.skills);
    } 
  public resetName(): void{
    //console.log("ResetName")
    this.name="";
  }
  
}
