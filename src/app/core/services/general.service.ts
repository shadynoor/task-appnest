import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  currentTab = '';
  responsiveSideToggler = false;
}
