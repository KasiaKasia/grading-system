import { Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-scroll-up',
  standalone: true,
  imports: [IconComponent, MatButtonModule],
  templateUrl: './scroll-up.component.html',
})
export class ScrollUpComponent {
  showScrollButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showScrollButton = scrollY > 300;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
