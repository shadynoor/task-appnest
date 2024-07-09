import { Component, inject, Input, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [FormsModule, ButtonModule, ToastModule, RippleModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService],
})
export class TextComponent {
  @Input() product: any;
  messageService = inject(MessageService);
  @Input() type = '';
  initialId = 1;
  levelValue!: string;
  correctAnswer!: any;
  questionTitle = '';

  constructor() {
    setTimeout(() => {
      console.log(this.type);
    }, 3000);
  }

  onSubmit() {
    const data = {
      level: this.levelValue,
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
