import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLinkComponent } from '../component/router-link/router-link.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, RouterLinkComponent],
  templateUrl: './menu.component.html',
})
export class MenuComponent {}
