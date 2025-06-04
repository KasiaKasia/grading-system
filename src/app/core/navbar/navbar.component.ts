import { Component, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { RouterLinkComponent } from '../../shared/component/router-link/router-link.component';
import { IconComponent } from '../../shared/component/icon/icon.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, MatIconModule, RouterLinkComponent, IconComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  protected icon_left = false;
  protected toggleMenu = output();
}
