import { MusicPlayer } from "./components/MusicPlayer.jsx";
import { Playlists } from "./components/Playlists.jsx";
import { AllSongs } from "./components/AllSongs.jsx";
import {BrowserRouter, Route, Routes} from "react-router";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* <Navbar /> */}
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
    </BrowserRouter>
  );
}

export default App;
