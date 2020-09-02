//import React Components
import React from "react";

//import React Dom
import ReactDOM from "react-dom";


//import custom components here
import  SearchBar from "./SearchBar";

import ImageList from "./ImageList";

class App extends React.Component{
    render(){
        return (
            <div>
                <form className="ui form">
                    <div className="field fluid">
                <SearchBar/>
                    </div>
                </form>
                <ImageList/>
            </div>
        );
    }
}

export default App;