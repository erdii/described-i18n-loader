/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author @erdii
*/

function descendIntoObject(target) {
	const output = {};

	for (let key in target) {
		const value = target[key];

		let ref;

		switch (typeof value) {
			case "object":
				if (value.text) {
					ref = value.text;
				} else {
					ref = descendIntoObject(value);
				}
				break;
			case "string":
			default:
				ref = value;
		}

		output[key] = ref;
	}

	return output;
}

module.exports = function(str) {
	this.cacheable(true);

	const locale = JSON.parse(str);
	const output = descendIntoObject(locale);

	const value = JSON.stringify(output)
		.replace(/\u2028/g, '\\u2028')
		.replace(/\u2029/g, '\\u2029');

	const module = this.version && this.version >= 2
		? `export default ${value};`
		: `module.exports = ${value};`;

	return module;
};
