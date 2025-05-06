import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlojamentoPage } from './alojamento.page';

describe('AlojamentoPage', () => {
  let component: AlojamentoPage;
  let fixture: ComponentFixture<AlojamentoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlojamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
