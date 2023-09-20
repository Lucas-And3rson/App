import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecentesPage } from './recentes.page';

describe('RecentesPage', () => {
  let component: RecentesPage;
  let fixture: ComponentFixture<RecentesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
