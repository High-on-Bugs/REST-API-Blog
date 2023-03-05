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

  if (!bearer) {
    bearer = "Bearer Token is absent";
  }

  res.status(200).json({
    error: false,
    message: "Get Request Received Successfully",
    path_parameter: id + " is the path parameter",
    query_parameters: query,
    bearer_token: bearer
  });
});

app.get("/get", (req, res) => {
  const query = req.query;
  var bearer = req.headers.authorization;

  if (!bearer) {
    bearer = "Bearer Token is absent";
  }

  res.status(200).json({
    error: false,
    message: "Get Request Received Successfully",
    query_parameters: query,
    bearer_token: bearer
  });
});

app.post("/post/:id", (req, res) => {

  const id = req.params.id;
  const query = req.query;
  const body = req.body;
  var bearer = req.headers.authorization;


  if (!bearer) {
    bearer = "Bearer Token is absent";
  }
  res.status(200).json({
    error: false,
    message: "Post Request Received Successfully",
    body,
    path_parameter: id + " is the path parameter",
    query_parameters: query,
    bearer_token: bearer
  });
});

app.post("/post", (req, res) => {
  const body = req.body;
  const query = req.query;
  var bearer = req.headers.authorization;


  if (!bearer) {
    bearer = "Bearer Token is absent";
  }
  res.status(200).json({
    error: false,
    message: "Post Request Received Successfully",
    body,
    query_parameters: query,
    bearer_token: bearer
  });
});

app.put("/put/:id", (req, res) => {

  const id = req.params.id;
  const query = req.query;
  const body = req.body;
  var bearer = req.headers.authorization;


  if (!bearer) {
    bearer = "Bearer Token is absent";
  }
  res.status(200).json({
    error: false,
    message: "Put Request Received Successfully",
    body,
    path_parameter: id + " is the path parameter",
    query_parameters: query,
    bearer_token: bearer
  });
});

app.put("/put", (req, res) => {

  const body = req.body;
  const query = req.query;
  var bearer = req.headers.authorization;

  if (!bearer) {
    bearer = "Bearer Token is absent";
  }

  res.status(200).json({
    error: false,
    message: "Put Request Received Successfully",
    body,
    query_parameters: query,
    bearer_token: bearer
  });
});

app.delete("/delete/:id", (req, res) => {

  const id = req.params.id;
  const query = req.query;
  var bearer = req.headers.authorization;

  if (!bearer) {
    bearer = "Bearer Token is absent";
  }
  res.status(200).json({
    error: false,
    message: "Delete Request Received Successfully",
    path_parameter: id + " is the path parameter",
    query_parameters: query,
    bearer_token: bearer
  });
});

app.delete("/delete", (req, res) => {

  const query = req.query;
  var bearer = req.headers.authorization;

  if (!bearer) {
    bearer = "Bearer Token is absent";
  }
  res.status(200).json({
    error: false,
    message: "Delete Request Received Successfully",
    query_parameters: query,
    bearer_token: bearer
  });
});

app.all("*", (req, res) => {
  res.status(404).json({
    error: true,
    message: "No such route exits",
  });
});

module.exports = app;