import './App.css'
import {Route, Routes} from "react-router";
import {Layout} from "./components/Layout/index.jsx";
import {MainPage} from "./pages/MainPage/index.jsx";
import {GamesPage} from "./pages/GamesPage/index.jsx";
import {GamePage} from "./pages/GamePage/index.jsx";
import {routesPath} from "./utils/routes.path.js";
import {FilterPage} from "./pages/FilterPage/index.jsx";



function App() {

  return (
    <div className='app-container container mx-auto max-w-6xl pt-40 min-h-screen'>
      <Routes>
        <Route path={routesPath.MAIN} element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route path={routesPath.GAMES} element={<GamesPage/>}/>
          <Route path={routesPath.GAME} element={<GamePage/>}/>
          <Route path={routesPath.FILTER} element={<FilterPage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
