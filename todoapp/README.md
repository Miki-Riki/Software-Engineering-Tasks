**<h2>Interview Scheduler API</h2>**
This repository contains code for an <b>Express.js</b> API to calculate the maximum number of non-overlapping interviews based on given start and end times.

<h3>Approach</h3>
The approach used in this API is to sort the interviews based on their end times and then iterate through them to find the maximum number of non-overlapping interviews. During iteration, if the start time of the current interview is after the end time of the last interview, it is considered non-overlapping, and the count is incremented. This process continues until all interviews are processed.

<h3>Assumptions</h3>
<ol type="1">
  <li><b>Input Validity:</b> It is assumed that the input data provided for start times and end times are arrays of equal length, representing the start and end times of each interview respectively.</li>
  <li><b>Time Format:</b> The code assumes that the start and end times are in a format that allows comparison (e.g., <b>UNIX timestamps or ISO 8601 strings</b>).</li>
</ol>

<h3>Steps to Run the Code</h3>
To run this code, follow these steps:
<br>
<br>
<b>Install Dependencies:</b> Ensure you have Node.js installed on your system. Then, navigate to the project directory in the terminal and run:
<br>
<br>

```
npm install
```
**Run the Server:** After installing dependencies, start the Express server by running:
```
node app.js
```
**Send Requests:** You can now send POST requests to the **`calculateMaxInterviews`** endpoint with JSON data containing the **`start_times`** and **`end_times`** arrays.

**Receive Response:** The server will respond with the maximum number of non-overlapping interviews in JSON format.

<h3>Notes</h3>

The server is configured to run on **`PORT 3000`** by default. You can change this port by modifying the port variable in **`app.js`**.
Ensure that the input data provided follows the specified format and assumptions to receive accurate results.
