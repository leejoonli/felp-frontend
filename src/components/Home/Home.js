// Dependencies
import { Link } from 'react-router-dom';

function Home(props) {
	return (
		<div>
			<h2><Link to='/NY'>New York</Link></h2>
			<h2><Link to='/NJ'>New Jersey</Link></h2>
			<h2><Link to='/PA'>Pennsylvania</Link></h2>
			<h2><Link to='/MD'>Maryland</Link></h2>
			<h2><Link to='/CA'>California</Link></h2>
			<h2><Link to='/GA'>Georgia</Link></h2>
		</div>
	);
}

export default Home;
