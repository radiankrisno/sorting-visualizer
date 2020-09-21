//BUBBLE SORT ALGORITHM 
export function BubbleSortAnimations(array) {
    const animations = [];
    if(array.length <= 1) return array;
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length-i-1; j++){
            animations.push([j, j+1]);
            animations.push([j, j+1]);
            if(array[j] > array[j+1]){
                animations.push([j, array[j+1]]);
                animations.push([j+1, array[j]]);
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            } else{
                animations.push([j, array[j]]);
                animations.push([j+1, array[j+1]]);
            }
        }
    }
    return animations;
}

//SELECTION SORT ALGORITHM
export function SelectionSortAnimations(array) {
    const animations = [];
    if(array.length <= 1) return array;
    for(let i = 0; i < array.length; i++){
        let temp = array.length-i-1;
        for(let j = 0; j < array.length-i-1; j++){
            animations.push([true, j, temp])
            animations.push([true, j, temp])
            if(array[j] > array[temp]){
                temp = j;
            }
        }
        animations.push([false, temp, array[array.length-i-1]]);
        animations.push([false, array.length-i-1, array[temp]]);
        let temp2 = array[temp];
        array[temp] = array[array.length-i-1];
        array[array.length-i-1] = temp2;
    }
    return animations;
}

//INSERTION SORT ALGORITHM
export function InsertionSortAnimations(array) {
    const animations = [];
    if(array.length <= 1) return array;
    let temp, j, temp2;
    for(let i = 1; i < array.length; i++){
        temp = i;
        j = i - 1;
        while(array[temp] < array[j] && j >= 0){
            animations.push([true, temp, j]);
            animations.push([true, temp, j]);
            animations.push([false, temp, array[j]]);
            animations.push([false, j, array[temp]]);
            temp2 = array[j];
            array[j] = array[temp];
            array[temp] = temp2;
            temp--;
            j--;
        }
    }
    return animations;
}

//QUICK SORT ALGORITHM
export function QuickSortAnimations(array){
    const animations = [];
    if (array.length <= 1) return array;
    let f = 0, l = array.length-1;
    Quick_Sort(array, f, l, animations);
    return animations;
}

function Quick_Sort(arr, f, l, animations){
    if(f >= l){
        return;
    }
    let pos = Partition(arr, f, l, animations);
    Quick_Sort(arr, f, pos-1, animations);
    Quick_Sort(arr, pos+1, l, animations);
}

function Partition(arr, f, l, animations){
    let i = f, pos = f, j = l, temp;
    while(true){
        while(arr[pos] <= arr[j]){
            animations.push([true, pos, j]);
            animations.push([true, pos, j]);
            j--;
            if(pos === j){
                return pos;
            }
        }
        animations.push([false, j, arr[pos]]);
        animations.push([false, pos, arr[j]]);
        temp = arr[pos];
        arr[pos] = arr[j];
        arr[j] = temp;
        pos = j;
        while(arr[pos] >= arr[i]){
            animations.push([true, pos, i]);
            animations.push([true, pos, i]);
            i++;
            if(pos === i){
                return pos;
            }
        }
        animations.push([false, i, arr[pos]]);
        animations.push([false, pos, arr[i]]);
        temp = arr[pos];
        arr[pos] = arr[i];
        arr[i] = temp;
        pos = i;
    }
}

//MERGE SORT ALGORITHM
export function MergeSortAnimations(array) {
    const animations = [];
    if(array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}
  
function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}
  
function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
        animations.push([i, j]);
        animations.push([i, j]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
      }
    while (i <= middleIdx) {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
  }

