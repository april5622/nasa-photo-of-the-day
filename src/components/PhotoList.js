import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

export default function PhotoList(){
    const [photos, setPhotos] = useState([]);

    useEffect(()=> {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=8p9km1ncBWJ6RYDW7MXBEz4373ujv63yQn7zeuUx`)
            .then(res => {
                setPhotos(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log("The data was not returned", err);
            });
    }, []);
    //console.log("photos1", photos);
    //console.log(photos)
    return (
        <div className="photo">         
                <PhotoCard
                    title= {photos.title}
                    date={photos.date}
                    explanation={photos.explanation}
                    image={photos.hdurl}
                    url={photos.url}
                    copyright={photos.copyright}
                 />
   
        </div>
    );

} //from function
