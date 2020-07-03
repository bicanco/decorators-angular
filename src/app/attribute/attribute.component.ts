import { Component, OnInit, Attribute } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent implements OnInit {

  constructor(
    @Attribute('title') public title,
  ) { }

  ngOnInit(): void {
  }
}
