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
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'portfolio',
        element: <Portfolio />
      },
      {
        path: 'resume',
        element: <Resume />
      },
    ]
  }

]);
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)