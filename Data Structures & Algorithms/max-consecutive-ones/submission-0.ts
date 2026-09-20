class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let count = 0;
        let max = 0;
        nums.forEach((num) => {
            if (num == 1) {
                count += 1;
            } else {
                if (max < count) {
                    max = count;
                }
                count = 0;
            }
        });
        return Math.max(count, max);
    }
}
