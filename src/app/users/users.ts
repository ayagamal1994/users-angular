import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  imports: [FormsModule, CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.scss'
})
export class Users {
  users = [
  {
    profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
    username: "alex smith",
    email: "alexsmith@example.com",
    phone: "+1-555-1234",
    birthdate: "1990-05-12",
    role: "admin",
  },
  {
    profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=jessica",
    username: "jessica jones",
    email: "jessica.jones@example.com",
    phone: "+1-555-2345",
    birthdate: "1988-03-22",
    role: "moderate",
  },
  {
    profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    username: "michael johnson",
    email: "michael.j@example.com",
    phone: "+1-555-3456",
    birthdate: "1992-08-30",
    role: "user",
  },
  {
    profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    username: "sarah lee",
    email: "sarah.lee@example.com",
    phone: "+1-555-4567",
    birthdate: "1995-12-14",
    role: "moderate",
  },
  {
    profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=daniel",
    username: "daniel martin",
    email: "daniel.martin@example.com",
    phone: "+1-555-5678",
    birthdate: "1985-07-09",
    role: "admin",
  },
  {
    profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
    username: "emily white",
    email: "emily.white@example.com",
    phone: "+1-555-6789",
    birthdate: "1991-11-03",
    role: "user",
  },
  {
    profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    username: "david hall",
    email: "david.h@example.com",
    phone: "+1-555-7890",
    birthdate: "1993-04-18",
    role: "moderate",
  },
  {
    profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=ashley",
    username: "ashley brown",
    email: "ashley.b@example.com",
    phone: "+1-555-8901",
    birthdate: "1990-09-27",
    role: "user",
  },
  {
    profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
    username: "james williams",
    email: "james.w@example.com",
    phone: "+1-555-9012",
    birthdate: "1987-06-11",
    role: "admin",
  },
  {
    profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=olivia",
    username: "olivia roberts",
    email: "olivia.r@example.com",
    phone: "+1-555-0123",
    birthdate: "1994-02-05",
    role: "user",
  },
  ];

  searchValue:string = "";
  searchButtonClicked:boolean = false

  searchByEmail(){
    this.searchButtonClicked =true;
  }

   
}

