import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount, minusCount, removeItem } from "../redux/cartSlice";

function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch(); // 변경함수를 쓸수있게 해주는 함수

  // return 값이 한줄일때 밑에 처럼 써도 됨 
  // const item = useSelector(state => state.item)

  return (
    <Table>
      <thead>
        <tr>
          <th>번호</th>
          <th>상품명</th>
          <th>수량</th>
          <th>수정</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        {
          cart.map((data, i) => {
            return( 
              <tr key={i}>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.count}</td>
                <td>
                  <button onClick={() => {
                    dispatch( minusCount(i))
                    }}> -
                  </button>&nbsp;
                  <button onClick={() => {
                    dispatch( addCount(i))
                    }}> + 
                  </button>
                </td>
                <td><button onClick={() => {
                  dispatch( removeItem(i) )
                }}> X </button></td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
  )
}

export default Cart