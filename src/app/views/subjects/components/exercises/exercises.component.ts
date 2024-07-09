import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { DragDropModule } from 'primeng/dragdrop';
import { TextComponent } from './text/text.component';
import { McqmComponent } from './mcqm/mcqm.component';

@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [DragDropModule, NgFor, NgIf, TextComponent, McqmComponent],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.scss',
})
export class ExercisesComponent {
  availableProducts: any[] | undefined;

  selectedProducts!: any[];

  draggedProduct: any | undefined | null;

  ngOnInit() {
    this.selectedProducts = [];
    this.availableProducts = [
      { id: '1', name: 'اختيار من متعدد', type: 'mcqm' },
      { id: '2', name: 'اختيار فردي', type: 'mcqs' },
      { id: '2', name: 'نص', type: 'text' },
    ];
  }

  dragStart(product: any) {
    this.draggedProduct = product;
  }

  drop() {
    if (this.draggedProduct) {
      let draggedProductIndex = this.selectedProducts?.findIndex((e) => {
        return e.id === this.draggedProduct.id;
      });
      this.selectedProducts = [
        ...(this.selectedProducts as any[]),
        this.draggedProduct,
      ];
      this.draggedProduct = null;
    }
  }

  deleteFromQuestions(index: number) {
    this.selectedProducts.splice(index, 1);
  }

  dragEnd() {
    this.draggedProduct = null;
  }

  findIndex(product: any) {
    let index = -1;
    for (let i = 0; i < (this.availableProducts as any[]).length; i++) {
      if (product.id === (this.availableProducts as any[])[i].id) {
        index = i;
        break;
      }
    }
    return index;
  }
}
