// Importing required modules
const express = require('express'); // Importing Express.js framework
const bodyParser = require('body-parser'); // Importing Body Parser middleware for parsing JSON requests

// Creating an Express application instance
const app = express();
const port = 3000; // Setting the port number for the server to listen on

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// POST route to detect unauthorized sales
app.post('/detect_unauthorized_sales', (req, res) => {
  // Destructuring request body to extract productListings and salesTransactions
  const { productListings, salesTransactions } = req.body;

  // Array to store unauthorized sales
  const unauthorizedSales = [];

  // Object to store authorized sellers for each productID
  const authorizedSellers = {};

  // Populating authorizedSellers object with productID as key and authorizedSellerID as value
  productListings.forEach(listing => {
    authorizedSellers[listing.productID] = listing.authorizedSellerID;
  });

  // Iterating through salesTransactions to detect unauthorized sales
  salesTransactions.forEach(sale => {
    const { productID, sellerID } = sale;
    const authorizedSellerID = authorizedSellers[productID];
    
    // Checking if the sale is unauthorized and pushing it to unauthorizedSales array
    if (authorizedSellerID && authorizedSellerID !== sellerID) {
      unauthorizedSales.push({ productID, unauthorizedSellerID: sellerID });
    }
  });

  // Sending JSON response containing unauthorized sales
  res.json({ unauthorizedSales });
});

// Starting the server and listening on specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
