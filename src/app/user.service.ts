import { Injectable } from '@angular/core';
import { userList } from './userlist';
import { userLayout } from './userlayout';
import { Observable, of } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: userLayout[] = [];
  
  constructor() { }

    getUser(username: string): Observable<userLayout>{
        const user: userLayout = userList.find(userList => userList.username === username );
        console.log(user);
        return of(user);
      
  }

   getUserDetails(): Observable<userLayout[]>{
     return of(userList);
   }

  addUserAcc(username: string, userid: number, password: string){
    this.users = userList;
    this.users.push({username, userid, password});
    return (this.users);
  }
  deleteUserAcc(index: number){
    this.users = userList;
    this.users.splice(index,1,);
    return (this.users);
  }
  }
  


