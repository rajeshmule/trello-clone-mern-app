const express = require('express');
const mongoose = require('mongoose');

const apiRouter = require('./routes');

const app = express();

const mongodbURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/trello-clone-mern-app';
mongoose.connect(
  mongodbURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => {
    console.log(`mongodb connected to ${mongodbURL}`);
  }
);


app.use(express.static('dist'));


app.use('/api', apiRouter);

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
