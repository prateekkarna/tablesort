import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tablesort',
  templateUrl: './tablesort.component.html',
  styleUrls: ['./tablesort.component.scss']
})
export class TablesortComponent implements OnInit {
  booleanValue: any = false;
  constructor() { }
  public dataList : Array<ITable> = [{
    title : 'test',
    votes : 1,
    date : new Date()
  },
  {
    title : 'test',
    votes : 2,
    date : new Date()
  },
  {
    title : 'test',
    votes : 3,
    date : new Date()
  },
  {
    title : 'test',
    votes : 6,
    date : new Date()
  },
  {
    title : 'test',
    votes : 5,
    date : new Date()
  },
  {
    title : 'test',
    votes : 4,
    date : new Date()
  }]

  ngOnInit(): void {
    
  }

  sortVotes() {
    // if (boolean == true){
        
    //     this.booleanValue = !this.booleanValue
    // }
    // else{
    //     this.dataList.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)
    //     this.booleanValue = !this.booleanValue
    // }
    this.dataList.sort((a, b) => a.votes < b.votes ? 1 : a.votes > b.votes ? -1 : 0)
}

}

export interface ITable{
    title : string,
    votes : number,
    date : Date
}
