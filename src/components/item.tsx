import React from "react";
// import { useHistory } from "react-router-dom";
// import { withRouter, RouteComponentProps } from "react-router-dom";
// import { Link } from "react-router-dom";

// interface itemProps {
//   id: number;
//   name: string;
// }

// interface itemProps extends RouteComponentProps {
//   id: number;
//   name: string;
//   // history: any;
// }

// const ItemComponent: React.FC<itemProps> = ({ id, name, history }) => {
// // export const Item: React.FC<itemProps> = ({ id, name }) => {
//   // const history = useHistory();
//   return (
//     <>
//       {/* <div>
//         <div onClick={() => history.push(`/detail/234`)}>
//           <div>234</div>
//           <div>商品名称：{name}</div>
//         </div>
//       </div> */}
//       <div onClick={() => history.push(`/detail/${id}`)}>
//       {/* <Link to={`/detail/${id}`}> */}
//         <div>{id}</div>
//         <div>商品名称：{name}</div>
//       {/* </Link> */}
//       </div>
//     </>
//   );
// };
// const Item = withRouter(ItemComponent);

import { useNavigate } from "react-router-dom";

const Item = ({ id, name }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/detail/${id}`)}>
      <div>{id}</div>
      <div>商品名称：{name}</div>
    </div>
  );
};

export default Item;
