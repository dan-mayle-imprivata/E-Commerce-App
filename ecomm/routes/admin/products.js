const express = require("express");
const productsRepo = require("../../repositories/products");

const router = express.Router();

router.get("/admin/products", (req, res) => {});

router.get("/admin/new", (req, res) => {});

module.exports = router;
