import { Component } from "blots";

import html from "./menu.html";

export default class Menu extends Component {
  target = "nav";
  template = html;

  constructor(params, query) {
    super(params, query);
  }

  init() {
    this.setData();
    this.setMethods({});
  }
}
