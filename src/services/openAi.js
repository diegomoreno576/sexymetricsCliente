export default async function openAi (prompt) {
        console.log(process.env.REACT_APP_IOAPI)
    const res = await fetch(`https://api.openai.com/v1/completions`, {
        method: 'POST',
        headers: {
            "content-Type": "application/json",
            "Authorization": process.env.REACT_APP_IOAPI
        },

        body: JSON.stringify({
                model: "text-davinci-003",
                prompt: prompt,
                temperature: 0,
                max_tokens: 80,
                top_p: 1,
                frequency_penalty: 0.5,
                presence_penalty: 0})
    })
    if (!res.ok)
        throw new Error(res.statusText)
    const res_1 = await res.json()
    return res_1
}