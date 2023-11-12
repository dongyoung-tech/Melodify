import React, { useState } from "react";
import axios from "axios";
import Imgurl from "../../asset/letter-logo.png";
const Register = () => {
  const [memberValid, setValid] = useState(true);
  const [formData, setFormData] = useState({
    id: "",
    pass: "",
    name: "",
    profile: "null",
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
    LoginCheck();
  };
  const LoginCheck = () =>{
    const regex = /^(?=.*[a-zA-Z])(?=.*[\W_])[\da-zA-Z\W_]*$/;
    const idPattern =  /^(?=.*[a-zA-Z])[a-zA-Z\d]+$/;
    const useridText = document.querySelector('.userid').value;
    const userpassText = document.querySelector('.userpass').value;
    if(idPattern.test(useridText))  {
      if(useridText.length >0){
        document.querySelector(".IdText").innerHTML = "";
        setValid(true);
      }
    }
    else {
        if(useridText.length >0){
          document.querySelector(".IdText").innerHTML =
          "아이디는 영어 와 숫자만 사용 하셔야 합니다.";
          setValid(false);
        }
        else document.querySelector(".IdText").innerHTML = "";
        
    }
    // 입력한 패스워드가 정규식과 일치하는지 확인
    if (regex.test(userpassText)) {
        document.querySelector(".passText").innerHTML = "";
        setValid(true);
    } else {
      if(userpassText.length >0){
        document.querySelector(".passText").innerHTML =
          "패스워드는 영어와 특수문자와 를 포함해야합니다.";
          setValid(false);
      }
      else document.querySelector(".passText").innerHTML = "";;
    }

  }
  const submitHandler = async (event) => {
    event.preventDefault();
    if(!memberValid){
      alert('아이디 형식을 충족 시켜주세요');
      return;
    }
    const formDataToSend = new FormData();
    formDataToSend.append('id', formData.id);
    formDataToSend.append('pass', formData.pass);
    formDataToSend.append('name', formData.name);
    formDataToSend.append('profile', formData.profile);

    try {
      const response = await axios.post('https://port-0-melodifyserver-1drvf2llollu2op.sel5.cloudtype.app/register', formDataToSend);
      console.log(response);
      if(response.data!=="Registered successfully."){
        alert(response.data.message);
        return;
      }
      else if(response.data=="Registered successfully."){
        alert("회원 가입에 성공하셨습니다. 로그인 해주세요");
        window.location.href='/Member/login';
      }
      console.log(response);
    } catch (error) {
      console.error('Join Failed:', error);
    }
  };

  return (
    <div className="login-page">
      <a href='/'><img src={Imgurl}/></a>
      <form  className = 'login-form'onSubmit={submitHandler} encType='multipart/form-data'>
        <input name="id" placeholder="아이디" onChange={handleInputChange} value={formData.id} className="userid"></input>
        <span className="IdText"></span>
        <input name="pass" type='password' placeholder="패스워드" onChange={handleInputChange} value={formData.pass} className="userpass"></input>
        <span className="passText"></span>
        <input name='name' placeholder="닉네임" onChange={handleInputChange} value={formData.name}></input>
        <input type='file' name='profile' onChange={handleInputChange}></input>
        <button type="submit">가입</button>
      </form>
    </div>
  );
};

export default Register;
