class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        let k = nums.length;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == val) {
                nums.splice(i, 1);
                i--
                nums.push(-1);
                k--;
            }
        }
        return k;
        
    }
}
