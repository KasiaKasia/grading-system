import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLinkComponent } from '../component/router-link/router-link.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule, RouterLinkComponent],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {
  protected readonly status = '404';
  protected readonly message = 'Not Found';
}

