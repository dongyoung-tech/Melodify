import React ,{useState}from "react";
import axios from "axios";
import './Member.css'
import Imgurl from "../../asset/letter-logo.png";
const Login = () =>{
    const [formData, setFormData] = useState({
        id: "",
        pass: "",
      });
      const handleInputChange = (event) => {
        const { name, value, type, files } = event.target;
    
        // 파일 업로드 필드인 경우 파일 정보를 설정
        if (type === 'file') {
          setFormData({
            ...formData,
            [name]: files[0],
          });
        } else {
          setFormData({
            ...formData,
            [name]: value,
          });
        }
      };
      const loginHander = async(event) =>{
        event.preventDefault();

        const formDataToSend = new FormData();
        if(formData.id == "" ){
            alert('아이디 를 입력 해주세요');
            return;
        }
        if(formData.pass == "" ) {
            alert('비밀번호 를 입력 해주세요');
             return;
            }
        formDataToSend.append('id', formData.id);
        formDataToSend.append('pass', formData.pass);
        console.log(formData.id);
        try {
          const response = await axios.post('https://port-0-melodifyserver-1drvf2llollu2op.sel5.cloudtype.app/login', formDataToSend
         ,{ headers: {
            'Content-Type': 'application/json'
          }
        });
        if(response.data.message != "Failed"){
          sessionStorage.setItem('userData',JSON.stringify(response.data.rows[0]));
          window.location.href='/';

        }
        else alert('아이디 또는 비밀번호를 다시 입력해주세요.');
        } catch (error) {
          console.error('Join Failed:', error);
        }
      }
    return(
      <div className="login-page">
        <a href='/'><img src={Imgurl}/></a>
          <form className="login-form" onSubmit={loginHander}>
              <input placeholder="아이디" name="id" onChange={handleInputChange} value={formData.id}></input>
              <input type="password" placeholder='비밀번호' name="pass" onChange={handleInputChange} value={formData.pass}></input>
              <button>로그인</button>
          </form>
          <a href='/Member/register'><button>회원가입</button></a>
        </div>
    )
}

export default Login;