import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import ArtistsList from './ArtistList';
const Cover = ()=>{
    return (
        <div className='cover'>
            <div className='col-12'>
                <img className='w-100' src='images/cover.png' alt='cover'/>
                <h2 className="justify-content-center align-content-center">MUSIC-DB</h2>            
            </div>
            <div className="">
                <div className="">
                    <h1 className='text-center'>Browse The Artists</h1>
                    <ArtistsList/>
                </div>
            </div>


            
                     
        </div>

    )
}
export default Cover;

