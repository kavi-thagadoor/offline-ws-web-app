import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrintComponent } from "./print/print.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrintComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-websocket-app';
}
