import {RouterProvider, Route, createBrowserRouter, createRoutesFromElements} from "react-router"
import Home from "./pages/Home"
import Resume from "./pages/Resume"
import Projects from "./pages/Projects"
import Layout from "./layout/Layout"

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="resume" element={<Resume />} />
        <Route path="projects" element={<Projects />}/>
      </Route>
    </>
  ))


  return (
    <div className="flex flex-col min-h-screen">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
