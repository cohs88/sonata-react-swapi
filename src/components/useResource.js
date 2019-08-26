import {useState, useEffect} from 'react';
import axios from 'axios';

const useResources = (resource) => {
    const [resources, setResources] = useState({});
    
    useEffect(() =>{
        (async (resource) =>{
            
            const response = await axios.get(`https://swapi.co/api/${resource}`);
            

            setResources(response.data.results);
        })(resource);
    }, [resource]);

    return resources;
};

export default useResources;