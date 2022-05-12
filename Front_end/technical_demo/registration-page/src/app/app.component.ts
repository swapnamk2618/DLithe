  import { Component } from '@angular/core';
  import { FormControl,FormGroup,Validators } from '@angular/forms';
  
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent { 
    title="Login";
    loginForm= new FormGroup({
      "fullName":new  FormControl("",Validators.required,),
      "email":new  FormControl("",Validators.required),
      "password":new  FormControl("",Validators.required,),
    })   
    onSubmit(){
      console.log("Form submited susssfully");
      
      console.log(this.loginForm);
    }
  }
