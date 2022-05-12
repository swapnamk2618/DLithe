import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RegisterCustomerService } from 'src/app/service/register-customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  
  // usersData:any=[];
  
  creditId:any;
  data:any;
  constructor(private registerCustomerService:RegisterCustomerService,private route:ActivatedRoute,private router:Router) {
  
    this.creditId = this.route.snapshot.params["creditId"];
    //   this.registerCustomerService.getTransaction().subscribe((data)=>{
    //     console.warn(data);
    //     this.transactions=data;
    //   })
    //   // this.getData();
      }
  
  ngOnInit(): void {
  // this.creditId=this.route.snapshot.params['creditId'];
   this.fetchTransaction(); 
  }
 fetchTransaction(){
    
    this.registerCustomerService.getTransaction(this.creditId)
    .subscribe((res:any) => {
      console.log(res);
     this.creditId= res.response.transactionResponse;
    })
  }
  
    
}
