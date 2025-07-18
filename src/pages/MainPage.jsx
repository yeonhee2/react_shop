import Card from "../components/Card"
import bg from "../bg.jpg"

function MainPage({fruit}) {
  return (
    <>
      <div className="main-bg" style={{backgroundImage: 'url('+ bg +')'}}></div>
      {/* <img src={bg} alt="" /> 이렇게도 넣을수 있음 */}

      <div className="container">
        <div className="row">
          {
            // Card에서 반복문을 돌리는 것보다 부모쪽에서 반복하는게 더 나음
            fruit.map((data,i) => {
              return(   
                <Card key={i} data={data} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default MainPage