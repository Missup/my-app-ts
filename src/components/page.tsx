import React from "react";

interface PageProps {
  id: number;
}

const Page: React.FC<PageProps> = (props) => {
  return <div>page页面：{props.id}</div>;
};

export default Page;
