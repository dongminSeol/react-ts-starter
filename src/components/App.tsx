import * as React from "react";
import { Route } from "react-router";
import Layout from "./Layout";
import Home from "./Home/Home";
import News from "../containers/NewsList";

export default () => (
  <Layout>
    <Route exact path="/" component={Home} />
    <Route path="/newslist/:page?" component={News} />
  </Layout>
);
