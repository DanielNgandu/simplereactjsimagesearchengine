//import React Components
import React from "react";

//import React Dom
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";


//function based component
const ImageList =props=> {
    const images = props.images.map(image =>
            <div className="four wide column">
                <img key={image.id} alt={image.description} className="ui small image" src={image.urls.regular}/></div>
    )
        return (
            <div className="ui grid container">

                        {images}

            </div>
        );

}

//export component to be used outside
export default ImageList;