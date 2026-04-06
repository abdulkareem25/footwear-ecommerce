import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Message from '../../../components/ui/Message';
import Spinner from '../../../components/ui/Spinner';

const SignIn = () => {
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("how are YOU")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">Sign in to your account</h2>
        {/* {error && <Message variant="danger">{error}</Message>}
        {loading && <Spinner />} */}
        <form className="space-y-6" onSubmit={submitHandler}>
          <div>
            <label htmlFor="credential" className="text-sm font-medium text-gray-700">Username or Email Address</label>
            <input
              id="credential"
              type="text"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              value={credential}
              onChange={(e) => setCredential(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
            Sign in
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          New Customer?{' '}
          <Link to={'/signup'} className="font-medium text-teal-600 hover:text-teal-500">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;