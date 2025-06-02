import { Component } from '@angular/core';
import { ScrollUpComponent } from '../../shared/component/scroll-up/scroll-up.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ScrollUpComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {}
