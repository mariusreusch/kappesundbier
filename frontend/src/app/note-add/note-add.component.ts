import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Note} from "../model/note";

@Component({
    selector: 'note-add',
    templateUrl: 'note-add.component.html'
})
export class NoteAddComponent {

    note: Note = {id: "", text: "", date: ""};

    @Output()
    noteAddEvent = new EventEmitter<Note>();

    addNote(): void {
        console.log("addNote: " + this.note.text);
        this.noteAddEvent.emit(this.note);
    }
}
