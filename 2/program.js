function findPairWithSum(nums, target) {
    const seen = new Set();
    
    for (const num of nums) {
        const complement = target - num;
        
        if (seen.has(complement)) {
            console.log(`Pair found (${complement}, ${num})`);
            return;
        }
        
        seen.add(num);
    }
    
    console.log("Pair not found.");
}

const nums1 = [8, 7, 2, 5, 3, 1];
const target1 = 10;
findPairWithSum(nums1, target1);

const nums2 = [5, 2, 6, 8, 1, 9];
const target2 = 12;
findPairWithSum(nums2, target2);
