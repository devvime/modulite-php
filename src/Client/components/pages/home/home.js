import { blots } from "blots";

export async function home(ctx, next) {
  const state = blots.component(
    {
      name: ctx.params.name,
    },
    async () => {
      await render(state);
    }
  );

  await render(state);
}

async function render(state) {
  const component = await blots.template("pages-home");
  const nav = await blots.template("layout-nav");

  blots.draw("app", component, state);

  blots.draw("nav", nav);
}
