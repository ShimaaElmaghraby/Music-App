import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

  const ArtistAlbum = ({ albumInfo }) => { 
    if(albumInfo && albumInfo.length>0){
        return albumInfo.map((album)=>{
            let image = `/images/albums/${album.cover}.jpg`;
            console.log(image)
            return (        
                <div className='col-6'>
                    <div style={{marginRight:'-28px'}}>
                        <img style={{width:'100%', marginBottom:'2px'}} src={image} alt=''/>
                        <p>{album.year}</p>
                    </div>
                </div>      
            )
        })
    }
    else{
        return <p>
            No albums! 
        </p>
    }
 
}
export default ArtistAlbum;