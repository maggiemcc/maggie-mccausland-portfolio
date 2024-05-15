// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Resume from './pages/Resume.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/maggie-mccausland-portfolio',
    element: <App />,
    children: [
      {
        path: "*",
        element: <About/>
      },
      {
        path: '/maggie-mccausland-portfolio/about',
        index: true,
        element: <About/>
      },
      {
        path: '/maggie-mccausland-portfolio/contact',
        // path: 'contact',
        element: <Contact/>
      },
      {
        // path: 'portfolio',
        path: '/maggie-mccausland-portfolio/portfolio',
        element: <Portfolio/>
      },
      {
        // path: 'resume',
        path: '/maggie-mccausland-portfolio/resume',
        element: <Resume/>
      },
    ]
  }

]);
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)