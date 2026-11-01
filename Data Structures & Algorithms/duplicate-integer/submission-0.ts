class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const uniqueItems = new Set();
        for (const num of nums) {
            if (uniqueItems.has(num)) {
                return true;
            } else {
                uniqueItems.add(num);
            }
        }
        return false;
    }
}
