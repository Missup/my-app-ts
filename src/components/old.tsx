import { Avatar, Button } from "antd";
import React from "react";
import { withRouter, RouteComponentProps } from "../helper/withRouter";
// import axios from "axios";
import { List } from "antd";
// import { Dispatch } from "redux";
import { connect } from "react-redux";
import { RootState } from "../redux/store";
import {
  // fetchRecommendProductStartActionCreator,
  // fetchRecommendProductSuccessActionCreator,
  // fetchRecommendProductFailActionCreator,
  givaMeDataActionCreator,
} from "../redux/recommendProducts/recommendProductsActions";

const mapStateToProps = (state: RootState) => {
  return {
    error: state.recommendProducts.error,
    loading: state.recommendProducts.loading,
    productList: state.recommendProducts.productList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchStart: () => {
    //   dispatch(fetchRecommendProductStartActionCreator());
    // },
    // fetchSuccess: (data) => {
    //   dispatch(fetchRecommendProductSuccessActionCreator(data));
    // },
    // fetchFail: (error) => {
    //   dispatch(fetchRecommendProductFailActionCreator(error));
    // },
    givaMeData: () => {
      dispatch(givaMeDataActionCreator());
    },
  };
};

// interface State {
//   error: string | null;
//   loading: boolean;
//   productList: any[];
// }

type PropsType = RouteComponentProps &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

class OldComponent extends React.Component<PropsType> {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     error: null,
  //     loading: true,
  //     productList: [],
  //   };
  // }

  componentDidMount() {
    this.props.givaMeData();
    // this.props.fetchStart();
    // try {
    //   const { data } = await axios.get(
    //     "https://jsonplaceholder.typicode.com/users"
    //   );
    //   this.props.fetchSuccess(data);
    // } catch (error: any) {
    //   this.props.fetchFail(error.message);
    // }
  }

  render() {
    const { productList } = this.props;
    return (
      <div>
        <div>old页面</div>
        <Button
          type="primary"
          onClick={() => this.props.navigate("/detail/old")}
        >
          点击跳转到detail页面
        </Button>

        <List
          itemLayout="horizontal"
          dataSource={productList}
          renderItem={(item: any) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<a href="https://ant.design">{item.name}</a>}
                description={`${item.address.city} ${item.address.suite} ${item.address.street} - ${item.company.name} - ${item.username} - (${item.phone})`}
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

const Old = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(OldComponent));
export default Old;
