'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const Index = require('./routers/index');
const Trends = require('./routers/trends');
const Timeline = require('./routers/timeline');
const Search = require('./routers/search');
const Tweet = require('./routers/tweet');
const Facebook = require('./routers/facebook');

app.use(bodyParser.urlencoded( { extended: true } ));
app.use(bodyParser.json());

app.use('/', Index);
app.use('/trends', Trends);
app.use('/timeline', Timeline);
app.use('/search', Search);
app.use('/tweet', Tweet);
app.use('/facebook', Facebook);

app.listen(process.env.PORT || 8081);
