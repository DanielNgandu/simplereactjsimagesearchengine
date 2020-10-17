//axios config
import axios from "axios"
import SearchBar from "../components/SearchBar"

export default axios.create(
    {
        baseURL:"https://api.unsplash.com",
        headers:{
            Authorization:
                "Client-ID zToMPnfaitCW3AK-jp8A91XMKekYTL0snz2rj50b-XM"
        }
    }
);