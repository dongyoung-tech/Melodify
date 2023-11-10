import React, { useState } from "react";
import axios from "axios";
import Imgurl from "../../asset/letter-logo.png";
const Register = () => {
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
  };

  const submitHandler = async (event) => {
    event.preventDefault();

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
      <form  class = 'login-form'onSubmit={submitHandler} encType='multipart/form-data'>
        <input name="id" placeholder="아이디" onChange={handleInputChange} value={formData.id}></input>
        <input name="pass" type='password' placeholder="패스워드" onChange={handleInputChange} value={formData.pass}></input>
        <input name='name' placeholder="닉네임" onChange={handleInputChange} value={formData.name}></input>
        <input type='file' name='profile' onChange={handleInputChange}></input>
        <button type="submit">가입</button>
      </form>
    </div>
  );
};

export default Register;
