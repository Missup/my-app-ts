import React from "react";
// import { RouteComponentProps } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

// interface MatchParams {
//   id: string;
// }

// const Detail: React.FC<RouteComponentProps<MatchParams>> = (
//   props
// ) => {
//   return <div>商品id: {props.match.params.id}</div>;
// };

// 多参数定义
// type MatchParams = {
//   id: string;
//   other: string;
// };

const Detail = () => {
  // const params = useParams<keyof MatchParams>();
  // 单个参数定义
  const params = useParams<"id">();
  const { t } = useTranslation();

  return (
    <div>
      {t("home_page.commodity")}id: {params.id}
    </div>
  );
};

export default Detail;
