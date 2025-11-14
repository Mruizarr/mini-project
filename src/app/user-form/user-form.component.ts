import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  name: string;
  email: string;
}

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  users: User[] = [];
  user: User = { name: '', email: '' };

  addUser() {
    if (this.user.name && this.user.email) {
      this.users.push({ ...this.user });
      this.user = { name: '', email: '' };
    } else {
      alert('Fill in all fields');
    }
  }
}