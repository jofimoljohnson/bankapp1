import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="Your perfect banking partner"
  acnt="Enter your account number"
  pswd="Enter your password"
  acno=""
  pswrd=""
  // userDetails: any = {
  //   1000: { acno: 1000, username: "Jofi", password: 123, balance: 100000 },
  //   1001: { acno: 1001, username: "Ammu", password: 123, balance: 200000 },
  //   1002: { acno: 1002, username: "Anu", password: 123, balance: 300000 },
  //   1003: { acno: 1003, username: "Arya", password: 123, balance: 400000 },
  //   1004: { acno: 1004, username: "Meena", password: 123, balance: 500000 },
  //   1005: { acno: 1005, username: "Rahul", password: 123, balance: 600000 }
  // }
  

  constructor(private router:Router,private ds:DataService) {}

  ngOnInit(): void {
  }
  login(){
    var acnum=this.acno
    var psw=this.pswrd
    const result=this.ds.login(acnum,psw)
    if(result){
      alert('login success')
      this.router.navigateByUrl('dashboard')
    }
  //   let userDetails=this.userDetails
  //   if(acnum in userDetails){
  //     if(psw==userDetails[acnum]['password']){
  //       alert("login success")

  //     }else{
  //       alert("incorrect password")
  //     }

  //   }
  //   //  alert("login clicked")
  //   else{
  //     alert("user not exist or incorrect account number")
  //   }
    
  // }



  // two way binding=>form-module


//   login(){
//     var acnum=this.acno
//     var psw=this.pswrd
//     let userDetails=this.userDetails
//     if(acnum in userDetails){
//       if(psw==userDetails[acnum]['password']){
//         alert("login success")
//         // redirection
//         this.router.navigateByUrl('dashboard')

//       }else{
//         alert("incorrect password")
//       }

//     }
//     //  alert("login clicked")
//     else{
//       alert("user not exist or incorrect account number")
//     }
    
//   }
// }


  // $event using template rendering method
//   login(a:any,b:any){
//   // console.log(a.value);
//   // console.log(b.value);
//   // event binding using template rendering variable
  
//     var acnum=a.value
//     var psw=b.value
//     let userDetails=this.userDetails
//     if(acnum in userDetails){
//       if(psw==userDetails[acnum]['password']){
//         alert("login success")

//       }else{
//         alert("incorrect password")
//       }

//     }
//     //  alert("login clicked")
//     else{
//       alert("user not exist or incorrect account number")
//     }
    
//   }
// }


  // $event method


//   acnoChange(event:any){
//     this.acno=event.target.value
//     console.log(this.acno);
    

//   }
// pswrdChange(event:any){
//   this.pswrd=event.target.value
//   console.log(this.pswrd);
  
// }
}
}
