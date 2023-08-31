
export function twoSum(nums: number[], target: number): number[] {
  let indextofind!: number | null
  let indexofnums: number[] = []
  let sum!: number
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      sum = nums[i] + nums[j]
      if (sum == target && nums[i] !== nums[j]) {
        indextofind = nums.indexOf(nums[i])
        indexofnums.push(indextofind)
        indextofind = nums.indexOf(nums[j])
        indexofnums.push(indextofind)
        indextofind = null
        break
      }
    }
    if (sum == target) {
      break
    }
  }
  return indexofnums
}


