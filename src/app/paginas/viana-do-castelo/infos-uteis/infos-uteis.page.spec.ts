import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfosUteisPage } from './infos-uteis.page';

describe('InfosUteisPage', () => {
  let component: InfosUteisPage;
  let fixture: ComponentFixture<InfosUteisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosUteisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
