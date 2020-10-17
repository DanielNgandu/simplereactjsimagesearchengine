//import React Components
import React from "react";

//import React Dom
import ReactDOM from "react-dom";

//import 3rd party libs
import axios from "axios";

//import custom components here
import SearchBar from "./SearchBar";

import ImageList from "./ImageList";
import unsplash from "../api/unsplash";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (searchkeyword) => {
    console.clear();

    console.log(searchkeyword);
    //pass searched word to axios
    const response = await unsplash.get(
      "https://api.unsplash.com//search/photos",
      {
        params: { query: searchkeyword },
        //   console.warn(resp.data);
      }
    );

    //print response
    // console.log(response.data.results);

    //set state
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmitProp={this.onSearchSubmit} />
        <p>Found: {this.state.images.length} images.</p>
        <ImageList images ={this.state.images} />
      </div>
    );
  }
}

export default App;
