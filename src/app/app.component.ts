import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Frame1364Component } from './components/frame-1364/frame-1364.component';
import { LoginComponent } from './pages/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Frame1364Component, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent implements OnInit {
  
  constructor() {}
  
  ngOnInit(): void {
  }

  title = 'Address-Query';
}
