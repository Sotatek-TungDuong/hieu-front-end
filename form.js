// import axiosInstance from "./axios";
// require('./axios.js')

// import { getMe } from "./user";

function getMe() {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
    };
    fetch("http://localhost:8000/user/me", options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.id) {
            localStorage.setItem("userName", data.userName)
        }
      });
  }
  

function Dangky() {
  var okie = true; //chua co loi

  document.getElementById("loi_namedangky").innerHTML  = "";
  document.getElementById("loi_passdangky").innerHTML  = "";
  document.getElementById("loi_repassdangky").innerHTML  = "";

  if (document.getElementById("usernamee").value == "") {
		document.getElementById("loi_namedangky").innerHTML = "Username is required";
		okie = false;
	} 

  if (document.getElementById("passwordd").value == "") {
		document.getElementById("loi_passdangky").innerHTML = "Password is required";
		okie = false;
	} else if (document.getElementById("re-password").value == "") {
		document.getElementById("loi_repassdangky").innerHTML = "Re-Password is required";
		okie = false;
	} else if (document.getElementById("passwordd").value  != document.getElementById("re-password").value ) {
		document.getElementById("loi_repassdangky").innerHTML = "Password and retype password do not match";
		okie = false;
	}

  if(okie) {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName: document.getElementById("usernamee").value,
        password: document.getElementById("passwordd").value,
      }),
    };
    fetch("http://localhost:8000/auth/register", options)
      .then((res) => res.json())
      .then((data) => {
        document.getElementById("loi_dangky").innerHTML  = "";
        console.log(data);
        if (data.message === "success") {
          document.querySelector(".popupsignup").classList.remove("active");
          document.querySelector("body").classList.remove("active");
  
          document.querySelector(".popuplogin").classList.add("active");
          document.querySelector("body").classList.add("active");
        } else {
          document.getElementById("loi_dangky").innerHTML  = "User is existed!";
        }
      });
  }
}

function Dangnhap() {
  var okie = true; //chua co loi

  document.getElementById("loi_name").innerHTML  = "";
  document.getElementById("loi_pass").innerHTML  = "";

  if (document.getElementById("usernameDangnhap").value == "") {
    console.log("fff");
		document.getElementById("loi_name").innerHTML = "Username is required";
		okie = false;
	} 

  if (document.getElementById("passwordDangnhap").value == "") {
		document.getElementById("loi_pass").innerHTML = "Password is required";
		okie = false;
	} 

  if (okie) {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName: document.getElementById("usernameDangnhap").value,
        password: document.getElementById("passwordDangnhap").value,
      }),
    };
    fetch("http://localhost:8000/auth/login", options)
      .then((res) => {
        //   console.log(res);
        return res.json();
      })
      .then((data) => {
        document.getElementById("loi_dangnhap").innerHTML  = "";
        if (data.statusCode === 400) {
          document.getElementById("loi_dangnhap").innerHTML  = "Username or password wrong!";
        } else {
          localStorage.setItem('token', data.token);
          getMe();
          location.reload();
          // document.querySelector(".popuplogin").classList.remove("active");
          // document.querySelector("body").classList.remove("active");
        }
      });
  }
}

function Dangxuat() {
    localStorage.removeItem("token")
    localStorage.removeItem("userName")
    location.reload();
}


