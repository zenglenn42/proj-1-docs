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

	// Sanity lmit numRecords

	numRecords = (numRecords === undefined) ? 1 : Math.min(10, numRecords);

	console.log(searchTerm);
	console.log(startYear);
	console.log(stopYear);
	console.log(numRecords);

	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
					'api-key': "0f04f96b81ec4a7d92d9e017b07261b0",
					'begin_date': startYear + "0101",
					'end_date': endYear + "0101",
					'q': searchTerm
						});
	console.log("url: " + url);

	$.ajax({
		url: url,
		method: 'GET',
	}).done(function(result) {
		processJSON(response, numRecords);
		$("#searchResults").text(JSON.stringify(result));
	}).fail(function(err) {
		throw err;
	});
	return false;
}

function processJSON(theJSON, numRecords) {
	for (var i = 0; i < numRecords; i++) {
		var prefix = theJSON.response.docs[i];
		var title = prefix.headline.main;
		var author = prefix.byline.person.firstname + " " + prefix.byline.person.lastname;
		var section = prefix.section_name;
		var pubDate = prefix.pub_date;
		var link = theJSON.response.docs[i].web_url;
		console.log(prefix);
		console.log(title);
		console.log(author);
		console.log(section);
		console.log(pubDate);
		console.log(line);
	}
	return false;
}