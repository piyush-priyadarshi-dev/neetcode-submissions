class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        for (let i = 0 ; i < arr.length; i++) {
            if (i == arr.length -1)  {
                arr[i] = -1
            } else {
            const subarray = arr.slice(i+1)
            const max = Math.max(...subarray)
            arr[i] = max
            }
        }
        return arr
    }
}
