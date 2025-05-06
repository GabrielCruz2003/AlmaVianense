import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClubesDesportivosPage } from './clubes-desportivos.page';

describe('ClubesDesportivosPage', () => {
  let component: ClubesDesportivosPage;
  let fixture: ComponentFixture<ClubesDesportivosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubesDesportivosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
