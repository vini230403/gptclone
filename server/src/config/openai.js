import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateResponse(prompt) {
  const response = await openai.chat.completions.create({
    model: "gpt-4", // ou "gpt-3.5-turbo"
    messages: [
      { role: "user", content: prompt }
    ],
    temperature: 0.7
  });

  return response.choices[0].message.content;
}
  