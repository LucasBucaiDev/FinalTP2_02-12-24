import GameService from '../services/gameService.js';

class GameController {
    constructor() {
        this.service = new GameService();
    }

    createGame = async (req, res) => {
        try {
            const game = await this.service.addGame(req.body)
            res.status(201).json(game);
        } catch (error) {
            res.status(400).json({ error: error.message});
        }
    }

    createSale = async (req, res) => {
        try {
            const sale = await this.service.addSale(req.body)
            res.status(201).json(sale);
        } catch (error) {
            res.status(400).json({error: error.message});
        }
    }

    listGames = async (req, res) => {
        try {
            const games = await this.service.listGames()
            res.status(200).json(games);
        } catch (error) {
            res.status(400).json({ error: error.message});
        }
    }

    getTotalSold = async (req, res) => {
        try {
            const totalSold = await this.service.getTotalSold();
            res.status(200).json({totalSold});
        } catch (error) {
            res.status(400).json({error: error.message});
        }
    }

    getTotalSoldByCategory = async (req, res) => {
        try {
            const totalSoldByCategory = await this.service.getSoldByCategory()
            res.status(200).json({totalSoldByCategory});
        } catch (error) {
            res.status(400).json({error: error.message});
        }
    }
}

export default GameController;