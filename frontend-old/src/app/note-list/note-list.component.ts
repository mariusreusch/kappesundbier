import {Component, Input, OnInit, Output, EventEmitter} from "@angular/core";
import { Note } from "../model/note";
import {NoteService} from "./note.service";

@Component({
    selector: 'note-list',
    templateUrl: 'note-list.component.html'
})
export class NoteListComponent {

    @Input()
    notes: Note[];

    @Output()
    deleteNoteEvent = new EventEmitter<Note>();

    deleteNote(note: Note): void {
        this.deleteNoteEvent.emit(note);
    }

}
