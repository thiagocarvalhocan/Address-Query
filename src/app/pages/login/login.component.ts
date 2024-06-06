import { Component } from '@angular/core';
import { Frame1364Component } from "../../components/frame-1364/frame-1364.component";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [Frame1364Component]
})
export class LoginComponent {

}
