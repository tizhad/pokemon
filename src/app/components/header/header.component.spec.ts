import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have a button with Home text.', () => {
    const btn: DebugElement = fixture.debugElement.nativeElement.querySelector('button');
    expect(btn).toBeTruthy();
  });

  it('should call a function when home button clicked. ', () => {
    const spy = spyOn(component, 'onBackHome');
    const btn: DebugElement = fixture.debugElement.query(By.css('button'));
    btn.nativeElement.click();
    expect(spy).toHaveBeenCalled();
  });
});
