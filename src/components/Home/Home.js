// import State from '../State/State';
import Create from '../Create/Create';

// Dependencies
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home(props) {
    // setting state variable for list of states 
    const [ states, setStates ] = useState([]);

    // api call
    useEffect(() => {
        getStates();
    }, []);
    
    // async await function for fetch request for states
    const getStates = async () => {
        try {
            // change fetch request path to localhost:3001/posts/
            const res = await axios.get('http://localhost:3001/');
            setStates(res);
        } catch (error) {
            console.log(error);
        }
    }

	return (
		<div>
			hello from home
			{/* <State /> */}
            {states ? (
            <>
                <ul>
                    {states.map((state) => {
                        return <li><Link to={`/${state}`}>{state}</Link></li>;
                    })}
                </ul>
            </>
            ) : (
            <>
                <h2>Loading...</h2>
            </>
            )}
            <Create />
		</div>
	);
}

export default Home;
