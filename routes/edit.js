import express from 'express';
import { nftController } from "../controllers/nftController.js";
var controller = new nftController()
const router = express.Router();

router.get('/edit/:nft', async(req, res, next) => {
    let id = req.params.nft
    let nft = await controller.findNft(id)
    res.render('edit', { nft: nft[0]})
});

export default router;