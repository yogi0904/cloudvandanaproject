var sortArray = [1, 3, 2, 4, 6];

function Descending(sortArray) {
    var len = sortArray.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (sortArray[j] < sortArray[j + 1]) {

                var temp = sortArray[j];
                sortArray[j] = sortArray[j + 1];
                sortArray[j + 1] = temp;
            }
        }
    }
    return sortArray;
}

var sorte = Descending(sortArray);
console.log(sorte);