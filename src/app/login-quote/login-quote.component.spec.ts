import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginQuoteComponent } from './login-quote.component';

describe('LoginQuoteComponent', () => {
  let component: LoginQuoteComponent;
  let fixture: ComponentFixture<LoginQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginQuoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
