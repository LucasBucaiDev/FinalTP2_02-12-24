import Factory from '../models/Factory.js';

class GameService {
    constructor() {
        this.model = Factory.get('MEM');
    }

    validateGameData = async (gameData) => {
        const {name, category, price, stock} = gameData;
        const categorys = ['estrategia', 'rol', 'cartas', 'familiar'];

        if(!name || typeof name !== 'string' || name.trim() === '') throw new Error('El nombre del juego es invalido');
        if(!categorys.includes(category)) throw new Error('La categoria es invalida');
        if(typeof price !== 'number' || price <= 0) throw new Error('El precio debe ser un numero positivo');
        if(typeof stock !== 'number' || stock <= 0) throw new Error('El stock debe ser un numero positivo');
    }

    addGame = async (gameData) => {
        await this.validateGameData(gameData);
        return this.model.createGame(gameData);
    }

    listGames = async () => {
        return this.model.listGames();
    }

    addSale = async (saleData) => {
        const {gameId, quantity} = saleData;
        const game = await this.model.getGameById(gameId);
        if(!game) throw new Error('El juego no existe');
        if(game.stock < quantity) throw new Error('Stock insuficiente');
        game.stock -= quantity;
        return this.model.addSale(saleData);
    }

    getTotalSold = async () => {
        const totalSold = await this.model.getSales();
        let totalGamesSold = 0;
        for(const sold of totalSold) {
            totalGamesSold += sold.quantity;
        }
        return totalGamesSold;
    }

    getSoldByCategory = async () => {
        const totalSoldByCategory = this.model.getSalesByCategory();
        return totalSoldByCategory;
    }
}

export default GameService;