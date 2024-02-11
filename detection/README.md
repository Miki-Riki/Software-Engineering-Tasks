<h2>Unauthorized Sales Detection</h2></b>

**<h3>Approach</h3>**
This project is a simple **`Node.js`** application built with **`Express.js`** framework that detects unauthorized sales based on provided product listings and sales transactions. The application listens for POST requests on the **`detect_unauthorized_sales`** endpoint. It expects JSON data in the request body containing two arrays: **`productListings`** and **`salesTransactions`**. It then iterates over the sales transactions and checks if the seller is authorized to sell the corresponding product based on the provided listings. If not, it adds the unauthorized sale to the **`unauthorizedSales`** array.

**<h3>Assumptions</h3>**
  - The incoming data will be in JSON format.
  - Each product in the 'productListings' array will have a unique 'productID'.
  - Each sale in the 'salesTransactions' array will have a 'productID' and a 'sellerID'.
  - There is no authentication or authorization mechanism implemented in this code snippet.
  - Error handling for invalid or missing data is not implemented for brevity.

<h3>Steps to Run the Code</h3>
<ol type="1">
  <li>Make sure you have Node.js and npm (Node Package Manager) installed on your system. You can download and install them from <a href="https://nodejs.org/">https://nodejs.org/</a>.</li>
  <li>Clone this repository to your local machine.</li>
  <li>Navigate to the project directory in your terminal.</li>
  <li>Install the required dependencies by running the command: <b>npm install</b></li>
   <li>Start the server by running the command: <b>node app.js</b></li>
  <li>The server will start running on <b>PORT 3000</b> by default.</li>
  <li>Use a tool like <b>Postman</b> or <b>cURL</b> to make a POST request to the <b>detect_unauthorized_sales</b> endpoint with JSON data containing <b>productListings</b> and <b>salesTransactions</b>.</li>
  <li>The server will respond with JSON data containing the unauthorized sales.</li>
</ol>
