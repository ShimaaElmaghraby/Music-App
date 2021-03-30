import React from 'react';
import ArtistAlbum from './ArtistAlbum';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

const ArtistDetails = ({ match }) => {
    let [artist, setArtist] = useState({});
    let url = ` http://localhost:3005/artists/${match.params.id}`;
    const renderArtist = (artist)=>{
        if (artist.id){
            let images = `/images/covers/${artist.cover}.jpg`;
            return (
                <div className='container'>
                    <div className='details'>
                        <h2 className="text-center">MUSIC-DB</h2>
                        <hr className='mb-5'/> 
                        <div className="row d-flex justify-content-center my-2">
                            <img className='imageA' src={images} alt=''/>
                        </div>
                        <h1 className="text-center text-dark mb-5">{artist.name}</h1>
                        <div className="row my-2">
                            <span className='bio'>{artist.bio}</span>
                        </div>               
                        <div className='row album w-50'>
                            <ArtistAlbum albumInfo = {artist.albums}  />
                        </div>                    
                    </div>
                </div>
            )
        }

        return <p className="alert alert-danger">
            No artist info available
        </p>
    }
    
    useEffect(() => {

        fetch(url, { method: 'GET' })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                setArtist(data)
            })
            .catch(err => {
                console.log(err)
            })

    },[])

    return (
        <div>
            {renderArtist(artist)}
        </div>
    )
}
    

export default ArtistDetails;