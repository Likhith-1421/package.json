import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Login = () => {
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();

  const [store, setStore] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setStore((pre) => [...pre, { mail: mail, password: password }]);
    setMail("");
    setPassword("");
  };
  useEffect(() => {
    localStorage.setItem("userEmail", JSON.stringify(store));
  }, [store]);

  return (
   
    <div className="flex mt-8">
          <div className="border-1  w-140 h-100 ml-45 bg-amber-500">
            <h6 className="text-white font-bold text-2xl text-center mt-10">WELCOME TO WEBSITE 😊</h6>
            <p className="text-white text-left text-s mt-15 ml-5 mr-5">We're thrilled to have you here. Whether you're visiting us for the first time or you're a returning guest, we’re here to provide you with the best experience possible. Explore our content, discover our services, and feel free to reach out if you have any questions.
Thank you for choosing us!</p>
               </div>
    <div className="text-center border-1  w-90 h-100 ">

        <h2 className="mt-2">LOGIN</h2>
        <br/>
        <hr></hr>
  
      <br />
      <br />

      <form className='' onSubmit={handleSubmit}>
        <label className="fontsize-login">Email</label>
        <br />
        <input
          type="Email"
          placeholder="Email"
          className="border-1 w-50 h-6"
          onChange={(e) => setMail(e.target.value)}
        ></input>
        <br />
        <br />
        <br />
        <label className="text-left">Password</label>
        <br />
        <input
          type="Password"
          placeholder="Password"
          className='border-1 w-50 h-6'
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br />
        <br />

        <div className="login-display-forgotpassword">
          <div className="flex">
            <p className="pl-2">Forget Password?</p>
          

          
            <p className="pl-28">Create Account</p>
          </div>
        </div>

        {/* <button className="border-1 w-15 h-10 ml-49 mt-9 bg-amber-500 text-white">Login</button> */}
      </form>
</div>
      <h6>
        {store.map((user) => {
          return (
            <div>
              {user.mail} - {user.password}
            </div>
          );
        })}
      </h6>
    </div>

  );
};
export default Login;
