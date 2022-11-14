const sort = (numarray) => {
	numarray.sort(
		(a,b) => {
			return a - b
		});
	return numarray
}

module.exports = sort;
