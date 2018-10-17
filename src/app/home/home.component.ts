import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { userLayout } from '../userlayout';
import { Observable, Observer, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/Operators';
// import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public register:boolean = false;
   username: string;
   userid: number;
   password: string;
   users: userLayout[];
   mynumber: number;
   numbersObsSubscription: Subscription;
  
    
  constructor(
      private userSer: UserService,
     ) { }

  ngOnInit() {
    this.getusers();
    
      const numObservable = interval(1500)
      .pipe(map(data => {
        data = Math.random();
        console.log(data);
        if(data > 0.2) {
          return data;
        }
         }
      ));
      this.numbersObsSubscription = numObservable.subscribe((number: number) => {
        console.log(number);
      });
    }
    
  ngOnDestroy() {
    this.numbersObsSubscription.unsubscribe();
  }
     



  // toggle(){
  //   this.register=!this.register;
  // }

   getusers(): void {
     this.userSer.getUserDetails()
       .subscribe(users => this.users = users);
   }

   addUsers() {
    console.log(this.username, this.userid, this.password);
    this.userSer.addUserAcc(this.username, this.userid, this.password);        
   }
  
   deleteUsers(index) {
    console.log(index);
     this.userSer.deleteUserAcc(index);
        
   }
 }
 
  
 

 

