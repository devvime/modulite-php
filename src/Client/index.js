import { blots } from 'blots'

import { home } from './components/pages/home/home.js'
import { user } from './components/pages/user/user.js'
import { pageNotFound } from './components/pages/pageNotFound/pageNotFound.js'

blots.route('/', home)
blots.route('/user/:name', user)
blots.route('*', pageNotFound)

blots.start()