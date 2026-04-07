import { createBrowserRouter, Outlet, Link } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import SignIn from './features/auth/pages/SignIn';
import SignUp from './features/auth/pages/SignUp';
import Protected from './features/auth/components/Protected';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Protected>
      <Layout />
    </Protected>,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]
  }, {
    path: '/signin',
    element: <SignIn />
  }, {
    path: '/signup',
    element: <SignUp />
  }
])