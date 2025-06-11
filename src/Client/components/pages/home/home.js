import { blots } from "blots";
import { template } from "../../../helpers/template.js";

export async function home(ctx, next) {

  const component = await template("pages-home");
  const nav = await template("layout-nav");

  blots.draw("#app", component, {
    name: ctx.params.name,
  });

  blots.draw("#nav", nav);
  
}
