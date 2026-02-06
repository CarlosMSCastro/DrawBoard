import { createContext, useState, useContext } from "react";

export const MusicContext = createContext();

const songs = [
  {
    id: 1,
    title: "Arte",
    artist: "Slow J",
    url: "/songs/Arte.mp3",
    duration: "3:16",
  },
  {
    id: 2,
    title: "Comida",
    artist: "Slow J",
    url: "/songs/Comida.mp3",
    duration: "5:10",
  },
  {
    id: 3,
    title: "Fogo",
    artist: "Slow J",
    url: "/songs/Fogo.mp3",
    duration: "2:50",
  },
  {
    id: 4,
    title: "Fome",
    artist: "Slow J (Prod. Holly)",
    url: "/songs/Fome.mp3",
    duration: "2:53",
  },
  {
    id: 5,
    title: "Tambem sonhar",
    artist: "Slow J ft. Sara Tavares",
    url: "/songs/Tambem sonhar.mp3",
    duration: "3:28",
  },
  {
    id: 6,
    title: "Tata",
    artist: "Slow J",
    url: "/songs/Tata.mp3",
    duration: "2:39",
  },
  {
    id: 7,
    title: "Ultimamente",
    artist: "Slow J",
    url: "/songs/Ultimamente.mp3",
    duration: "3:42",
  },
  {
    id: 8,
    title: "Where u @",
    artist: "Slow J",
    url: "/songs/Where u @.mp3",
    duration: "2:41",
  },
];

export const MusicProvider = ({ children }) => {
  const [allSongs, setAllSongs] = useState(songs);
  const [currentTrack, setCurrentTrack] = useState(songs[0]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [playlists, setPlaylists] = useState([]);

  const handlePlaySong = (song, index) => {
    setCurrentTrack(song);
    setCurrentTrackIndex(index);
    setIsPlaying(false);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => {
      const nextIndex = (prev + 1) % allSongs.length;
      setCurrentTrack(allSongs[nextIndex]);
      return nextIndex;
    });
    setIsPlaying(false);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => {
      const nextIndex = prev === 0 ? allSongs.length - 1 : prev - 1;
      setCurrentTrack(allSongs[nextIndex]);
      return nextIndex;
    });
    setIsPlaying(false);
  };

  const formatTime = (time) => {
    if (isNaN(time) || time === undefined) return "00:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const createPlaylist = (name) => {
    const newPlaylist = {
      id: Date.now(),
      name,
      songs: [],
    };
    setPlaylists((prev) => [...prev, newPlaylist]);
  };

  const deletePlaylist = (playlistId) => {
    setPlaylists((prev) =>
      prev.filter((playlist) => playlist.id !== playlistId),
    );
  };

  const addSongToPlaylist = (playlistId, song) => {
    setPlaylists((prev) =>
      prev.map((playlist) => {
        if (playlist.id === playlistId) {
          return { ...playlist, songs: [...playlist.songs, song] };
        } else {
          return playlist;
        }
      }),
    );
  };

  const play = () => {
    setIsPlaying(true);
  };
  const pause = () => {
    setIsPlaying(false);
  };
  return (
    <MusicContext.Provider
      value={{
        allSongs,
        handlePlaySong,
        currentTrackIndex,
        currentTrack,
        currentTime,
        setCurrentTime,
        formatTime,
        duration,
        setDuration,
        nextTrack,
        prevTrack,
        play,
        pause,
        isPlaying,
        volume,
        setVolume,
        createPlaylist,
        playlists,
        addSongToPlaylist,
        setCurrentTrack,
        deletePlaylist
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => {
  const contextValue = useContext(MusicContext);
  if (!contextValue) {
    throw new Error("useMusic must be used within a MusicProvider");
  }

  return contextValue;
};
