import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-overview',
  templateUrl: './home-overview.component.html',
  styleUrls: ['./home-overview.component.scss']
})
export class HomeOverviewComponent implements OnInit {

  showAddHomeForm: boolean = false;
  showFindHumeForm: boolean = false;

  constructor() { }

  ngOnInit() {}

  displayAddHomeForm() { this.showAddHomeForm = !this.showAddHomeForm; }
  displayFindHumeForm() { this.showFindHumeForm = !this.showFindHumeForm; }

}
