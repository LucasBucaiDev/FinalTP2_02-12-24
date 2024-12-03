import express from 'express';
import GameController from '../controllers/gameController.js';

class GameRouter {
    constructor() {
        this.router = express.Router();
        this.controller = new GameController();
    }

    start() {
        this.router.post('/game', this.controller.createGame);
        this.router.post('/sale', this.controller.createSale);
        this.router.get('/games', this.controller.listGames);
        this.router.get('/statistics/total-sold', this.controller.getTotalSold);
        this.router.get('/statistics/total-sold-by-category', this.controller.getTotalSoldByCategory);
        return this.router;
    }
}

export default GameRouter;