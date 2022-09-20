package main

import "fmt"

var target int

func checkPair(x int, arr []int) bool {
	for j := x + 1; j < len(arr); j++ {
		if arr[x]+arr[j] == target {
			fmt.Println(x, j)
			return true
		}
	}
	return false
}

func main() {
	arr := []int{4, 2, 3, 6, 5, 8}

	fmt.Println("Array elements: ", arr)
	fmt.Println("Please enter target element: ")
	fmt.Scan(&target)

	for i, _ := range arr {
		if checkPair(i, arr) {
			break
		}
	}
}
