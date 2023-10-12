import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_AIAPI_KEY, // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true,
});

export default openai;
