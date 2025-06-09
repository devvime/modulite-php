import { blots } from 'blots'

export function home(ctx, next) {
  blots.draw(
    "#app",
    `
      <div>
          <a href="/">Home</a>
          <a href="/user/victor">User</a>
          <H1>Hello World!</H1>
      </div>
    `
  );
}
