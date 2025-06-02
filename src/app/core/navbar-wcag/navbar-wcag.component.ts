import { Component } from '@angular/core';
import { FontSize, UIActionType } from '../settings-wcag/settings-wcag';
import { ImgComponent } from "../../shared/component/img/img.component";
import { ButtonComponent } from '../../shared/component/button/button.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar-wcag',
  standalone: true,
  imports: [ ButtonComponent, ImgComponent, MatToolbarModule ],
  templateUrl: './navbar-wcag.component.html',
})
export class NavbarWcagComponent {
  UiActionType = UIActionType;
  FontSize = FontSize;
}
