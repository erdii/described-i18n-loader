/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author @erdii
*/

module.exports = function(str) {
	this.cacheable(true);

	const locale = JSON.parse(str);
	const output = {};

	for (let key in locale) {
		const value = locale[key];

		let ref;
		switch (typeof value) {
			case "object":
				ref = value.text;
				break;
			case "string":
			default:
				ref = value;
		}

		output[key] = ref;
	}

	const value = JSON.stringify(output)
		.replace(/\u2028/g, '\\u2028')
		.replace(/\u2029/g, '\\u2029');

	const module = this.version && this.version >= 2
		? `export default ${value};`
		: `module.exports = ${value};`;

	return module;
};
