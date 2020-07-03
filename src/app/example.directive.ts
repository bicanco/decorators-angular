import { element } from 'protractor';
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appExample]'
})
export class ExampleDirective implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }
}
