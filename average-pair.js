// add whatever parameters you deem necessary
function averagePair(nums, avg) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const currentAvg = (nums[left] + nums[right]) / 2; // Calculate average

        if (currentAvg === avg) {
            return true;
        } else if (currentAvg < avg) {
            left++; // Move left pointer to increase the average
        } else {
            right--; // Move right pointer to decrease the average
        }
    }

    return false;
}
