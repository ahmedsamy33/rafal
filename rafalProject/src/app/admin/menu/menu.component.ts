import { GlobalService } from './../../services/global.service';
import { Component, OnInit, Input } from '@angular/core';
import { collapse } from '../animation/collapse-animate';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [collapse]

})
export class MenuComponent implements OnInit {

  @Input()menuInfo: any;
  constructor(private _globalService: GlobalService) {



    console.log(this.menuInfo ,);
    
   }

  ngOnInit() {
  }

  private isToggleOn(item) {
    item.toggle === 'on' ? item.toggle = 'off' : item.toggle = 'on';
  }

  private _selectItem(item) {
    //this._globalService._isActived(item);
    this._globalService.dataBusChanged('isActived', item);
  }
}
