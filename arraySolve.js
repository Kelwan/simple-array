



function reverseArray(arr){

var min = 0;
var max = arr.length - 1;
var temp;

var middle = Math.ceil(arr.length / 2);

  for(i = 0; i < middle; i++){
    var temp = arr[min];

    arr[min] = arr[max];
    arr[max] = temp;

    min++;
    max--;

  }

return arr;

}


console.log(reverseArray(["A","B","C","D","E","F","G","H"]));
