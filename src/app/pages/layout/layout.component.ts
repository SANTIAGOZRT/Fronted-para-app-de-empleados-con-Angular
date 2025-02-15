import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'], // Corrected 'styleUrl' to 'styleUrls'
})
export class LayoutComponent {
  router = inject(Router);

  logOff() {
    this.router.navigateByUrl('login');
  }
}
