import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { useState } from "react";
import { LuEyeOff,LuEye  } from "react-icons/lu";


const SignIn = () => {

    const [signInError, setSignInError] = useState('');
    const [success,setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmitSign = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        console.log(email,name,password);

        if(password.length <6)
        {
            setSignInError('Password should be 6 character or longer')
        }
        else if (!/[A-Z]/.test (password)) {
         setSignInError('Password should have at least 1 upper leter');
         return;
        }

        setSignInError('');
        setSuccess('');

        createUserWithEmailAndPassword(auth,email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setSuccess('User Created Successfully.')
        })
        .catch(error =>{
            console.log(error);
            setSignInError(error.message)
        })
    }
    
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SignIn now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmitSign} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input 
          type={showPassword ?  "password" : "text" }
          name="password" 
          placeholder="password" 
          className="input input-bordered" 
          required />
          <span onClick={()=> setShowPassword(!showPassword)}>
            {
              showPassword ? <LuEyeOff></LuEyeOff> : <LuEye></LuEye> 
            }
          </span>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="SignIn" />
        </div>
      </form>
      {
        signInError && <p className="text-red-600">{signInError}</p>
      }
      {
        success && <p className="text-green-600">{success}</p>
      }
    </div>
  </div>
</div>
    );
};

export default SignIn;