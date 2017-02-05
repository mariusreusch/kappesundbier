import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NoteListComponent } from "./note-list/note-list.component";
import {NoteAddComponent} from "./note-add/note-add.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent, NoteListComponent, NoteAddComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
