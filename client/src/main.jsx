import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Counter />,
  },
  {
    path: "/join",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </RecoilRoot>
)
