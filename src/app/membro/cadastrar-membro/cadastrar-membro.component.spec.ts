import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarMembroComponent } from './cadastrar-membro.component';

describe('CadastrarMembroComponent', () => {
  let component: CadastrarMembroComponent;
  let fixture: ComponentFixture<CadastrarMembroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarMembroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarMembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
