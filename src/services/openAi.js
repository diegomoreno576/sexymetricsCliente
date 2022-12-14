export default async function openAi (prompt) {
        
    const res = await fetch(`https://api.openai.com/v1/completions`, {
        method: 'POST',
        headers: {
            "content-Type": "application/json",
            "Authorization": process.env.REACT_APP_IOAPI
        },

        body: JSON.stringify({
                model: "text-ada-001",
                prompt: prompt,
                temperature: 0,
                max_tokens: 200,
                top_p: 1,
                frequency_penalty: 0.5,
                presence_penalty: 0
            })
    })
    if (!res.ok)
   
        throw new Error(res.statusText)
    const res_1 = await res.json()
    return res_1
}