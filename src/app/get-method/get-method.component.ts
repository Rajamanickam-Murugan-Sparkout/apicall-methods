import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'
@Component({
  selector: 'app-get-method',
  templateUrl: './get-method.component.html',
  styleUrls: ['./get-method.component.css']
})
export class GetMethodComponent implements OnInit {

  obj:any = []
  constructor(private api: DataService){

  }

  ngOnInit(){
    this.api.apiCall().subscribe(data =>{
      console.log(data)
      this.obj = data;
    })

  }

  

}
