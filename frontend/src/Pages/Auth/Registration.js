
import React ,{useState} from 'react'
import "../../Css/Registration.css"
export default function Registration() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = (event) => {
        event.preventDefault();
    
        // Create an object with the registration data
        const registrationData = {
          email: email,
          password: password
        };
    
        // Make a POST request to the CodeIgniter API
        fetch('https://obscure-robot-4j76g9vj954wf7gg-7777.app.github.dev/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify(registrationData)
        })
          .then(response => response.json())
          .then(data => {
            // Handle the response from the API
            console.log(data);
            // Perform any necessary actions based on the response
          })
          .catch(error => {
            // Handle any errors that occur during the request
            console.error(error);
          });
      };
    return (
        <div className="con">
            <form onSubmit={handleRegistration} >
            
                    
                
                <div className="form-group">
                    <label htmlFor="Email">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Enter your email"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input
                        type="text"
                        className="form-control"
                        name="lastname"
                        placeholder="Enter your name"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>


                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}





