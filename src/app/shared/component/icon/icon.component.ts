import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './icon.component.html',
})
export class IconComponent {
  readonly styleIcon = input<string>('')
  readonly ariaLabel = input<string>('')
  readonly nameIcon = input<string>('')
}
