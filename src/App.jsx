import './css/App.css'
import Favorites from './pages/Favorites';
import Home from './pages/Home'
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/MovieContext';
import {Routes, Route} from 'react-router-dom'
function App() {
  const movieNumber = 1;

  // if(movieNumber === 1){

  //   return (<MovieCard movie={{title:"TENET", release_date:"2024", }}/>);
  // } else {
  //   return (
  //     <>
  //       <MovieCard movie={{title:"NEzha", release_date:"2024", }}/>
  //     </>
  //   );
  // }

  return (
    // <>
    //   {movieNumber === 1? (
    //     <MovieCard movie={{title:"TENET", release_date:"2024", }}/>
    //   ) : (
    //     <MovieCard movie={{title:"NEzha", release_date:"2024", }}/>
    //   )}
    // </>

    // <>
    //   {/* {movieNumber === 1 && <MovieCard movie={{title:"NEzha", release_date:"2024", }}/>} */}
    //   <Home />
    // </>
    <MovieProvider>
      <NavBar />
    
    <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favorites" element={<Favorites />}/>
      </Routes>
    </main>
    </MovieProvider>
  )
}

export default App
