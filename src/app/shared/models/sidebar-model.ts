import {IconName} from "@ng-icons/core";

export interface SideBar {
    appIconUrl: string,
    sideBar: Array<SidebarModel>,
    profile:SideBarProfile
}

export interface SidebarModel {
    title?: string,
    type: SideBarTye,
    children: Array<SideBarChildModel>,
}

export interface SideBarChildModel {
    title: string,
    icon: IconName,
    url: string,
    symbol?: string
}

export interface SideBarProfile {
    username: string,
    avatarUrl: string
}

export enum SideBarTye {
    MAIN, SUB, PROFILE
}
