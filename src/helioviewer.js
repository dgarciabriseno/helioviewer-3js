/**
 * Returns the full API url for the given endpoint name
 */
function get_url_for_api(endpoint) {
	return "https://api.helioviewer.org/v2/" + endpoint + "/";
}

/**
 * Converts a json object into url parameters
 */
function serialize(parameters) {
	if (parameters) {
		let keys = Object.keys(parameters);
		if (keys.length > 0) {
			// Iterate over they key value pairs and construct the key=value association.
			let url_params = "";
			for (const key of keys) {
				// Insert & between each element
				if (url_params != "") {
					url_params += "&";
				}
				url_params += key;
				url_params += "=";
				url_params += parameters[key];
			}
			return url_params;
		} else {
			// Return nothing for an empty object
			return "";
		}
	} else {
	// Nothing to do if there's no input
	return "";
	}
}

/**
 * Generic get request. Returns the result via promises
 */
async function get(url, parameters) {
	var r = new XMLHttpRequest();
	// Append query string to url
	let args = serialize(parameters);
	if (args) {
		url += "?" + args;
	}
	r.open("GET", url, true);
	r.onreadystatechange = function () {
		if (r.readyState == 4 && r.status != 200) {
			console.log(r);
			alert("Error with API request");
		}
		if (r.readyState == 4 && r.status == 200) {
			return r.responseText;
		}
	};
	r.send();
}

async function getJP2Image(date, sourceId) {
	let endpoint = get_url_for_api("getJP2Image");
	let result = get(endpoint, {"date": date, "sourceId": sourceId});
}

function getJP2ImageUrl(date, sourceId) {
	let endpoint = get_url_for_api("getJP2Image");
	// Append query string to url
	let args = serialize({
		date: date,
		sourceId: sourceId
	});
	if (args) {
		endpoint += "?" + args;
	}
	return endpoint;
}

export { getJP2ImageUrl };

