import OpenAI from "openai";

console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function sendText(req, res) {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ success: false, error: "Prompt não enviado" });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    return res.status(200).json({
      success: true,
      data: response.choices[0].message.content,
    });
  } catch (error) {
    console.error("Erro OpenAI:", error);
    return res.status(500).json({
      success: false,
      error: error.message || "Erro desconhecido no servidor",
    });
  }
}
