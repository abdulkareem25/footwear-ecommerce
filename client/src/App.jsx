import { RouterProvider } from 'react-router-dom';
import { router } from './AppRoutes';
import { AuthProvider } from './features/auth/contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App