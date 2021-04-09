const {connect} = require('mongoose');
const { options } = require('../routes/games');
const MONGODB_URL = process.env.DATABASE;

module.exports = () => {
    const options={
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModefy: false,
        useUnifiedTopology: true,
    }
    return connect(MONGODB_URL, options);

}