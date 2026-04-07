import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Message from '../../../components/ui/Message';
import Spinner from '../../../components/ui/Spinner';
import useAuth from '../hooks/useAuth';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const { handleSignUp } = useAuth();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    await handleSignUp(username, email, password);

    navigate('/');

  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">Create a new account</h2>
        {/* {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Spinner />} */}
        <form className="space-y-6" onSubmit={submitHandler}>
          <div>
            <label htmlFor="username" className="text-sm font-medium text-gray-700">Username</label>
            <input
              id="username"
              type="text"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email-register" className="text-sm font-medium text-gray-700">Email address</label>
            <input 
            id="email-register" 
            type="email" 
            required 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password-register" className="text-sm font-medium text-gray-700">Password</label>
            <input 
            id="password-register" 
            type="password" 
            required 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
            Create Account
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Already have an account?{' '}
          <Link to={'/signin'} className="font-medium text-teal-600 hover:text-teal-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;