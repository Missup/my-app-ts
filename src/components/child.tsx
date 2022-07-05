import { Layout } from "antd";
import React, { useEffect, useState } from "react";
import Item from "./item";
import Other from "./other";
import HeaderView from "./headerClass";
import axios from "axios";

const { Header, Footer, Content } = Layout;

const Child = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [status, setStatus] = useState<boolean>(false);

  useEffect(() => {
    // const fetchData = async () => {
    //   setLoading(true);
    //   try {
    //     const response = await fetch(
    //       "https://jsonplaceholder.typicode.com/users"
    //     );
    //     const data = await response.json();
    //     console.log("data", data);
    //     setList(data);
    //   } catch (error) {
    //     if (error instanceof Error) {
    //       setErrorMsg(error.message);
    //     }
    //   }
    //   setLoading(false);
    // };
    // fetchData();

    const getData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setList(data);
      } catch (error) {
        if (error instanceof Error) {
          setErrorMsg(error.message);
        }
      }
      setLoading(false);
    };

    getData();

    // axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    //   // console.log('res', res);
    //   if (res.status === 200) {
    //     setList(res.data);
    //   }
    //   setLoading(false);
    // });
  }, []);

  const handleClick = () => {
    setStatus(!status);
  };

  return (
    <div>
      <Layout>
        <Header style={{ background: "#fff", color: "#000" }}>
          <HeaderView />
        </Header>
        <Content>
          <div>商品列表</div>

          {errorMsg && <div>错误提示：{errorMsg}</div>}

          <div>
            <button onClick={handleClick}>Click</button>
            {status && <Other />}
          </div>

          {loading ? (
            <div>loading...</div>
          ) : (
            <div>
              {list.map((item: any) => {
                return <Item id={item.id} name={item.name} key={item.id} />;
              })}
            </div>
          )}
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
};

export default Child;
