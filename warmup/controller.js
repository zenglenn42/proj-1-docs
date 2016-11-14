// Example endpoint queryUrl:
//
// https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=0f04f96b81ec4a7d92d9e017b07261b0&q=javascript



$("#runSearch").on("click", searchCallback);

function searchCallback() {

/*
	var searchTerm = "enigma";
	var startYear =  "1945";	// begin_date = YYYYMMDD
	var endYear = "1952";		// end_date = YYYYMMDD
	var numRecords = 5;
*/
	searchTerm = $("#searchTerm").val();
	startYear = $("#startYear").val();
	endYear = $("#endYear").val();
	numRecords = $("numRecords").val();

	console.log(searchTerm);

	// Built by LucyBot. www.lucybot.com
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
					'api-key': "0f04f96b81ec4a7d92d9e017b07261b0",
					'begin_date': startYear + "0101",
					'end_date': endYear + "0101",
					'q': searchTerm
						});
	$.ajax({
		url: url,
		method: 'GET',
	}).done(function(result) {
		// This is where we parse down the search results.
		$("#searchResults").text(JSON.stringify(result));
		console.log(result);
	}).fail(function(err) {
		throw err;
	});
	return false;
}

function clearCallback() {
	// This function should clear out the html elements that
	// have presentation data.
}

searchCallback();