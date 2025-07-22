import './WatchedProduct.css'
import bg from '../bg.jpg'
import { useSelector } from 'react-redux';

function WatchedProduct({fruit}) {

  const watched = useSelector(state => state.watched)

  // 리액트는 state가 변경되면 재 렌더링을 함
  // 지금 작업한 최근 본 상품은 단순히 로컬스토리지에 추가만 함
  // 로컬스토리지가 변경된다고 해서 리액트는 재렌더링을 해주지 않음
  // 재렌더링을 안해준단 소리는 변경이되도 화면에 반영되지 않게됨
  // 그래서 로컬스토리지가 변경될때마다 렌더링도 다시할 수 있도록
  // state로 관리하게 함

  

  return (
    <div className="WatchedProduct">
      <div className="cards">
        <p>최근 본 상품</p>
        {
          watched.map((i) => {
            return(
              <div className="card" key={i}>
                <img src={bg} alt="" />
                <p>{fruit[i].title}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )

}

export default WatchedProduct;