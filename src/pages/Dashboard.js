import React from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Dashboard = () => {
    const states = [ 'AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA',
           'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME',
           'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM',
           'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX',
           'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY']

      const defaultOption = states[0];
return (
	<form>
	<label>
		Full Name (required): <input name="Name" required/>
       
	</label>
    <label>
        Address (required): <input name="Address" required />
	</label>
    <label>
        City (required): <input name="City" required/>
	</label>
    <label>
        
        State (required): <Dropdown options={states} required />
	</label>
    <label>
        Zipcode (required): <input name="Zipcode" required />
	</label>
    <input type="submit" value="Submit" />
	</form>
);
};

export default Dashboard;
