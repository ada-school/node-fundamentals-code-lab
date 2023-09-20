const http = require("http");
const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
  const url = new URL(req.url, `https://localhost:${port}/`);

  if (url.pathname === "/user") {
    const name = url.searchParams.get("name");
    const email = url.searchParams.get("email");
    const response = JSON.stringify({ "name": name, "email": email });

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(response);
  } else {
    res.writeHead(200);
    res.end();
  }
};

const server = http.createServer(requestListener);
module.exports = server;
