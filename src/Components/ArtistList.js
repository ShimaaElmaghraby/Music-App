import React, {Component} from 'react';
import Artist from './Artist';

export default class ArtistsList extends Component{
    constructor(){
        super()
        this.baseURL = " http://localhost:3005/artists";
        this.state = {
            artists:[]
        }
     }
     renderArtists({artists}){
        if(artists && artists.length>0){
            return artists.map((artist)=>{
                return <Artist key={artist.id} artistInfo={artist}/>
            })
        }
        return(
        <p>
            No Artists! 
        </p>)
     }
    render(){
        return (
            <div>
                <div className="w-100">
                    <div className="artistList">
                        {this.renderArtists(this.state)}
                    </div>
                </div>    
            </div>
        )
    }
    componentDidMount(){
        //fetch API
        fetch(this.baseURL,{method:'GET'})
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            this.setState({artists:data})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
   
}