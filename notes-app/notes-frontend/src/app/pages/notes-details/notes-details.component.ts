import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/shared/note.model';

@Component({
  selector: 'app-notes-details',
  templateUrl: './notes-details.component.html',
  styleUrls: ['./notes-details.component.scss']
})
export class NotesDetailsComponent implements OnInit {

  note: Note;

  constructor() { }

  ngOnInit() {
    this.note = new Note();
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
