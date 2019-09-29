const fromEntries = (iterable) => [...iterable].reduce((obj, [key, val]) => (
	{ ...obj, [key]: val }
), {});

const entries = (obj) => {
	const ownProps = Object.keys(obj);
	let i = ownProps.length;
	const resArray = new Array(i);
	while (i) {
		i -= 1;
		resArray[i] = [ownProps[i], obj[ownProps[i]]];
	}
	return resArray;
};

const markedWithPrefix = ([name]) => name.slice(0, 1) === '_';
const removePrefix = ([name, value]) => [name.slice(1), value];

const get = (obj, path, defaultValue) => {
	const result = String.prototype.split.call(path, /[,[\].]+?/)
		.filter(Boolean)
		.reduce((res, key) => ((res !== null && res !== undefined) ? res[key] : res), obj);
	return (result === undefined || result === obj) ? defaultValue : result;
};

const lookupInTheme = theme => ([name, value]) => {
	if (!theme) {
		return [name, value];
	}
	return [name, get(theme, value, value)];
};

export {
	fromEntries,
	entries,
	markedWithPrefix,
	removePrefix,
	lookupInTheme,
};
