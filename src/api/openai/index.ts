import OpenAI from "openai";

const getResponse = async (req: any) => {

  const question = req.question
  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });


  const response = await openai.chat.completions.create({
    model: 'gpt-4-turbo',
    messages: [{
      role: "user",
      content: question
    }],
  });

  return response
}

export {
  getResponse
}