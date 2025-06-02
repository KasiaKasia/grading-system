import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './img.component.html',
})
export class ImgComponent {
  readonly src = input<string>('')
  readonly alt = input<string>('')
}
