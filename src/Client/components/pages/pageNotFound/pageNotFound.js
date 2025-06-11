import { blots } from "blots";
import { template } from "../../../helpers/template.js";

export async function pageNotFound(ctx, next) {

  const component = await template("pages-pageNotFound");
  const nav = await template("layout-nav");

  blots.draw("#app", component);
  blots.draw("#nav", nav);
  
}
