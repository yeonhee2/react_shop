function Card({ data }) {
  
  return (

    <div className="col-md-4">
       {/* col-md-4은 부트스트랩에 있는 css */}
      <img src={`${import.meta.env.BASE_URL}img/${data.title}.jpg`} alt="" width="80%" />
      <h4>{data.title}</h4>
      <p>{data.content}</p>
    </div>
  )
}

export default Card