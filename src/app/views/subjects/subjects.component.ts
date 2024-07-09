import {
  Component,
  inject,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { TabViewChangeEvent, TabViewModule } from 'primeng/tabview';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { SubjectCardComponent } from './components/subject-card/subject-card.component';
import { SingleSubject } from '../../core/interfaces/interfaces';
import { take } from 'rxjs';
import { GeneralService } from '../../core/services/general.service';

@Component({
  selector: 'app-subjects',
  standalone: true,
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [TabViewModule, ExercisesComponent, SubjectCardComponent],
})
export class SubjectsComponent implements OnInit, OnDestroy {
  // services
  apiService = inject(ApiService);
  generalService = inject(GeneralService);
  // vars
  subjectTabs = ['المواد الدراسية', 'كل التمارين'];
  subjectsData: SingleSubject[] = [];
  @Input('name') name!: string;

  ngOnInit(): void {
    this.generalService.currentTab = 'المواد';
    this.apiService
      .getApiData()
      .pipe(take(1)) // Always unsubscribe
      .subscribe({
        next: (res) => (this.subjectsData = res),
        error: (err) => Error(err),
      });
  }

  changeTab(event: TabViewChangeEvent) {
    this.generalService.currentTab = this.subjectTabs[event.index];
  }

  ngOnDestroy(): void {
    this.generalService.currentTab = '';
  }
}
