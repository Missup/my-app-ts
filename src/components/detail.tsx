import React, { useEffect } from "react";
// import { RouteComponentProps } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import axios from "axios";
import { useSelector, useAppDispatch } from "../redux/hooks";
// import { useDispatch } from "react-redux";
import { getProductDetail } from "../redux/productDetail/slice";
import { Divider, Spin, Typography } from "antd";

const { Title, Paragraph } = Typography;

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
  const { id } = useParams<"id">();
  const { t } = useTranslation();
  // const [detail, setDetail] = useState<any>(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");

  const loading = useSelector((state) => state.productDetail.loading);
  const error = useSelector((state) => state.productDetail.error);
  const detail = useSelector((state) => state.productDetail.data);

  const dispatch = useAppDispatch();

  useEffect(() => {
    // const getData = async () => {
    //   // setLoading(true);
    //   dispatch(productDetailSlice.actions.fetchStart());
    //   try {
    //     const { data } = await axios.get(
    //       `https://jsonplaceholder.typicode.com/posts/${id}`
    //     );
    //     // setDetail(data);
    //     dispatch(productDetailSlice.actions.fetchSuccess(data));
    //   } catch (error) {
    //     // setError(error instanceof Error ? error.message : "error");
    //     dispatch(
    //       productDetailSlice.actions.fetchFail(
    //         error instanceof Error ? error.message : "error"
    //       )
    //     );
    //   }
    // };
    // getData();
    if (id) {
      dispatch(getProductDetail(id));
    }
  }, [id, dispatch]);

  return (
    <Spin spinning={loading}>
      <Divider>
        <Title level={2}>
          {t("home_page.commodity")}id: {id}
        </Title>
      </Divider>
      {error ? (
        <Title level={3}>错误信息：{error}</Title>
      ) : (
        <div>
          <Title level={3}>{detail?.title}</Title>
          <Paragraph>{detail?.body}</Paragraph>
        </div>
      )}
    </Spin>
  );
};

export default Detail;
