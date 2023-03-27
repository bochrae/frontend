import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateficheComponent } from './updatefiche.component';

describe('UpdateficheComponent', () => {
  let component: UpdateficheComponent;
  let fixture: ComponentFixture<UpdateficheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateficheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
