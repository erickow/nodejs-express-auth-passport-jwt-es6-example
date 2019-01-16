import mongoose from 'mongoose';
import constants from './constants';

// Removes the warning with promises 
mongoose.Promise = global.Promise;

// Connect the db with the url provided 
try {
  mongoose.set('useCreateIndex', true)
  mongoose.connect(constants.MONGO_URL)
} catch (err) {
  mongoose.createConnection(constants.MONGO_URL)
}
mongoose.connection.once('open', () => console.log('MongoDB Running')).on('error', e => {
  throw e;
});
