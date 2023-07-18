import { Component } from '@angular/core';
import {SideBar, SideBarTye} from "../../models/sidebar-model";
import {SideBarService} from "../../services/side-bar.service";

@Component({
  selector: 'wraith-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  protected readonly SideBarTye = SideBarTye;

  public sideBar: SideBar;

  constructor(private readonly sideBarService: SideBarService) {
    this.sideBar = this.sortItems(sideBarService.getSideBarItems());
  }

  private sortItems(sideBar: SideBar) {
    let sidebarModels = sideBar.sideBar.slice();
    sidebarModels.sort((a, b) => a.type - b.type);
    const side = sideBar;
    side.sideBar = sidebarModels;
    return side;
  }

}
