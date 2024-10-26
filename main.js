function bubbleSort(arr) {
    
    let n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        
        for (let j = 0; j < n - i - 1; j++) {
            
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    
    return arr;
}

const sortedArray = bubbleSort([12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]);

console.log(sortedArray);
