import fs from "node:fs/promises";

import bodyParser from "body-parser";
import express from "express";

const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));

const rnd = () => {
  const id = Math.random().toString;
  id = Math.floor(Math.random() * 9999);
  id = Math.trunc(Math.floor(Math.random() * 9999).toString());
};

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.post("/register", async (req, res) => {
  const userData = req.body.user;
  if (
    userData === null ||
    userData.name === null ||
    userData.email === null ||
    userData.mobile === null ||
    userData.username === null ||
    userData.userId === null ||
    userData.password === null
  ) {
    return res.status(400).json({ message: "user data is missing." });
  }

  if (
    userData.name === null ||
    userData.name.trim() === "" ||
    userData.email === null ||
    !userData.email.includes("@") ||
    userData.mobile === null ||
    userData.mobile.includes([0 - 9]) ||
    userData.username === null ||
    userData.userId === null ||
    userData.password === null
  ) {
    return res.status(400).json({
      message:
        "Missing data: name, email, mobile, username, userId, password is missing.",
    });
  }

  const newUser = {
    ...userData,
    id: Math.trunc(Math.floor(Math.random() * 9999).toString()),
  };
  const users = await fs.readFile("./data/users.json", "utf8");
  const allUsers = JSON.parse(users);
  allUsers.push(newUser);
  await fs.writeFile("./data/users.json", JSON.stringify(allUsers));
  const user = allUsers.find((user) => user.id === newUser.id);
  res.status(201).json({ message: "User created!", user });
});

app.get("/meals", async (req, res) => {
  const meals = await fs.readFile("./data/available-meals.json", "utf8");
  res.json(JSON.parse(meals));
});

app.post("/orders", async (req, res) => {
  const orderData = req.body.order;

  // if (
  //   orderData === null ||
  //   orderData.items === null ||
  //   orderData.items === []
  // )
  if (
    orderData === null ||
    orderData.items === null ||
    orderData.items.length === 0
  ) {
    return res.status(400).json({ message: "Missing data." });
  }

  if (
    orderData.customer.email === null ||
    !orderData.customer.email.includes("@") ||
    orderData.customer.name === null ||
    orderData.customer.name.trim() === "" ||
    orderData.customer.street === null ||
    orderData.customer.street.trim() === "" ||
    orderData.customer["postal-code"] === null ||
    orderData.customer["postal-code"].trim() === "" ||
    orderData.customer.city === null ||
    orderData.customer.city.trim() === ""
  ) {
    return res.status(400).json({
      message:
        "Missing data: Email, name, street, postal code or city is missing.",
    });
  }

  const newOrder = {
    ...orderData,
    id: (Math.random() * 1000).toString(),
  };
  const orders = await fs.readFile("./data/orders.json", "utf8");
  const allOrders = JSON.parse(orders);
  allOrders.push(newOrder);
  await fs.writeFile("./data/orders.json", JSON.stringify(allOrders));
  res.status(201).json({ message: "Order created!" });
});

app.use((req, res) => {
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  res.status(404).json({ message: "Not found" });
});

app.listen(3000);
