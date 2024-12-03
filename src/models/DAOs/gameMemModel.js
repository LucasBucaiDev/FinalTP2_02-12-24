class GameMemModel {
    constructor() {
        this.games = [];
        this.sales = [];
        this.nexId = 1;
    }

    createGame = async (gameData) => {
        const newGame = {
            id: this.nexId++,
            ...gameData,
        }
        this.games.push(newGame);
        return newGame;
    }

    listGames = async () => {
        return this.games;
    }

    getGameById = async (id) => {
        return this.games.find((game) => game.id === id);
    }

    addSale = async (sale) => {
        this.sales.push(sale);
        return sale;
    }

    getSales = async () => {
        return this.sales;
    }

    getSalesByCategory = async () => {
        const salesByCategory = {};

        for(const sale of this.sales) {
            const game = await this.getGameById(sale.gameId);
            if (game) {
                const category = game.category;
                const currentSales = salesByCategory[category] || 0;
                salesByCategory[category] = currentSales + sale.quantity;
            }      
        }
        return salesByCategory;
    }
}

export default GameMemModel;