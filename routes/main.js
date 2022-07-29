import express from "express";
import { nftController } from "../controllers/nftController.js";
import bodyParser from "body-parser";
var urlencodedParse = bodyParser.urlencoded({ extended: false });
var controller = new nftController();
const router = express.Router();

router.get("/main", async (req, res, next) => {
  console.log(req.method)
  res.render("main", {
    nfts: await controller.getData(),
  });
});

router.post("/main", urlencodedParse, async (req, res, next) => {
  if (req.body != undefined) {
    await controller.registerNft(req.body);
    const data = await controller.getData();
    res.render("main", {
      nfts: data,
    });
  } else {
    res.render("error");
  }
});

router.put("/main", async (req, res, next) => {
    console.log(req.method)
});

export default router;
