import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MainLayout from './layout/MainLayout'
import Data from './pages/Data'
import HomeForm from './pages/HomeForm'
import HomeFormData from './pages/HomeFormData'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <HomeForm />
        },
        {
          path: 'form-data',
          element: <HomeFormData />
        },
        {
          path: 'data',
          element: <Data />
        },
        {
          
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
