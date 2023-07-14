import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'

import Home from './pages/Home'
import ErrorPage from './pages/Home/Error'

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route errorElement={<ErrorPage />}>
        <Route path="/" element={<Home />}></Route>
      </Route>,
    ),
  )
  
  export default function Router() {
    return <RouterProvider router={router} />
  }