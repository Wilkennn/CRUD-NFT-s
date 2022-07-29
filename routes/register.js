import express from 'express';
import { nftController } from "../controllers/nftController.js";
var teste = new nftController()
const router = express.Router();

router.get('/register', (req, res, next) => {
    res.render('register')
});

export default router;