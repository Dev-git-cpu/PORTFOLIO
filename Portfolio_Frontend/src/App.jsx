import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './component/Layout'
import Home from './component/Home'
import Project from './component/Project'
import Contact from './component/Contact'
import Skills from './component/Skills'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/skills",
          element: <Skills/>
        },
        {
          path: "/project",
          element: <Project />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App