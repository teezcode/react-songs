import { combineReducers } from 'redux'

const songsReducer =()=>{
    return [
        {title: 'way too big', duration: '3:05',Artist:'Burna Boy'},
        {title: 'Fem', duration: '4:05',Artist:'Davido'},
        {title: 'smile', duration: '3:00',Artist:'Wizkid'},
        {title: 'Tanana', duration: '3:05',Artist:'Davido'}
    ];
};

const selectedSongReducer =(selectedSong=null, action)=>{
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
})