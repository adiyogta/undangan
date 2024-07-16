import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTamuComponent } from './list-tamu.component';

describe('ListTamuComponent', () => {
  let component: ListTamuComponent;
  let fixture: ComponentFixture<ListTamuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTamuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTamuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
