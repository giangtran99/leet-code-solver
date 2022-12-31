/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// let nums1 = [-1,0,0,3,3,3,0,0,0], m = 6, nums2 = [1,2,2], n = 3
// let nums1 = [1,2,3,0,0,0], m =3, nums2 = [2,5,6] , n =3
let nums1 = [-1,3,0,0,0,0,0], m =2, nums2 = [0,0,1,2,3], n =5


var merge = function (nums1, m, nums2, n) {
    for(let c = m;c< m +n ;c++){
        nums1[c] = null
    }
    console.log({nums1})

    for (let j = 0; j < n; j++) {
        for (let i = 0; i < m + n; i++) {
            if (nums2[j] <= nums1[i]) {
                for (let k = m + n - 1; k !== i ; k--) {
                    nums1[k] = nums1[k - 1]
                }
                nums1[i] = nums2[j]
                break
            }
            

            if (nums1[i] === null && i >= m) {
                nums1[i] = nums2[j]
                break
            }

        }

    }
    return nums1


};
console.log(merge(nums1,m,nums2,n))


// const nums3 = [-1,0,0,3,3,3,0,0,0]
// const m = 4
// const n = 5
// const change = (nums1,m,n)=>{
//     for (let l = 0; l < m; l++) {
//         for (let p = m ; p < m + n; p++) {
//             if(nums1[l] === 0 &&  nums1[p] !== 0){
//                 nums1[l] = nums1[p]
//                 nums1[p] = 0
//             }
//         }
//     }
//     return nums1
// }

// console.log(change(nums3,m,n))