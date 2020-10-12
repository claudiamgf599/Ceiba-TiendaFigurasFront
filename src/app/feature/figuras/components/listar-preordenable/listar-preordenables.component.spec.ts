import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPreordenablesComponent } from './listar-preordenables.component';

describe('ListarPreordenablesComponent', () => {
  let component: ListarPreordenablesComponent;
  let fixture: ComponentFixture<ListarPreordenablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPreordenablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPreordenablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
