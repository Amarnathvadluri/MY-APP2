import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuraldirectivesComponent } from './structuraldirectives.component';

describe('StructuraldirectivesComponent', () => {
  let component: StructuraldirectivesComponent;
  let fixture: ComponentFixture<StructuraldirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuraldirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuraldirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
