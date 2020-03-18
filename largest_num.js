function findLargestNum(arr) {
  let largest = arr[0]
  arr.forEach(num => {
    if (num > largest) {
      largest = num
    }
  })
  console.log(largest)
}

findLargestNum([4, 5, 1, 3])
findLargestNum([13, 27, 18, 26])
findLargestNum([32, 35, 37, 39])
findLargestNum([1000, 1001, 857, 1])
findLargestNum([27364, 837363, 736736, 73635])
findLargestNum([30, 2, 40, 3])
findLargestNum([0, 1, 0, 0, 1])
