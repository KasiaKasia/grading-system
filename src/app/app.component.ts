import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { NavbarComponent } from './core/navbar/navbar.component';
import { MenuComponent } from "./shared/menu/menu.component";
import { FooterComponent } from './core/footer/footer.component';
import { NavbarWcagComponent } from './core/navbar-wcag/navbar-wcag.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarWcagComponent, NavbarComponent, NgClass, MenuComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isMenuHidden = false;

  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
  }
}
