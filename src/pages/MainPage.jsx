import Card from "../components/Card"
import bg from "../bg.jpg"
import { useState } from "react";

function MainPage({fruit}) {
  const [fruitCount,  setFruitCount] = useState(3);

  const visibleFruit = fruit.slice(0, fruitCount);

  

  return (
    <>
      <div className="main-bg" style={{backgroundImage: 'url('+ bg +')', height:'300px'}}></div>
      {/* <img src={bg} alt="" /> 이렇게도 넣을수 있음 */}

      <div className="container">
        <div className="row">
          {
            // Card에서 반복문을 돌리는 것보다 부모쪽에서 반복하는게 더 나음
            visibleFruit.map((data,i) => {
              return(   
                <Card key={i} data={data} />
              )
            })
          }
        </div>
      </div>
      
      {
        fruitCount > fruit.length ? 
        <div className="alert alert-danger">더 이상 상품이 없습니다.</div>
        :
        <button onClick={() => {
          setFruitCount(fruitCount + 3);
        }}>3개 더보기</button>
      }

    </>
  )
}

export default MainPage