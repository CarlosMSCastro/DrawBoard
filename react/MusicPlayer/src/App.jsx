import { MusicPlayer } from "./components/MusicPlayer.jsx";
import { Playlists } from "./components/Playlists.jsx";
import { AllSongs } from "./components/AllSongs.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { MusicProvider } from "./contexts/MusicContext";
import {BrowserRouter, Route, Routes} from "react-router";

function App() {
  return (
    <BrowserRouter>
      <MusicProvider>
        <div className="app">
          <Navbar />
          <main className="app-main">
            <div className="player-section">
              <MusicPlayer />
            </div>
            <div className="content-section">
              <Routes>
                <Route path="/" element={<AllSongs />}/>
                <Route path="/playlists" element={<Playlists />}/>
              </Routes>
            </div>
          </main>
        </div>
      </MusicProvider>
    </BrowserRouter>
  );
}

export default App;
