import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  buttons = ['1','2','3','4','5','6','7','8','0','.','+','-','/','*','DEL','=']
  val = ''
  constructor() { }

  ngOnInit() {
  }
  calculate($event){
    var button = $event; 
    if(button === "="){
      if(this.val.length > 2 && this.val.toString().slice(-2) === "/0"){
        this.val = "cannot be divided by 0";
      }
      else{
        try{
          this.val = eval(this.val)
        }
        catch(e){
          if (e instanceof SyntaxError) {
            this.val = "Invalid Syntax";
          } else {
            this.val = "Invalid Syntax";
          }
        }
      }
    }
    else if(button === 'CLEAR'){
      this.val = "";
    }
    else if(button === "DEL"){
      if(this.val == "cannot be divided by 0" || this.val =="Invalid Syntax"){
        this.val = '';
      }
      else{
        console.log("this.val----------->",this.val);
        this.val = this.val.toString().slice(0, -1);
    }
    }
    else if(['+','-','/','*'].includes(button) && this.val.length >1){
      //console.log("this.val[this.val.length-1]------------->",this.val.slice(-1)," and value------------->",['+','-','/','*'].includes(this.val.slice(-1)));
      if(['+','-','/','*'].includes(this.val.toString().slice(-1))){
        this.val = this.val.toString().slice(0, -1);
        this.val += button;
      }
      else{
        if(this.val == "cannot be divided by 0" || this.val =="Invalid Syntax"){
          this.val = '';
          this.val += button;
        }
        else{
        this.val += button;}
      }
    }
    else{
      if(this.val == "cannot be divided by 0" || this.val =="Invalid Syntax"){
        this.val = '';
        this.val += button;
      }
      else{
      this.val += button;}
    }
    
    console.log("this.val------------->",this.val);
  }

}
