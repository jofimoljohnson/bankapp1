import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentuser: any
  currentAcno:any

  userDetails: any = {
    1000: { acno: 1000, username: "Jofi", password: 123, balance: 100000, transcations: [] },
    1001: { acno: 1001, username: "Ammu", password: 123, balance: 200000, transcations: [] },
    1002: { acno: 1002, username: "Anu", password: 123, balance: 300000, transcations: [] },
    1003: { acno: 1003, username: "Arya", password: 123, balance: 400000, transcations: [] },
    1004: { acno: 1004, username: "Meena", password: 123, balance: 500000, transcations: [] },
    1005: { acno: 1005, username: "Rahul", password: 123, balance: 600000, transcations: [] }
  }

  constructor() { }
  register(acno: any, username: any, password: any) {
    let userDetails = this.userDetails
    if (acno in userDetails) {
      return false
    }
    else {
      userDetails[acno] = { acno, username, password, balance: 0 }
      console.log(userDetails);
      return true
    }

  }

  login(acnum: any, psw: any) {
    // var acnum=this.acno//=>two way binding
    // var psw=this.pswrd
    let userDetails = this.userDetails
    if (acnum in userDetails) {
      if (psw == userDetails[acnum]['password']) {
        this.currentuser = userDetails[acnum]['username']
        this.currentAcno=acnum
        return true
        // // alert("login success")
        // // redirection
        // this.router.navigateByUrl('dashboard')

      } else {

        alert("incorrect password")
        return false
      }

    }
    //  alert("login clicked")
    else {
      alert("user not exist or incorrect account number")
      return false
    }

  }
  deposit(acnum: any, pswrd: any, amnt: any) {
    let userDetails = this.userDetails
    var amount = parseInt(amnt)
    if (acnum in userDetails) {
      if (pswrd == userDetails[acnum]["password"]) {
        userDetails[acnum]["balance"] += amount
        userDetails[acnum]["transcations"].push({type:'CREDIT',amount})
        return userDetails[acnum]["balance"]
      }
      else {
        alert("incorrect password")
      }

    }
    else {
      alert("user not exist")
      return false
    }



  }
  withdraw(acnum: any, pswrd: any, amnt: any) {
    let userDetails = this.userDetails
    var amount = parseInt(amnt)
    if (acnum in userDetails) {
      if (pswrd == userDetails[acnum]["password"]) {
        if (userDetails[acnum]['balance'] >= amnt) {
          userDetails[acnum]["balance"] -= amount
          userDetails[acnum]["transcations"].push({type:'DEBIT',amount})
          return userDetails[acnum]["balance"]
        }
        else {
          alert("insufficient balance")
          return false
        }
      }
      else {
        alert("incorrect password")
      }
    }
    else {
      alert("user not exist")
      return false
    }
  }
  getTransactions(acno:any){
    return this.userDetails[acno]["transcations"]

  }

}




