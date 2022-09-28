package main

import "fmt"

func Sum(numbers []int) int {
	sum := 0
	for i := 0; i < len(numbers); i++ {
		sum += numbers[i]
	}
	return sum
}

func SumAll(numbers ...[]int) []int {
	var sum []int
	for _, num := range numbers {
		sum = append(sum, Sum(num))
	}
	return sum
}

func main() {
	var numbers = []int{1, 2, 3, 4, 5}
	fmt.Println("Sum: ", Sum(numbers))
}
