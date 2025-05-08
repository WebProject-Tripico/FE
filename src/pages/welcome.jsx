import '../pages_styles/welcome.css'
import { useNavigate  } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate ();
  return (
    <div className='wrapper'>
      <div className='image-container'></div>
      <h1 className='title'>AI 여행 일정 서비스</h1>
      <p className='subtitle'>경상북도를 여행해보세요</p>
      <div className="button-container">
          <button onClick={()=> navigate('/login')} className="login-button">로그인</button>
          <button onClick={()=> navigate('/signup')} className="signup-button">회원가입</button>
      </div>
    </div>
  )
}

export default Welcome;