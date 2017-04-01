module.exports = function(str) {
	this.cacheable(true);

	const locale = JSON.parse(str);

	for (let key in locale) {
		delete locale[key].desc;
	}

	const value = JSON.stringify(locale)
		.replace(/\u2028/g, '\\u2028')
		.replace(/\u2029/g, '\\u2029');

	const module = this.version && this.version >= 2
		? `export default ${value};`
		: `module.exports = ${value};`;

	return module;
};
