import {
    AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, OnInit,
    ViewChild, ViewChildren
} from '@angular/core';

import { ExampleDirective } from '../example.directive';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, AfterContentInit, AfterViewInit {

  @ContentChild(ExampleDirective) contentChild;
  @ContentChildren(ExampleDirective, {read: ElementRef}) contentChildren;
  @ViewChild(ExampleDirective) viewChild;
  @ViewChildren(ExampleDirective) viewChildren;


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    // console.log(this.contentChild);
    // console.log(this.contentChildren);
  }

  ngAfterViewInit(): void {
    // console.log(this.viewChild);
    // console.log(this.viewChildren);
  }

}
