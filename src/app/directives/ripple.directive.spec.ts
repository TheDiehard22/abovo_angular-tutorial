import { RippleDirective } from './ripple.directive';
import { Component, HostListener } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Simple test component that will not in the actual app
@Component({
  template: '<p app-ripple>Testing Directives is awesome!</p>',
})
class TestComponent {
  // clickCount is not necessary but it's used here to verify that the component
  // is actually getting clicked
  clickCount = 0;

  constructor() {}

  // allows us to listen to click events on the main wrapper element of our component
  @HostListener('click')
  onClick(): void {
    this.clickCount = ++this.clickCount; // increment clickCount
  }
}

describe('RippleDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, RippleDirective],
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });
});
