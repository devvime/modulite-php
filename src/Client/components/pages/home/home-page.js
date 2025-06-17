import { Component } from "blots";

import html from "./home-page.html";

export default class HomePage extends Component {
  target = "app";
  template = html;

  constructor(params, query) {
    super(params, query);
  }

  init() {
    this.setData({
      title: "Hello World!",
    });
    this.setMethods({
      sayHello: () => this.sayHello(),
    });
  }

  sayHello() {
    alert("Hello!");
  }
}
