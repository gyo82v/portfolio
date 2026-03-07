import {RouterProvider, Route, createBrowserRouter, createRoutesFromElements} from "react-router"
import Home from "./pages/Home"
import Resume from "./pages/Resume"
import Projects from "./pages/Projects"
import Layout from "./layout/Layout"
import ThemeProvider from './theme/ThemeProvider';

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
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-200">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>

  )
}

export default App
