import { Layout } from "antd";
import React from "react";
// import HeaderView from "./headerClass";
import HeaderView from "./header";
import { withTranslation, WithTranslation } from "react-i18next";

const { Header, Footer, Content } = Layout;

class HomeComponent extends React.Component<WithTranslation> {
  //   constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }

  render() {
    const { t } = this.props;
    return (
      <Layout>
        <Header style={{ background: "#fff", color: "#000" }}>
          <HeaderView />
        </Header>
        <Content>
          <div>商品列表</div>
        </Content>
        <Footer>{t("footer.content")}</Footer>
      </Layout>
    );
  }
}

const Home = withTranslation()(HomeComponent);

export default Home;
