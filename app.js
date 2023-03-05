const express = require("express");

const app = express();



app.get("/get/:id", (req, res) => {
 
 const id = req.params.id;
 const query = req.query;

  res.status(200).json({
   error: false,
   message: "Get Request Received Successfully",
   path_parameter: id+" is the path parameter",
   query_parameters: query
  });
 });
 
 app.get("/get", (req, res) => {
  const query = req.query;
 
  res.status(200).json({
    error: false,
    message: "Get Request Received Successfully",
    query_parameters: query
  });
});

app.post("/post", (req, res) => {
 const body = req.body;
  res.status(200).json({
    error: false,
    message: "Post Request Received Successfully",
    body
  });
});

app.put("/put", (req, res) => {

 const body = req.body;

  res.status(200).json({
    error: false,
    message: "Put Request Received Successfully",
    body
  });
});

app.delete("/delete", (req, res) => {
  res.status(200).json({
    error: false,
    message: "Delete Request Received Successfully",
  });
});

app.all("*", (req, res) => {
  res.status(404).json({
    error: true,
    message: "No such route exits",
  });
});

app.listen(4908, () => {
  console.log("Server is running on port 4908");
});