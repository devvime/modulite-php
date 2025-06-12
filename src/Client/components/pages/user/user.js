import { blots, click } from "blots";

export async function user(ctx, next) {

  const state = blots.component(
    {
      name: ctx.params.name,
      title: "Hello world!",
    },
    async () => {
      await render(state);
    }
  );

  render(state);
}

async function render(state) {
  const component = await blots.template("pages-user");
  const nav = await blots.template("layout-nav");

  blots.draw("app", component, state);
  blots.draw("nav", nav);

  click("btn-test", () => {
    state.name = "Steve";
    state.title = "Ok, deu certo!";
  });
}
