import State from '../State/State';
import Create from '../Create/Create';

// Dependencies
import { useEffect, useState } from 'react';
import axios from 'axios';

function Home(props) {
    // setting state variable for list of states 
    const [ states, setStates ] = useState([]);

    // api call
    useEffect(() => {

    }, []);
    
	return (
		<div>
			hello from home
			<State />
            <Create />
		</div>
	);
}

export default Home;
