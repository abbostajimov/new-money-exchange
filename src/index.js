// PLEASE DON'T change function name

																					//101
module.exports = function makeExchange(currency) {

	if (currency >= 10000) {
		return {
			error: "You are rich, my friend! We don't have so much coins for exchange"
		}
	}
	var H = 50;
	var Q = 25;
	var D = 10;
	var N = 5;
	var P = 1;
	var obj = {};
	if (currency >= H) {
		var res = Math.floor(currency / H);
		obj.H = res;
		currency -= res * H 
	};
	if (currency >= Q) {
		var res = Math.floor(currency / Q);
		obj.Q = res;
		currency -= res * Q
	};
	if (currency >= D) {
		var res = Math.floor(currency / D);
		obj.D = res;
		currency -= res * D
	};
	if (currency >= N) {
		var res = Math.floor(currency / N);
		obj.N = res;
		currency -= res * N
	};
	if (currency >= P) {
		var res = Math.floor(currency / P);
		obj.P = res;
		currency -= res * P
	};
	return obj;	
}

