import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import SplashScreen from "./components/SplashScreen/SplashScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);

  return (
    <>
      {loading === false ? (
        <div className="App">
          <Header />
          <MovieList />
        </div>
      ) : (
        <SplashScreen />
      )}
    </>
  );
}

export default App;
