import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SobreMimPage } from './sobre-mim.page';

describe('SobreMimPage', () => {
  let component: SobreMimPage;
  let fixture: ComponentFixture<SobreMimPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreMimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
