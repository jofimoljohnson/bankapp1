import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname = ""
  uacnum = ""
  upswrd = ""
  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    // alert('registered')
    var uname=this.uname
    var uacnum=this.uacnum
    var upswrd=this.upswrd
    const result=this.ds.register(uacnum,uname,upswrd)
if(result){
  alert('registered')
  this.router.navigateByUrl('')
}
else{
  alert('user already exist')
}


    // let userDetails=this.ds.userDetails
    
  }

}
