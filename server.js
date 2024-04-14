const P0RT = 8000;
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json);
app.use(cors());

const API_KEY = "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";

app.post("/completions", async (req, res) => {
  const Options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant.",
          max_tokens: 150,
        },
        {
          role: "user",
          content: req.body.message,
        },
      ],
    }),
  };
  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      Options
    );
  } catch (error) {
    console.error(error);
  }
});

app.listen(P0RT, () => console.log(`Server running on port ${P0RT}`));
