import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transcations',
  templateUrl: './transcations.component.html',
  styleUrls: ['./transcations.component.css']
})
export class TranscationsComponent implements OnInit {
  acno: any
  transcations:any
  constructor(private ds: DataService) {
    this.acno = this.ds.currentAcno
    this.transcations=this.ds.getTransactions(this.acno)
    console.log(this.transcations);
    
    
  }

  ngOnInit(): void {
  }

}
