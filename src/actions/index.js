import songList from "../components/songList";

export const selectSong = (song)=>{
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};
