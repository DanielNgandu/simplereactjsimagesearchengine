//import React Components
import React from "react";

//import React Dom
import ReactDOM from "react-dom";

//import 3rd party libs
import axios from "axios";

//import custom components here
import SearchBar from "./SearchBar";

import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (searchkeyword) => {
    console.clear();

    console.log(searchkeyword);
    //pass searched word to axios
    const response = await axios.get(
      "https://api.unsplash.com//search/photos",
      {
        params: { query: searchkeyword },
        headers: {
          Authorization:
            "Client-ID zToMPnfaitCW3AK-jp8A91XMKekYTL0snz2rj50b-XM",
        },
        //   console.warn(resp.data);
      }
    );

    //print response
    console.log(response.data.results);

    //set state
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmitProp={this.onSearchSubmit} />
        <p>Found: {this.state.images.length} images.</p>
        <ImageList />
      </div>
    );
  }
}

export default App;
