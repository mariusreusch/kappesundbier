import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import { Note } from "../model/note";

@Injectable()
export class NoteService {

    private url = './ws/rest/notes';

    constructor(private http: Http) {
    }

    getAllNotes(): Observable<Note[]> {
        return this.http.get(this.url)
            .map(response => response.json());


    }

    deleteNote(id: string): Observable<any> {
        let res: Observable<any> = this.http.delete(`${this.url}/${id}`);
        res.subscribe(() => {
            console.log("Deleted: " + id);
        });
        return res;
    }

    addNote(note: Note): Observable<Note> {
        return this.http.post(this.url, note).map(response => response.json());
    }
}
