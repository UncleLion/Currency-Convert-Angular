import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { RouterTestingModule } from '@angular/router/testing';
=======
>>>>>>> refs/remotes/origin/main
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
<<<<<<< HEAD
    imports: [RouterTestingModule],
=======
>>>>>>> refs/remotes/origin/main
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it(`should have as title 'autocomplete-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('autocomplete-app');
=======
  it(`should have as title 'currency-convert-'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('currency-convert-');
>>>>>>> refs/remotes/origin/main
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
<<<<<<< HEAD
    expect(compiled.querySelector('.content span')?.textContent).toContain('autocomplete-app app is running!');
=======
    expect(compiled.querySelector('.content span')?.textContent).toContain('currency-convert- app is running!');
>>>>>>> refs/remotes/origin/main
  });
});
