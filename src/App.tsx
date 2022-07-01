import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Child from "./components/child";
// import { Layout, Typography } from "antd";

// const { Header, Footer, Sider, Content } = Layout;
// const { Title } = Typography;

import { Routes, BrowserRouter, Route } from "react-router-dom";
// import Other from "./components/other";
import Detail from "./components/detail";
import Old from "./components/old";
import Home from "./components/home";
// import Page from "./components/page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Child />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/old" element={<Old />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<h1>404 not found 页面去火星了</h1>} />
        </Routes>
      </BrowserRouter>

      {/* <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Child} />
          <Route path="/other" component={Other} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/page">
            <Page id={2} />
          </Route>
          <Route render={() => <h1>404 页面</h1>} />
        </Switch>
      </BrowserRouter> */}

      {/* <Layout>
        <Header>
          <Title level={3}>h3. Ant Design</Title>
        </Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Child />
      </header> */}
    </div>
  );
}

export default App;
