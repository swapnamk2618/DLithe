import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { categories } from 'src/app/categories';
import { RegisterCustomerService } from 'src/app/service/register-customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  creditList: any;
  creditId:any;

  transform(value:string): string{
    switch(value){
      case 'Reported':{
        return 'red';
      }
      case 'Resolved':{
        return 'green';
      }
      default:
        return '';
    }
  }

  
  li=categories;

  constructor(private registerCustomerService:RegisterCustomerService,private router:Router, private route:ActivatedRoute) {
    this.creditId=this.route.snapshot.params["creditId"];
   }

  ngOnInit(): void {
    this.cardList();
  }
  cardList(){
    this.registerCustomerService.getCards()
    .subscribe((res:any) => {
      console.log(res);
      this.creditList= res.response.creditCardResponse;
    })
  }
  fetchTransactionHistory(cardId:any){
    this.router.navigate(["/transaction",cardId])
  }
}
