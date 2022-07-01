import { Button } from "antd";
import React from "react";
import { withRouter, RouteComponentProps } from "../helper/withRouter";

class OldComponent extends React.Component<RouteComponentProps> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>old页面</div>
        <Button
          type="primary"
          onClick={() => this.props.navigate("/detail/old")}
        >
          点击跳转到detail页面
        </Button>
      </div>
    );
  }
}

const Old = withRouter(OldComponent);
export default Old;
