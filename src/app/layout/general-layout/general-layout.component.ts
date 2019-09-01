import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-general-layout',
  templateUrl: './general-layout.component.html',
  styleUrls: ['./general-layout.component.sass']
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class GeneralLayoutComponent implements OnInit {
  tabIndex: string;
  constructor(private route: ActivatedRoute) {
    this.tabIndex = '1';
  }

  ngOnInit() {
    const activeRouteUrl = this.route.snapshot['_routerState'].url;
    if (activeRouteUrl.includes('books')) {
      this.tabIndex = '1';
    } else {
      this.tabIndex = '2';
    }
  }
}
