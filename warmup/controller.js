// Example endpoint queryUrl:
//
// https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=0f04f96b81ec4a7d92d9e017b07261b0&q=javascript

console.log("hello");
var searchTerm = "enigma";

function searchCallback() {
	// Built by LucyBot. www.lucybot.com
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
					'api-key': "0f04f96b81ec4a7d92d9e017b07261b0",
					'q': searchTerm
						});
	$.ajax({
		url: url,
		method: 'GET',
	}).done(function(result) {
		// This is where we parse down the search results.
		console.log(result);
	}).fail(function(err) {
		throw err;
	});
}

searchCallback();