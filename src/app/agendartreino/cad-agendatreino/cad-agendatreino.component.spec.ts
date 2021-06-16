import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CadAgendatreinoComponent } from './cad-agendatreino.component';



describe('CadAgendatreinoComponent', () => {
  let component: CadAgendatreinoComponent;
  let fixture: ComponentFixture<CadAgendatreinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadAgendatreinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadAgendatreinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
