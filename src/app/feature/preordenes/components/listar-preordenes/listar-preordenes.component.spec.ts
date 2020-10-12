import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPreordenesComponent } from './listar-preordenes.component';

describe('ListarPreordenesComponent', () => {
  let component: ListarPreordenesComponent;
  let fixture: ComponentFixture<ListarPreordenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPreordenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPreordenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
