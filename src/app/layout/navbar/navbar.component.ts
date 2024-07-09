import { Component, inject } from '@angular/core';
import { GeneralService } from '../../core/services/general.service';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenuModule, ButtonModule, AvatarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  generalService = inject(GeneralService);

  items = [
    {
      items: [
        {
          label: 'Link 1',
        },
        {
          label: 'Link 2',
        },
      ],
    },
  ];

  toggleSidebar() {
    this.generalService.responsiveSideToggler =
      !this.generalService.responsiveSideToggler;
  }
}
