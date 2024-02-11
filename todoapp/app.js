// Require the express and body-parser modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of Express
const app = express();

// Define the port number
const port = 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Define a POST endpoint for calculating maximum interviews
app.post('/calculateMaxInterviews', (req, res) => {
    // Extract start_times and end_times from the request body
    const { start_times, end_times } = req.body;

    // Validate input
    if (!start_times || !end_times || start_times.length !== end_times.length) {
        // If input is invalid, respond with a 400 Bad Request status and an error message
        return res.status(400).json({ error: 'Invalid input data' });
    }

    // Get the number of interviews
    const n = start_times.length;

    // Combine start_times and end_times into an array of interview objects
    const interviews = [];
    for (let i = 0; i < n; i++) {
        interviews.push({ start: start_times[i], end: end_times[i] });
    }

    // Sort interviews based on end times
    interviews.sort((a, b) => a.end - b.end);

    // Initialize variables for tracking maximum interviews and the end time of the last interview
    let maxInterviews = 0;
    let lastEndTime = -Infinity;

    // Iterate through sorted interviews to find maximum non-overlapping interviews
    for (const interview of interviews) {
        // If the current interview starts after the end of the last interview, increment maxInterviews
        if (interview.start >= lastEndTime) {
            maxInterviews++;
            // Update the end time of the last interview
            lastEndTime = interview.end;
        }
    }

    // Respond with the maximum number of interviews in JSON format
    res.json({ max_interviews: maxInterviews });
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});