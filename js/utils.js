(function () {
    function isVar(variable) {
        return typeof variable !== "undefined"
    }

    function has(object, key) {
		return object ? hasOwnProperty.call(object, key) : false;
	}

    function shuffleArray(arr) {
	    let j, x, i;
	    for (i = arr.length - 1; i > 0; i--) {
	        j = Math.floor(Math.random() * (i + 1));
	        x = arr[i];
	        arr[i] = arr[j];
	        arr[j] = x;
	    }
		return arr;
	}

    window.g_utils = {
        isVar: isVar,
        has: has,
        shuffleArray: shuffleArray,
    };
})();