import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn:'root'
})
export class RegisterCustomerService{
    baseUrl="http://localhost:8081/"
    constructor(private http:HttpClient){

    }
    register(registerBody:any){
        const url=`${this.baseUrl}register-user-detail`
        return this.http.post(url,registerBody);
    }

    login(loginBody:any){
        const url=`${this.baseUrl}user-login`
        return this.http.post(url,loginBody);
    }

    getTransaction(creditId:any){
        const url=`${this.baseUrl}fetch-transaction-detail/${creditId}`
        return this.http.get(url)
    
    }
    getCards(){
        const url=`${this.baseUrl}fetch-creditCards`
        return this.http.get(url)
    
    }

}