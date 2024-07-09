import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SingleSubject } from '../../../../core/interfaces/interfaces';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-subject-card',
  standalone: true,
  imports: [ButtonModule, NgClass, RouterLink],
  templateUrl: './subject-card.component.html',
  styleUrl: './subject-card.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SubjectCardComponent {
  @Input() data!: SingleSubject;
  zoomClass = false;

  addZoomClass() {
    this.zoomClass = !this.zoomClass;
  }
}
