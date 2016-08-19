'use strict';

function HeaderParser () {
    var forwardedKey = "x-forwarded-for";
    var userAgentKey = "user-agent";
    var softwareRegex = /\((.*?)\)/g;
    
	this.parse = function (req) {
        return {
            ipaddress: getIp(req),
            language: getLanguage(req),
            software: getSoftware(req)
        };
	};
	
	function getIp(req) {
	    return req.get(forwardedKey);
	}
	
	function getLanguage(req) {
	    return req.acceptsLanguages()[0];
	}
	
	function getSoftware(req) {
	    var userAgent = req.headers[userAgentKey];
        var maches = softwareRegex.exec(userAgent);
        var software = maches[0].split('(')[1].split(')')[0];
        return software;
	}
}

module.exports = HeaderParser;