import { twoSum } from './twoSums'
interface Case {
  id: number
  input: number[]
  target: number
  output: number[]
}
const cases: Case[] = [
  {
    id: 1,
    input: [3, 3],
    target: 6,
    output: [0, 1],
  },
  {
    id: 2,
    input: [3, 2, 4],
    target: 6,
    output: [1, 2],
  },
  {
    id: 3,
    input: [2, 7, 11, 15],
    target: 9,
    output: [0, 1],
  },
]
describe('check the array for numbers which are equals to the target number when added togather', () => {
  cases.forEach((c) => {
    test(`in [${c.input}] two numbers at index [${c.output}] are equal to ${c.target}`, () => {
      expect(twoSum(c.input, c.target)).toStrictEqual(c.output)
    })
  })
})
