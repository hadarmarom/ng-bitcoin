import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinPreviewComponent } from './bitcoin-preview.component';

describe('BitcoinPreviewComponent', () => {
  let component: BitcoinPreviewComponent;
  let fixture: ComponentFixture<BitcoinPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitcoinPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
