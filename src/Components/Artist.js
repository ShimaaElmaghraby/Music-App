import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

const Artist = ({ artistInfo }) => {
    let images = `images/covers/${artistInfo.cover}.jpg`;
    if (artistInfo)
        return (
            <div>
                <div color="primary" className="artist p-0">
                    <div>
                        <img top width="80%" className='' src = {images} alt="Card cap" />
                        <div>
                            <Link to={`/artist/${artistInfo.id}`}><button className="btn btn-link"><h3 className="">{artistInfo.name}</h3></button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
        
        return <p className="alert alert-danger">
            No student info available.
        </p>
}


export default Artist;