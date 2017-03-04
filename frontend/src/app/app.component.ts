import { Component } from "@angular/core";
import { NoteService } from "./note-list/note.service";
import { Note } from "./model/note";

@Component({
    selector: 'cookncode-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [NoteService]
})
export class AppComponent {

    constructor(private noteService: NoteService) {
    }

    notes: Note[];

    ngOnInit(): void {

    }

    deleteNote(note: Note): void {
        console.log("DeleteNote: " + note.id);
        this.noteService.deleteNote(note.id)
            .subscribe(() => this.ngOnInit());
    }

    addNote(note: Note): void {
        console.log("AddNote:" + note.text);
        this.noteService.addNote(note).subscribe(note => {
            console.log("added: " + note);
            this.ngOnInit();
        });
    }

}
