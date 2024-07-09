import { Component, inject, Input, ViewEncapsulation } from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-mcqm',
  standalone: true,
  imports: [
    RadioButtonModule,
    FormsModule,
    ButtonModule,
    ToastModule,
    RippleModule,
  ],
  templateUrl: './mcqm.component.html',
  styleUrl: './mcqm.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService],
})
export class McqmComponent {
  messageService = inject(MessageService);
  @Input() product: any;
  @Input() type = '';
  initialId = 1;
  levelValue!: string;
  correctAnswer!: any;

  options: any = {
    option1: {
      value: '',
      checked: false,
    },
  };
  optionsArr: any[] = Object.keys(this.options);
  optionValueArr: any[] = Object.values(this.options);
  questionTitle = '';

  constructor() {
    setTimeout(() => {
      console.log(this.type);
    }, 3000);
  }

  addOption() {
    this.initialId++;
    this.options = {
      ...this.options,
      ['option' + this.initialId]: { value: '', checked: false },
    };
    this.optionsArr = Object.keys(this.options);
    this.optionValueArr = Object.values(this.options);
  }

  selectCorrectAnswer(index: number) {
    if (this.type == 'singe') {
      this.optionValueArr.forEach((e) => {
        e.checked = false;
      });
    }
    this.optionValueArr[index].checked = true;
    if (this.type == 'single') {
      this.correctAnswer = this.optionValueArr[index].value;
    } else {
      if (this.correctAnswer) {
        this.correctAnswer.push(this.optionValueArr[index].value);
      } else {
        this.correctAnswer = [this.optionValueArr[index].value];
      }
    }
  }

  onSubmit() {
    const data = {
      level: this.levelValue,
      options: this.options,
      correctAnswer: this.correctAnswer,
      questionTitle: this.questionTitle,
    };

    console.log(data);

    this.messageService.add({
      severity: 'success',
      detail: 'تم الحفظ',
      life: 30000,
    });
  }
}
