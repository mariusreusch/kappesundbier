import { TestBed, async } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { NoteListComponent } from "./note-list.component";

describe('NoteList Component', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NoteListComponent],
        }).compileComponents();
    }));

    it('should display note list', () => {
        let fixture = TestBed.createComponent(NoteListComponent);
        let noteListComponent = fixture.componentInstance;


        noteListComponent.notes = [
            {
                id: "123",
                text: "Das ist meine erste Notiz",
                date: "2016-12-12"
            }
        ];

        fixture.detectChanges(); // trigger initial data binding

        let noteUnorderedList = fixture.debugElement.query(By.css("[data-id='mynotes']"));

        expect(noteUnorderedList.nativeElement.textContent).toContain("meine erste");
    });
});
