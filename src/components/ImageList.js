//import React Components
import React from "react";

//import React Dom
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";


//class based component
const ImageList =props=> {
    const images = props.images.map(image =>
        <img key={image.id} alt={image.description} className="ui small image" src={image.urls.regular}/>
    )
        return (
            <div>
                <div className="ui small images">
                        {images}
                </div>
            </div>
        );

}

//export component to be used outside
export default ImageList;