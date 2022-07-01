import { Button, Dropdown, Menu } from "antd";
import React from "react";
import { useSelector } from "../redux/hooks";
import { useDispatch } from "react-redux";
// import { Dispatch } from "redux";
// import { LanguageActionTypes } from "../redux/language/languageActions";
import {
  addLanguageActionCreator,
  changeLanguageActionCreator,
} from "../redux/language/languageActions";

const Header: React.FC = () => {
  const language = useSelector((state) => state.language);
  const languageList = useSelector((state) => state.languageList);
  //   const dispatch = useDispatch<Dispatch<LanguageActionTypes>>();
  const dispatch = useDispatch();

  const onClick = (e) => {
    // dispatch action
    if (e.key === "new") {
      dispatch(addLanguageActionCreator("新语言", "new_language"));
    } else {
      dispatch(changeLanguageActionCreator(e.key));
    }
  };

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
              onClick={onClick}
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
};

export default Header;
