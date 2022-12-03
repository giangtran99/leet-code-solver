var twoSum = function (nums, target) {
    let obj = {}

    for (let i = 0; i < nums.length; i++) {
        let k = obj[target - nums[i]]?.[0]

        obj[nums[i]] = [i, k]
        if (i + 1 && k + 1) {
            return [i, k]
        }

    }
};

