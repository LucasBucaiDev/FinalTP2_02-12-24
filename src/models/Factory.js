import GameMemModel from './DAOs/gameMemModel.js';

class Factory {
    static get(type){
        switch(type){
            case 'MEM':
                console.log('**** Persistiendo en Memoria ****')
                return new GameMemModel()
            default:
                console.log('**** Persistiendo en Memoria (default) ****')
                return new GameMemModel()    
        }
    }
}

export default Factory;