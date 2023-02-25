import React, { useState } from 'react';

function Quote({ deliveryAddress }) {
  const [gallonsRequested, setGallonsRequested] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [suggestedPrice, setSuggestedPrice] = useState('');
  const [totalAmountDue, setTotalAmountDue] = useState('');

  const GallonsChange = (e) => {
    setGallonsRequested(e.target.value);
  };

  const DeliveryDateChange = (date) => {
    setDeliveryDate(date);
  };

  const Submit = (e) => {
    e.preventDefault();

    //Suggested price =1 since we don't build any pricing module
    const calculatedSuggestedPrice = 1;

    //Calculated total amount due = price * gallons;
    const calculatedTotalAmountDue = calculatedSuggestedPrice * gallonsRequested;

    setSuggestedPrice(calculatedSuggestedPrice.toFixed(2));
    setTotalAmountDue(calculatedTotalAmountDue.toFixed(2));
  };

  return (
    <div>
      <h2>Fuel Quote Form</h2>
      <form onSubmit={Submit}>
        <div>
          <label htmlFor="gallonsRequested">Gallons Requested: </label>
          <input
            type="number"
            id="gallonsRequested"
            name="gallonsRequested"
            value={gallonsRequested}
            onChange={GallonsChange}
            required
          />
        </div>
        <div>
          <label htmlFor="deliveryAddress">Delivery Address: </label>
          <input
            type="text"
            id="deliveryAddress"
            name="deliveryAddress"
            value={deliveryAddress}
            required
          />
        </div>
        <div>
          <label htmlFor="deliveryDate">Delivery Date: </label>
          <input
            type="date"
            id="deliveryDate"
            name="deliveryDate"
            value={deliveryDate}
            required
          />
        </div>
        <div>
          <label htmlFor="suggestedPrice">Suggested Price: </label>
          <input
            type="number"
            id="suggestedPrice"
            name="suggestedPrice"
            value={suggestedPrice}
            readOnly
          />
        </div>
        <div>
          <label htmlFor="totalAmountDue">Total Amount Due:</label>
          <input
            type="number"
            id="totalAmountDue"
            name="totalAmountDue"
            value={totalAmountDue}
            readOnly
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Quote;