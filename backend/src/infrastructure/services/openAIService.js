import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const getOpenAIResponse = async (prompt) => {
    const response = await client.responses.create({
        model: "gpt-4.1",
        input: prompt
    });
    return response.output_text;
}

const getOpenAICandidateSummary = async (wikipediaSummary) => {
    let prompt = `generate a short candidate profile summary. make it short and concise, max 60 words. give the summary right away, no introduction or anything else.`;
    if (wikipediaSummary) { 
        prompt += ` base the summary on this wikipedia summary: ${wikipediaSummary}`;
    }
    const response = await getOpenAIResponse(prompt);
    return response;
}

export { getOpenAIResponse, getOpenAICandidateSummary };
