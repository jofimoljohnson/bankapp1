import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user=""
  // deposit input
  acntnum1=""
  pswrd1=""
  amnt1=""
  // withdraw input
  acntnum2=""
  pswrd2=""
  amnt2=""


  constructor(private ds:DataService) { 
   this.user=this.ds.currentuser

  }
  

  ngOnInit(): void {
  }
     deposit(){
      // alert("deposited")
      var acntnum1=this.acntnum1
      var pswrd1=this.pswrd1
      var amnt1=this.amnt1
      const result=this.ds.deposit(acntnum1,pswrd1,amnt1)
      if(result){
        alert(`${amnt1} is credited ,new balance is ${result}`)
      }

     }
     withdraw(){
      // alert("withdraw success")
      var acntnum2=this.acntnum2
      var pswrd2=this.pswrd2
      var amnt2=this.amnt2
      const result=this.ds.withdraw(acntnum2,pswrd2,amnt2)
      if(result){
        alert(`${amnt2} is debited,new balance is ${result}`)
      }

     }

}
