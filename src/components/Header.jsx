import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const naivgate = useNavigate();

  // // 옛날 버전
  // const 변수이름 = useQuery(['쿼리이름'], () => {
  //   // axios로 요청
  //   // 쿼리에 저장할 데이터를 return
  // })

  // // 요즘 버전
  // const 변수이름2 = useQuery({
  //   queryKey: ['쿼리이름'], // 이름은 중복되면 안됨
  //   queryFn: () => {
  //     // axios로 요청
  //   // 쿼리에 저장할 데이터를 return
  //   }
  // })

  const userInfoQuery = useQuery({
    queryKey: ['userInfo'],
    queryFn: async () => {
      const response = await axios.get('https://raw.githubusercontent.com/ghkdss/react_sample_data/main/useinfo.json')

      console.log(response)

      return response.data
    },
    staleTime: 5000, // 재요청 받아오는 시간 설정
    retry: 10 // 재요청 받아오는 횟수
  })

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand onClick={() => naivgate('/')}>Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => naivgate(-1)}>뒤로가기</Nav.Link>
          <Nav.Link onClick={() => naivgate('/cart')}>장바구니</Nav.Link>
          <Nav.Link href="/test">테스트</Nav.Link>
          <Link to="/test">테스트2</Link>
        </Nav>
        <Nav style={{color: 'white'}}>
          { userInfoQuery.isLoading && '회원정보 불러오는중...' }
          { userInfoQuery.error && '회원정보 불러오기 실패!!' }
          { userInfoQuery.data && userInfoQuery.data[0].name }
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header;