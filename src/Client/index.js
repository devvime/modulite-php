import { blots } from 'blots'

import { home } from './components/pages/home/script.js'

blots.route('/', home)

blots.route('/user/:name', (ctx, next) => {
    blots.draw('#app', `
        <div>
            <a href="/">Home</a>
            <a href="/user/victor">User</a>
            <H1>Hello ${ctx.params.name}!</H1>
        </div>
    `)
})

blots.route('*', function(ctx, next) {
    blots.draw('#app', `
        <div>
            <a href="/">Home</a>
            <a href="/user/victor">User</a>
            <H1>Page not found</H1>
        </div>
    `)
})

blots.start()