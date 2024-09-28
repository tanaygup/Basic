const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// get a list of 5 jokes json

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      content:
        "Why don't scientists trust atoms? Because they make up everything.",
      likes: 10,
      dislikes: 2,
    },
    {
      id: 2,
      content: "Why don't eggs tell jokes? They'd crack each other up.",
      likes: 20,
      dislikes: 3,
    },
    {
      id: 3,
      content:
        "Why did the tomato turn red? Because it saw the salad dressing.",
      likes: 30,
      dislikes: 4,
    },
  ];
  res.json(jokes);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
