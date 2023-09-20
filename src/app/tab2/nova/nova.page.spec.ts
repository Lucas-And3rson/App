import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NovaPage } from './nova.page';

describe('NovaPage', () => {
  let component: NovaPage;
  let fixture: ComponentFixture<NovaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NovaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
