module.exports = function(str) {
	this.cacheable(true);

	const locale = JSON.parse(str);

	for (let key in locale) {
		delete locale[key].desc;
	}

	return `module.exports = ${JSON.stringify(locale, null, "\t")};`;
};
