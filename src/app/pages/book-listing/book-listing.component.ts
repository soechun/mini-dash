import { MockDataService } from './../../mock-data.service';
import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-book-listing',
  templateUrl: './book-listing.component.html',
  styleUrls: ['./book-listing.component.sass']
})
export class BookListingComponent implements OnInit {
  tableData:Array<any>;
  origin: Array<any>;
  query: String;
  constructor( private mockData:MockDataService ) {
    this.tableData = []
  }

  ngOnInit() {
    this.mockData.getJSON().subscribe(response => {
      this.origin = response.data;
      this.tableData = this.origin;
    })
  }
  queryChanged(event) {

    if(this.query === '') {
      this.tableData = this.origin;
      return;
    }
    this.tableData = _.filter(this.origin, (obj) => {
      var found = false;
      if(obj.links == null) found =  false;
      else {
        found = found || (obj.links.self.toLowerCase().includes(this.query.toLowerCase()))
      }
      if(obj.attributes == null) {found = found || false;}
      else {
        found = (found || (obj.attributes.display_properties.type.toLowerCase().includes(this.query.toLowerCase())));
        found = (found || (obj.attributes.urn.toLowerCase().includes(this.query.toLowerCase())))
      }

      return found;
    })
    console.log('data', this.tableData)
  }
}
