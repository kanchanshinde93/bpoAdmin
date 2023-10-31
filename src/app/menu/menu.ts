import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [
  {
    id: 'home',
    title: 'Home',
    translate: 'MENU.HOME',
    type: 'item',
    icon: 'home',
    url: 'home'
  },
  {
    id: 'user',
    title: 'User',
    translate: 'MENU.USER',
    type: 'item',
    icon: 'user',
    url: 'user'
  },
  {
    id: 'campaign',
    title: 'campaign',
    translate: 'MENU.CAMPAIGN',
    type: 'item',
    icon: 'users',
    url: 'campaign'
  },
  {
    id: 'call',
    title: 'call',
    translate: 'MENU.CALL',
    type: 'item',
    icon: 'phone',
    url: 'call'
  }
]
