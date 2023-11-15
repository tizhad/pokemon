import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {Component} from "@angular/core";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {RouterModule} from "@angular/router";


@Component({
  template: '',
  selector: 'app-header',
})
export class MockHeaderComponent implements Partial<HeaderComponent> {
}

@Component({
  template: '',
  selector: 'app-footer',
})
export class MockFooterComponent implements Partial<FooterComponent> {
}

@Component({
  template: '',
  selector: 'app-sidebar',
})
export class MockSidebarComponent implements Partial<SidebarComponent> {
}

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent, MockHeaderComponent, MockFooterComponent, MockSidebarComponent],
    imports: [RouterModule.forRoot([])]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
    expect(fixture.componentInstance.title).toEqual('pokemon');
  });

  it(`should have as title 'pokemon'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pokemon');
  });
});
