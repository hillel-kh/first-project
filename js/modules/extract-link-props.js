const extractProps = link => {
	const args = {};

	link.slice(1).split('&')
		.map(s => s.split('='))
		.forEach(p => {
			args[p[0]] = p[1]
		})

	return args;
};

module.exports = extractProps;