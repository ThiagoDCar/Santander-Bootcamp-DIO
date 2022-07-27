function mapComThis(array, thisArg){
    return array.map(function(item){
        return item * this.value;
    }, thisArg);
}

const nums = [1,2];
const maca = {
    value: 2,
};
const laranja={
    value: 3,
};

console.log('This -> maça', mapComThis(nums, maca))
console.log('This -> laranja', mapComThis(nums, laranja))

function mapSemThis(arr){
    arr.map(function(item){
        return item * 2;
    })
}
const num = [2,4,6,8,10];

console.log(num);