const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    error: false,
    message: "Welcome to High on Bugs Blog API",
    Blog: "https://highonbugs.sbk2k1.me/rest-part-2",
    GitHub: "https://github.com/sbk2k1"
  });
});

app.get("/get/:id", (req, res) => {

  const id = req.params.id;
  const query = req.query;
  var bearer = req.headers.authorization;
  const headers = req.headers;

  if (!bearer) {
    bearer = "Bearer Token is absent";
  }

  res.status(200).json({
    error: false,
    message: "Get Request Received Successfully",
    path_parameter: id + " is the path parameter",
    query_parameters: query,
    bearer_token: bearer,
    headers
  });
});

app.get("/get", (req, res) => {
  const query = req.query;
  var bearer = req.headers.authorization;
  const headers = req.headers;

  if (!bearer) {
    bearer = "Bearer Token is absent";
  }

  res.status(200).json({
    error: false,
    message: "Get Request Received Successfully",
    query_parameters: query,
    bearer_token: bearer,
    headers
  });
});

app.post("/post/:id", (req, res) => {

  const id = req.params.id;
  const query = req.query;
  const body = req.body;
  var bearer = req.headers.authorization;
  var headers = req.headers;

  if (!bearer) {
    bearer = "Bearer Token is absent";
  }
  res.status(200).json({
    error: false,
    message: "Post Request Received Successfully",
    body,
    path_parameter: id + " is the path parameter",
    query_parameters: query,
    bearer_token: bearer,
    headers
  });
});

app.post("/post", (req, res) => {
  const body = req.body;
  const query = req.query;
  var bearer = req.headers.authorization;
  const headers = req.headers;



  if (!bearer) {
    bearer = "Bearer Token is absent";
  }
  res.status(200).json({
    error: false,
    message: "Post Request Received Successfully",
    body,
    query_parameters: query,
    bearer_token: bearer,
    headers
  });
});

app.put("/put/:id", (req, res) => {

  const id = req.params.id;
  const query = req.query;
  const body = req.body;
  var bearer = req.headers.authorization;
  const headers = req.headers;


  if (!bearer) {
    bearer = "Bearer Token is absent";
  }
  res.status(200).json({
    error: false,
    message: "Put Request Received Successfully",
    body,
    path_parameter: id + " is the path parameter",
    query_parameters: query,
    bearer_token: bearer,
    headers
  });
});

app.put("/put", (req, res) => {

  const body = req.body;
  const query = req.query;
  var bearer = req.headers.authorization;
  const headers = req.headers;

  if (!bearer) {
    bearer = "Bearer Token is absent";
  }

  res.status(200).json({
    error: false,
    message: "Put Request Received Successfully",
    body,
    query_parameters: query,
    bearer_token: bearer,
    headers
  });
});

app.delete("/delete/:id", (req, res) => {

  const id = req.params.id;
  const query = req.query;
  var bearer = req.headers.authorization;
  const headers = req.headers;

  if (!bearer) {
    bearer = "Bearer Token is absent";
  }
  res.status(200).json({
    error: false,
    message: "Delete Request Received Successfully",
    path_parameter: id + " is the path parameter",
    query_parameters: query,
    bearer_token: bearer,
    headers
  });
});

app.delete("/delete", (req, res) => {

  const query = req.query;
  var bearer = req.headers.authorization;
  const headers = req.headers;

  if (!bearer) {
    bearer = "Bearer Token is absent";
  }
  res.status(200).json({
    error: false,
    message: "Delete Request Received Successfully",
    query_parameters: query,
    bearer_token: bearer,
    headers
  });
});

app.all("*", (req, res) => {

  const headers = req.headers;

  res.status(404).json({
    error: true,
    message: "No such route exits",
    headers
  });
});

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

module.exports = app;