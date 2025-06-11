import { blots, click } from "blots";
import { template } from "../../../helpers/template.js";

const state = blots.createObservable();

export async function user(ctx, next) {
  const component = await template("pages-user");
  const nav = await template("layout-nav");

  const data = {
    name: ctx.params.name,
    title: 'Hello world!'
  }

  blots.draw("#app", component, data);

  blots.draw("#nav", nav);
  
}   

state.subscribe(user);
