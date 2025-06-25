import { createRoot } from 'react-dom/client'
import  {App}  from './app.jsx'
import Home from './pages/Home.jsx'
import Artist from './pages/Artist.jsx'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from './ReduxToolkit/store.js'
import ArtistOnboarding from './pages/ArtistOnboarding.jsx'
const route = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<App />}>
        <Route path='' element={<Home />} />
        <Route path='artist' element={<Artist />} />
        <Route path='onboarding' element={<ArtistOnboarding />} />
    </Route>
))


createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={route} />
    </Provider>
)
