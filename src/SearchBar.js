//import React Components
import React from "react";

//import React Dom
import ReactDOM from "react-dom";



//class based component
class SearchBar extends React.Component{
    render() {
        return(
            <div>
                <label>Search</label>
                <div className="ui fluid icon input loading">
                    <input type="text" placeholder="Search..."/>
                        <i className="search icon"></i>
                </div>
                <div className="ui horizontal divider">
                    Search Results:
                </div>
                </div>
        );
    }
}

//export component to be used outside
export default SearchBar;