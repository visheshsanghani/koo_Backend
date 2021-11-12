const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

router.get("/getData", async (req, res) => {
  try {
    const page = req.query.page;
    console.log('page: ', page);
    const response = await fetch(`https://gorest.co.in/public/v1/posts?page=${page}`);
    let data = await response.json();
    console.log('data: ', data);
    const totalPages = data.meta.pagination.pages;
    data = [...data.data];
    return res.status(200).json({
      msg: "Fetched successfully",
      data,
      totalPages
    });
  }
  catch (err) {
    console.log(err);
    return res.status(500).json({
      msg: "Unable to fetch"
    });
  }
});

module.exports = router;