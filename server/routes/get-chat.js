const express = require("express");
const router = express.Router();
const path = require("path");
const cors = require("cors");

router.get("/", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const question = req.query.question; // Your custom question

  try {
    const response = await fetch('https://arcade.evl.uic.edu/llama/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: `system You are a helpful assistant, providing informative and friendly answers to the user aiming for responses around 250 words. user ${question} under 150 words or introduce yourself assistant`,
        parameters: {
          max_new_tokens: 400
        }
      })
    });

    const data = await response.json();

    if (response.ok) {
      res.json(data);
    } else {
      res.status(response.status).json(data);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
