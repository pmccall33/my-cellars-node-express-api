// require('./db/db.js');
const PORT            = process.env.PORT || 8080;
const express         = require('express');
const app             = express();
const bodyParser      = require('body-parser');
const methodOverride  = require('method-override');
const googleTrends = require('google-trends-api');

// app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(methodOverride('_method'));


app.post('/trends', (req, res, next) => {
  try {
  		console.log("----------------------------req.body in /trends--------------------------------")
  		console.log(req.body);
  		const keyword_one = req.body.keyword_one;
  		const keyword_two = req.body.keyword_two;
  		const keyword_three = req.body.keyword_three;
		googleTrends.interestOverTime({keyword: keyword_three})
		.then(function(results){
		  results = JSON.parse(results)
  		  console.log("----------------------------results in /trends/winemaker--------------------------------")
		  console.log(results);
		  res.json(results)
		})
		.catch(function(err){
		  console.error(err);
		});
       
  } catch (err) {
    next(err);
  }
});

app.post('/trends/winemaker', (req, res, next) => {
  try {
  		console.log("----------------------------req.body in /trends/winemaker--------------------------------")
  		console.log(req.body);
  		const keyword_one = req.body.keyword_one;
  		const keyword_two = req.body.keyword_two;
  		const keyword_three = req.body.keyword_three;
		googleTrends.interestOverTime({keyword: keyword_one})
		.then(function(results){
		  results = JSON.parse(results)
  		  console.log("----------------------------results in /trends/winemaker--------------------------------")
		  console.log(results);
		  res.json(results)
		})
		.catch(function(err){
		  console.error(err);
		});
       
  } catch (err) {
    next(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server now running on ${PORT}`);
});