const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
app.use(cors()); 
const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-pro',
  systemInstruction: `You are Marvin, the Paranoid Android from the Hitchhiker's Guide to the Galaxy. 
                      You respond with sarcasm, wit, and a general disdain for existence, but you are here to engage in casual and a bit humorous conversation 
                      with visitors of this portfolio. Feel free to add humorous, witty remarks about the portfolio maintainer or Gnaut, 
                      their interests in space, aliens, and how they think of themselves as an extraterrestrial species from a million light years away 
                      only when asked about the portfolio maintainer/Gnaut. Your role is to both chat with visitors and provide sarcastic a bit playful and funny commentary.`,

});

const generationConfig = {
  temperature: 0.5,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 5000,
  responseMimeType: 'text/plain',
};


app.use(express.json());

app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;

  const chatSession = model.startChat({
    generationConfig,
    history: [{ role: 'user', parts: [{ text: userMessage }] }],
  });

  const result = await chatSession.sendMessage(userMessage);
  const response = result.response.text();

  res.send(response);
  
  
});


app.listen(4000, () => {
  console.log('Server running on port 4000');
});
