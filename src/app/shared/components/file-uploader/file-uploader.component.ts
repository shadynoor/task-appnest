import { NgFor, NgStyle } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { NgxFileDropEntry, NgxFileDropModule } from 'ngx-file-drop';

@Component({
  selector: 'app-file-uploader',
  standalone: true,
  imports: [NgxFileDropModule, NgStyle],
  templateUrl: './file-uploader.component.html',
  styleUrl: './file-uploader.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class FileUploaderComponent {
  public files: NgxFileDropEntry[] = [];
  fileOverFlag = false;
  currentFile!: File;
  @Output() uploadedFile = new EventEmitter<File>();

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          if (file.size > 52428800) {
            alert('error');
            return;
          }
          this.currentFile = file;
          this.uploadedFile.emit(file);
          this.fileOverFlag = false;
        });
      }
      //  else {
      //   // It was a directory (empty directories are added, otherwise only files)
      //   const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
      //   console.log(droppedFile.relativePath, fileEntry);
      //   this.currentFile = fileEntry;
      // }
    }
  }

  public fileOver(event: any) {
    // console.log(event);
    this.fileOverFlag = true;
  }

  public fileLeave(event: any) {
    // console.log(event);
    this.fileOverFlag = false;
  }
}
