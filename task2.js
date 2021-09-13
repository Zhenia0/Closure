let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b){
    return function(buf){
        return buf >= a && buf <=b;
    }
}

function inArray(arr){
    return function(buf){
        return arr.includes(buf);
    }
}

console.log(arr.filter(inBetween(3,6)));
console.log(arr.filter(inArray([1, 5, 15])));