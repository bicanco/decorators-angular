

import { Component, Injectable, Injector, OnInit, Self, SkipSelf } from '@angular/core';

class Dependency { }

@Injectable()
class NeedsDependencySelf {
  constructor(@Self() public dependency: Dependency) {}
}

@Injectable()
class NeedsDependencySkipSelf {
  constructor(@SkipSelf() public dependency: Dependency) {}
}


@Component({
  selector: 'app-self',
  template: ``,
  styleUrls: ['./self.component.scss']
})
export class SelfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let inj = Injector.create({
      providers: [
        {provide: Dependency, deps: []},
        {provide: NeedsDependencySelf, deps: [Dependency]}
      ],
    });

    const nds = inj.get(NeedsDependencySelf);

    // console.log(nds.dependency instanceof Dependency);

    let child = Injector.create({
      providers: [{provide: NeedsDependencySelf, deps: [[new Self(), Dependency]]}],
      parent: inj,
    });

    try {
      child.get(NeedsDependencySelf);
    } catch (error) {
      // console.log(error);
    }

    const parent = Injector.create({providers: [{provide: Dependency, deps: []}]});

    child =
      Injector.create({providers: [{provide: NeedsDependencySkipSelf, deps: [Dependency]}], parent});

    // console.log(child.get(NeedsDependencySkipSelf).dependency instanceof Dependency);

    inj = Injector.create(
      {providers: [{provide: NeedsDependencySkipSelf, deps: [[new Self(), Dependency]]}]});

    try {
      inj.get(NeedsDependencySkipSelf);
    } catch (error) {
      // console.log(error);
    }
  }

}
