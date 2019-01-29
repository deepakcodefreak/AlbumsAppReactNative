import React from 'react';
import {ScrollView,Text} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends React.Component{
    

    constructor(props){
        super(props);
        this.state = {albums:[]}

        this.renderAlbum = this.renderAlbum.bind(this)
    }

    componentWillMount(){
        axios.get(`https://rallycoding.herokuapp.com/api/music_albums`)
        .then((response)=> this.setState({albums:response.data}))
    }

    renderAlbum(){
        return this.state.albums.map((album)=>{
            return <AlbumDetail key={album.title} album={album}/>
        })
    }

    render(){
        return (
            <ScrollView>
                {this.renderAlbum()}
            </ScrollView>
        )
    }
}


export default AlbumList;