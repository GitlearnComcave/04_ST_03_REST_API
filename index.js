// Import

const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;

// Listener für express-instanz
app.listen(PORT, () => console.log(`server ready at http://localhost"${PORT}`));

/* 200 OK */
app.get("/", (req, res) => {
  res.sendStatus(200);
});

/* JSON */
// app.get("/", (req,res) =>
// {
//     res.send({
//         item: "T-shirt",
//         size: "L",
//         onstock: 20
//     })
// });

/* HTML */
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'src', 'boo.html'));
//     });

/* JPG */
// app.get('/', (req, res) => {
//       res.sendFile(path.join(__dirname, 'src', 'image.jpg'));
//     });
