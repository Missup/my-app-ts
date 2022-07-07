import { Layout } from "antd";
import React from "react";
// import HeaderView from "./headerClass";
import HeaderView from "./header";
import { withTranslation, WithTranslation } from "react-i18next";
import Cards from "react-credit-cards";
import 'react-credit-cards/es/styles-compiled.css';

const { Header, Footer, Content } = Layout;

interface HomeState {
  cvc: string;
  expiry: string;
  focus: string;
  name: string;
  number: string;
}

class HomeComponent extends React.Component<WithTranslation, HomeState> {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     cvc: "",
  //     expiry: "",
  //     focus: "",
  //     name: "",
  //     number: "",
  //   };
  // }
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    window.console.log(name, value);

    // this.setState({ [name]: value });
  };

  render() {
    const { t } = this.props;
    return (
      <Layout>
        <Header style={{ background: "#fff", color: "#000" }}>
          <HeaderView />
        </Header>
        <Content>
          <div>商品列表</div>
          <div id="PaymentForm">
            <Cards
              cvc={this.state.cvc}
              expiry={this.state.expiry}
              focused={this.state.focus}
              name={this.state.name}
              number={this.state.number}
            />
            <form>
              <input
                type="tel"
                name="number"
                placeholder="Card Number"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </form>
          </div>
        </Content>
        <Footer>{t("footer.content")}</Footer>
      </Layout>
    );
  }
}

const Home = withTranslation()(HomeComponent);

export default Home;
