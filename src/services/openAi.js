export default async function openAi (prompt) {
    const res = await fetch(`https://api.openai.com/v1/completions`, {
        method: 'POST',
        headers: {
            "content-Type": "application/json",
            "Authorization": "Bearer  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"
        },

        body: JSON.stringify({
                model: "text-davinci-003",
                prompt: prompt,
                temperature: 0,
                max_tokens: 600,
                top_p: 1,
                frequency_penalty: 0.5,
                presence_penalty: 0})
    })
    if (!res.ok)
        throw new Error('Response is no ok')
    const res_1 = await res.json()
    return res_1
}