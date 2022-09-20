package main

import (
	"fmt"
	"strconv"
)

var n1 int64

// Number of 1's in a number

func main() {
	fmt.Println("Enter integer numbers")
	fmt.Scan(&n1)
	count := 0
	a := strconv.FormatInt(n1, 2)
	for i, _ := range a {
		if a[i] == 49 {
			count++
		}
	}
	fmt.Println("No of 1's in number: ", count)
}
