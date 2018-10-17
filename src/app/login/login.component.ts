import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { userList } from '../userlist';
import { userLayout } from '../userlayout';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {   
  // users: userLayout[];
  users: userLayout;
  username: string; 
  password: string;
  
  constructor(private router: Router, private userSer: UserService ) { }

  ngOnInit() {
    
  }

  onLoginClick(event){
   
        this.userSer.getUser(this.username).subscribe({
      next: users => {
          this.users = users;
          console.log("found");
        }
    });
 
    if(this.users)
    {
      this.router.navigate(['./home']);
    }
  
    else{
       alert("Please enter correct credentials!!");
     }
    
  }

}
