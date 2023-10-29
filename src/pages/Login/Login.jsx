import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginSvg from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';

const Login = () => {

    const { signInUser } = useContext(AuthContext);

    const location = useLocation()
    const navigate = useNavigate()

    const hangleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const person = { email, password }
        console.log(person);
        signInUser(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const user = { email }
                // navigate(location?.state ? location?.state : '/')
                // get access token
                axios.post('http://localhost:5000/jwt', user)
                .then(res => {
                    console.log(res.data);
                })
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={loginSvg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-4xl text-center font-bold">Login now!</h1>
                    <form onSubmit={hangleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-outline btn-info" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='pb-3 ps-10'>New to Car Doctor? <Link className='hover:underline' to='/signup'>Sign up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;