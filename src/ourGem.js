const { GenerativeAI } = require('generative-ai-js');

// Replace with your actual API key from Google AI Platform
const apiKey = 'AIzaSyAIVVv9KWaTAblphwT51knljh4ai-2K9tU'; 

const generativeAI = new GenerativeAI(apiKey);

const prompt = "Tell me a fun fact about the name nathan";

generativeAI.generateText(prompt)
  .then(response => {
    console.log(response.text); // This will contain the generated text
  })
  .catch(error => {
    console.error(error); // Handle any errors
  });
