import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeMode, ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(public themeService: ThemeService) {}

  setTheme(theme: ThemeMode): void {
    this.themeService.setTheme(theme);
  }
}
