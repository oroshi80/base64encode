import express from "express";
import pino from "pino";
import pinoPretty from "pino-pretty";

const logger = pino(pinoPretty());

const app = express();
app.use(express.json());

// POST /base64Encode
app.post("/functions/KelvinBase64Encode", (req, res) => {
  const { input } = req.body;

  if (typeof input !== "string") {
    return res.status(400).json({ error: "Input must be a string." });
  }

  const output = Buffer.from(input).toString("base64");

  res.json({ input, output });
});

// GET /base64Encode
app.get("/functions/KelvinBase64Encode", (req, res) => {
  res.json({
    name: "KelvinBase64Encode",
    description: "Encode anything to base64",
    input: {
      type: "string",
      description: "Input the data you'd like to encode to base64",
      example: "Hello, world",
    },
    output: {
      type: "string",
      description: "Base64 encoded string",
      example: "SGVsbG8sIHdvcmxk",
    },
  });
});

// ROT13 encoder
function rot13(str) {
  return str.replace(/[a-zA-Z]/g, function (char) {
    const base = char <= "Z" ? 65 : 97;
    return String.fromCharCode(((char.charCodeAt(0) - base + 13) % 26) + base);
  });
}

app.post("/functions/KelvinROT13", (req, res) => {
  const { input } = req.body;

  if (typeof input !== "string") {
    return res.status(400).json({ error: "Input must be a string." });
  }

  const output = rot13(input);
  res.json({ input, output });
});

app.get("/functions/KelvinROT13", (req, res) => {
  res.json({
    name: "KelvinROT13",
    description:
      "ROT13 cipher to input text (a simple letter substitution cipher that replaces a letter with the 13th letter after it in the alphabet",
    input: {
      type: "string",
      description: "Input the data you'd like to ROT13 Encoder",
      example: "Hello, world",
    },
    output: {
      type: "string",
      description: "ROT13 encoded string",
      example: "Uryyb, jbeyq",
    },
  });
});

// Emoji Translator
const emojiMap = {
  hello: "👋😊",
  love: "❤️",
  cat: "🐱",
  dog: "🐶",
  pizza: "🍕",
  cool: "😎",
  fire: "🔥",
  happy: "😁",
  sad: "😢",
  yes: "✅",
  no: "❌",
};

function translateToEmoji(text) {
  return text
    .split(" ")
    .map((word) => emojiMap[word.toLowerCase()] || word)
    .join(" ");
}
app.post("/functions/KelvinEmojiTranslator", (req, res) => {
  const { input } = req.body;

  if (typeof input !== "string") {
    return res.status(400).json({ error: "Input must be a string." });
  }

  const output = translateToEmoji(input);

  res.json({ input, output });
});

app.get("/functions/KelvinEmojiTranslator", (req, res) => {
  res.json({
    name: "KelvinEmojiTranslator",
    description:
      "Converts words into corresponding emojis based on common expressions.",
    input: {
      type: "string",
      description: "The text you want to translate into emojis.",
      example: "hello I love pizza",
    },
    output: {
      type: "string",
      description: "The emoji-translated version of your input.",
      example: "👋😊 I ❤️ 🍕",
    },
  });
});

// Test page
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3100, () => {
  logger.info("Server is running on port 3100");
});
