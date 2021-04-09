const {Schema, model} = require('mongoose');

const GameSchema = new Schema({
    title:{
        type: String,
        require: true,
    },
    otherTiltles:[String],
    developers:[String],
    publishers:[String],
    genres:[String],
    firstReleased: Date,
    japanRelease: Date,
    usaRelease: Date,
    euroRelease: Date,
},{collection: 'games', strict: false}
);

const Game = model('Game', GameSchema);

module.exports = {
  find:(criteria) =>{
    
    const {limit, page, fields, orderBy, sortBy = 1} = criteria;
    const skip = (page > 1) ? (page - 1) * limit :0;

    const query = Game.find(criteria);
    if (q){
     const regex = new RegExp(`.*${q}.*`, 'i')
     const searchQuery = {
      $or: [{title: regex}, {otherTiltles: regex}, {publishers: regex}, {developers: regex}] 
     };
     query.find(searchQuery);

    }
    if(limit) query.limit(limit);
    if(skip) query.skip(skip);
    if(fields) query.select(fields.split(','));
    if(orderBy) query.sort({[orderBy]: sortBy});
    return query.exec();
    },
    store: (data) => {
        const game = new Game(data);
        return game.save();
    },
    update: (id, data, options = {new: true}) =>{
        Game.findOneAndUpdate({_id: id}, data);
    },
    destroy: (id)=>{
        return Game.deleteOne({ _id: id});
    }
};
