//import React Components
import React from "react";

//import React Dom
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";


//class based component
class ImageList extends React.Component {
    render() {
        return (
            <div>
                <div className="ui four column doubling stackable grid container">
                    <div className="column">
                        <img className="ui small image" src="/images/wireframe/image.png"/>
                    </div>
                    <div className="column">
                        <img className="ui small image" src="/images/wireframe/image.png"/>
                    </div>
                    <div className="column">
                        <img className="ui small image" src="/images/wireframe/image.png"/>
                    </div>
                    <div className="column">
                        <img className="ui small image" src="/images/wireframe/image.png"/>
                    </div>
                </div>
            </div>
        );
    }
}

//export component to be used outside
export default ImageList;