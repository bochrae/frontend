import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddficheComponent } from './addfiche.component';

describe('AddficheComponent', () => {
  let component: AddficheComponent;
  let fixture: ComponentFixture<AddficheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddficheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
