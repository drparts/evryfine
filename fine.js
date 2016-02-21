//communicate with twitter

var Twit = require('twit');

var T = new Twit({ 
	consumer_key: 'P4o1JcW5a5UVBCJVhdWdNK5xs' , 
	consumer_secret: 'VU8BAhb7knmqqEMlFHQNhFbmp7kRbD0ZA9xcHmCthx7s9wGMAZ' , 
	access_token: '4928518697-qmx3ysSLcCpqCiYqAQKKpaLuW4QqKgXkttQelVU' , 
	access_token_secret: 'Zdm4ZFLN9M28hwaslrYNlySNONpj48DSeQJMr7ep9XmNQ' });

//  tweet 'everything is fine' 
function tweetfine() {
T.post('statuses/update', { status: 'everything is fine' }, function(err, data, response) {
  console.log(data)
})}

//set interval in milliseconds
tweetfine();
setInterval(tweetfine, 3601000*12);