import { Button, Dropdown, Menu } from "antd";
import React from "react";
import { RootState } from "../redux/store";
// import { LanguageState } from "../redux/language/languageReducer";
import {
  changeLanguageActionCreator,
  addLanguageActionCreator,
} from "../redux/language/languageActions";
import { connect } from "react-redux";
import { Dispatch } from "redux";

const mapStateToProps = (state: RootState) => {
  return {
    language: state.language,
    languageList: state.languageList,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeLanguage: (code: "zh" | "en") => {
      const action = changeLanguageActionCreator(code);
      dispatch(action);
    },
    addLanguage: (name: string, code: string) => {
      const action = addLanguageActionCreator(name, code);
      dispatch(action);
    },
  };
};

// interface headerProps extends ReturnType<typeof mapStateToProps> {
//   //   id: number;
//   //   name: string;
// }

// interface headerState extends LanguageState {
//   //   language: "zh" | "en";
//   //   languageList: { name: string; code: string }[];
// }

// const Header: React.FC<headerProps> = () => {
//   const [language, setMenuVal] = useState("zh");

//   const onClick = (e) => {
//     setMenuVal(e.key);
//   };

//   const menu = (
//     <Menu
//       defaultSelectedKeys={[language]}
//       selectedKeys={[language]}
//       onClick={onClick}
//       items={[
//         {
//           key: "zh",
//           label: "中文",
//         },
//         {
//           key: "en",
//           label: "English",
//         },
//       ]}
//     />
//   );

//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//       }}
//     >
//       <div>
//         <span style={{ marginRight: 6 }}>语言切换</span>
//         <Dropdown overlay={menu} placement="bottom" trigger={["click"]}>
//           <Button>{language}</Button>
//         </Dropdown>
//       </div>
//       <div>登录</div>
//     </div>
//   );
// };

class HeaderPage extends React.Component<
  //   headerProps,
  ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
  //   headerState
> {
  //   constructor(props) {
  //     super(props);
  //     // 获取默认的值，初始化state
  //     const storeState = store.getState();
  //     this.state = {
  //       language: storeState.language,
  //       languageList: storeState.languageList,
  //     };
  //     // 订阅数据变化
  //     store.subscribe(this.handleStoreChange);
  //   }

  //   handleStoreChange = () => {
  //     const storeState = store.getState();
  //     this.setState({
  //       language: storeState.language,
  //       languageList: storeState.languageList,
  //     });
  //   };

  onClick = (e) => {
    // setState只能改变当前页面的值，无法更新store的值
    // this.setState({ language: e.key });

    // dispatch action
    if (e.key === "new") {
      // 添加新语言
      //   const action = {
      //     type: "add_language",
      //     payload: { code: "new_language", name: "新语言" },
      //   };
      //   store.dispatch(addLanguageActionCreator("新语言", "new_language"));
      this.props.addLanguage("新语言", "new_language");
    } else {
      //   const action = {
      //     type: "change_language",
      //     payload: e.key,
      //   };
      //   store.dispatch(changeLanguageActionCreator(e.key));
      this.props.changeLanguage(e.key);
    }
  };

  render() {
    const { language, languageList } = this.props;

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <span style={{ marginRight: 6 }}>语言切换</span>
          <Dropdown
            overlay={
              <Menu
                defaultSelectedKeys={[language]}
                selectedKeys={[language]}
                onClick={this.onClick}
                items={[
                  ...languageList.map((v) => {
                    return { key: v.code, label: v.name };
                  }),
                  { key: "new", label: "添加新语言" },
                ]}
              />
            }
            placement="bottom"
            trigger={["click"]}
          >
            <Button>
              {languageList.filter((v) => v.code === language)[0].name}
            </Button>
          </Dropdown>
        </div>
        <div>登录</div>
      </div>
    );
  }
}

const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderPage);

export default Header;
