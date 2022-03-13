import { SubLink } from "./sublink.model"

export interface SidenavItem {
    navLabel: string
    navIcon: string
    baseUrl: string
    subLinks: SubLink[]
    isDropdown: boolean
  }