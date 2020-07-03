import {
    Component, Directive, Host, HostBinding, HostListener, OnInit, Optional
} from '@angular/core';

export class OtherService { }
export class HostService { }

// tslint:disable-next-line: directive-selector
@Directive({ selector: 'child-directive' })
export class ChildDirective implements OnInit {
  logs: string[] = [];

  constructor(
    @Optional() @Host() os: OtherService, @Optional() @Host() hs: HostService,
  ) {
    // os is null: true
    this.logs.push(`os is null: ${os === null}`);
    // hs is an instance of HostService: true
    this.logs.push(`hs is an instance of HostService: ${hs instanceof HostService}`);
  }

  ngOnInit(): void {
    // console.log(this.logs);
  }

}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'parent-cmp',
  viewProviders: [HostService],
  template: '<child-directive></child-directive>'
})
// tslint:disable-next-line: component-class-suffix
export class ParentCmp { }


@Component({
  selector: 'app-host',
  template: `
    Host
    <parent-cmp></parent-cmp>
  `,
  styleUrls: ['./host.component.scss'],
  viewProviders: [OtherService],
})
export class HostComponent implements OnInit {
  @HostBinding('style.font-size') font: string;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('click', ['$event'])
  Onclick($event: any) {
    // console.log($event);
    this.font = Math.floor(Math.random() * 20) + 10 + 'px';
  }

}
