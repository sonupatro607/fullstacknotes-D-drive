const defaultroute = require("./routes/default");
const userroute = require("./routes/user");
// const http = require("http");

const express = require("express");
const app = express();

// const requestHandler = (req, res) => {
//   const url = req.url;

//   if (url === "/login") {
//     res.setHeader("content-type", "text/html");
//     res.write("<html>");
//     res.write('<head><title>Node Discussion"</title></head>');
//     res.write("<body><h1>user get their login res</h1></body>");
//     res.write("</html>");
//     return res.end();
//   }

//   if (url === "/") {
//     res.setHeader("content-type", "text/html");
//     res.write("<html>");
//     res.write('<head><title>Node Discussion"</title></head>');
//     res.write("<body><h1>user get their default res</h1></body>");
//     res.write("</html>");
//     return res.end();
//   }
// };
// const server = http.createServer(requestHandler);

// server.listen(8000);
app.use(userroute);
app.use(defaultroute);

app.listen(8080);
