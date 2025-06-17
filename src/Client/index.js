import { Router } from "blots";

import HomePage from "./components/pages/home/home-page";

const router = new Router();

router.add("/", (params, query) => new HomePage(params, query));

router.resolve();
