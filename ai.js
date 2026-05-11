const API_KEY = "PUT_YOUR_KEY_HERE";

async function askAI(question) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "أنت مدرس توجيهي تشرح بشكل بسيط وواضح."
        },
        {
          role: "user",
          content: question
        }
      ]
    })
  });

  const data = await res.json();
  return data.choices[0].message.content;
}
