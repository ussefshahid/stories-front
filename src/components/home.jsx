import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'react-bootstrap';

const Home = () =>{
    return ( 
        <div>
            <Jumbotron>
                <h2>Home page</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa, sapiente voluptatum? Quisquam, labore ipsam accusamus sint at eos nostrum natus velit ut quae? Veniam dolorum harum commodi eum natus explicabo.</p>
            </Jumbotron>
            <Link to="/teams">
                <Button className="btn btn-primary">Teams page</Button>
            </Link>
        </div>
        );
}
 
export default Home;