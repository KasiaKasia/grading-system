import { Component, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { RouterLinkComponent } from '../../shared/component/router-link/router-link.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, MatIconModule, RouterLinkComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  protected icon_left = false;
  protected toggleMenu = output();
}
