import {Injectable} from '@angular/core';
import {SideBar, SideBarTye} from "../models/sidebar-model";

@Injectable()
export class SideBarService {

  public getSideBarItems(): SideBar {
    return {
      appIconUrl: 'https://cdn-icons-png.flaticon.com/128/9436/9436365.png',
      profile: {
        username: 'Shade',
        avatarUrl: 'https://cdn-icons-png.flaticon.com/128/4140/4140048.png'
      },
      sideBar: [
        {
          type: SideBarTye.MAIN,
          children: [
            {
              title: 'Home',
              icon: 'heroHomeSolid',
              url: ''
            }
          ]
        },
        {
          title: 'Filters',
          type: SideBarTye.SUB,
          children: [
            {
              title: 'Cards',
              icon: 'heroCreditCardSolid',
              url: '',
              symbol: 'C'
            }
          ]
        }
      ]
    }
  }
}
