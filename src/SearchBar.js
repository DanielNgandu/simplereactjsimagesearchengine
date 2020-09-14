//import React Components
import React from "react";

//import React Dom
import ReactDOM from "react-dom";



//class based component
class SearchBar extends React.Component{
    //constructor
    // constructor(props) {
    //     super(props)
    //     this.state = { searchkeyword: ''}
    //     this.onFormSubmit = this.onFormSubmit.bind(this)
    //
    //
    // }
    state = {searchkeyword:''};

    onFormSubmit =(event)=> {
        event.preventDefault();
        // console.log(this.state.searchkeyword);
        //get props
        this.props.onSubmitProp(this.state.searchkeyword);

    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field fluid">
                <label>Search</label>
                <div className="ui fluid icon input loading">
                    <input type="text" placeholder="Search..." value={this.state.searchkeyword} onChange={event => this.setState({searchkeyword: event.target.value})}/>
                        <i className="search icon"></i>
                </div>
                    </div>
                </form>
                <div className="ui horizontal divider">
                    Search Results:
                </div>
                </div>
        );
    }
}

//export component to be used outside
export default SearchBar;