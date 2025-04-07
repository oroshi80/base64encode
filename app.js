import express from "express";
import pino from "pino";
import pinoPretty from "pino-pretty";

const logger = pino(pinoPretty());

const app = express();
app.use(express.json());

// POST /base64Encode
app.post("/functions/base64Encode", (req, res) => {
  const { input } = req.body;

  if (typeof input !== "string") {
    return res.status(400).json({ error: "Input must be a string." });
  }

  const output = Buffer.from(input).toString("base64");

  res.json({ input, output });
});

// GET /base64Encode
app.get("/functions/base64Encode", (req, res) => {
  res.json({
    name: "base64Encode",
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

// Test page
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  logger.info("Server is running on port 3000");
});
