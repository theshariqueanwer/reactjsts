import fs from "node:fs/promises";
import { app } from "./app";

app.post("/register", async (req, res) => {
  const userData = req.body.user;
  if (userData === null ||
    userData.name === null ||
    userData.email === null ||
    userData.mobile === null ||
    userData.username === null ||
    userData.userId === null ||
    userData.password === null) {
    return res.status(400).json({ message: "user data is missing." });
  }

  if (orderData.customer.email === null ||
    !orderData.customer.email.includes("@") ||
    orderData.customer.name === null ||
    orderData.customer.name.trim() === "" ||
    orderData.customer.street === null ||
    orderData.customer.street.trim() === "" ||
    orderData.customer["postal-code"] === null ||
    orderData.customer["postal-code"].trim() === "" ||
    orderData.customer.city === null ||
    orderData.customer.city.trim() === "") {
    return res.status(400).json({
      message: "Missing data: Email, name, street, postal code or city is missing.",
    });
  }

  const newUser = {
    ...userData,
    id: Math.trunc(Math.floor(Math.random() * 9999).toString()),
  };
  const orders = await fs.readFile("./data/orders.json", "utf8");
  const allOrders = JSON.parse(orders);
  allOrders.push(newOrder);
  await fs.writeFile("./data/orders.json", JSON.stringify(allOrders));
  res.status(201).json({ message: "Order created!" });

});
