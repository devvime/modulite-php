import { blots } from "blots";

export async function pageNotFound(ctx, next) {
  const state = blots.component({}, async () => {
    await render(state);
  });

  await render(state);
}

async function render(state) {
  const component = await blots.template("pages-pageNotFound");
  const nav = await blots.template("layout-nav");

  blots.draw("app", component);
  blots.draw("nav", nav);
}
