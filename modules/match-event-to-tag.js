const matchTag = (node, tag) => node.tagName === tag
	? node : (node.parentNode && matchTag(node.parentNode, tag));

module.exports = (event, tag) => matchTag(event.target, tag.toUpperCase());