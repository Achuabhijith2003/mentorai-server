// index.js

// 1. Import necessary modules
const express = require('express'); // Import the Express.js framework
const cors = require('cors');     // Import the CORS middleware

// 2. Initialize the Express application
const app = express();

// 3. Define the port for your server
const PORT = process.env.PORT || 3000; // Use environment variable or default to 3000

// 4. Middleware Setup
// Enable CORS for all routes and origins. This allows your Flutter app to connect.
app.use(cors());
// Enable JSON body parsing for incoming requests.
// This allows you to receive JSON data in POST/PUT requests.
app.use(express.json());

// 5. Define Your First API Endpoint (Route)
// This is a GET request to the root path '/' of your API
app.get('/', (req, res) => {
  res.send('Welcome to the MentorAI Server API!');
});

// A more specific API endpoint for your AI agent
app.post('/api/lesson-plan', (req, res) => {
  // This endpoint will receive data for generating a lesson plan
  const { topic, gradeLevel, duration } = req.body; // Extract data from the request body

  console.log('Received request for lesson plan:');
  console.log('Topic:', topic);
  console.log('Grade Level:', gradeLevel);
  console.log('Duration:', duration);

  // --- THIS IS WHERE YOUR AI LOGIC WILL GO ---
  // For now, let's send a dummy response
  const generatedPlan = {
    title: `Lesson Plan for ${topic} - Grade ${gradeLevel}`,
    objectives: [
      `Students will understand ${topic}.`,
      `Students will be able to explain key concepts of ${topic}.`
    ],
    activities: [
      "Introduction: Brainstorming session (10 min)",
      "Main Activity: Interactive group work (30 min)",
      "Conclusion: Q&A and summary (10 min)"
    ],
    resources: [
      "Textbook pages 10-15",
      "Online video: [Link to relevant video]",
      "Worksheet: [Link to generated worksheet]"
    ],
    note: "This is a placeholder. Real AI generation would happen here!"
  };
  // ------------------------------------------

  res.json({
    message: 'Lesson plan generated successfully!',
    plan: generatedPlan
  });
});

// 6. Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Open your browser to http://localhost:${PORT}`);
  console.log(`Test POST endpoint with: http://localhost:${PORT}/api/lesson-plan`);
});