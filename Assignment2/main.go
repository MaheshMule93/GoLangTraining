package main

import "fmt"

//Addition of two intergers without using arithmwtic operators

var n1, n2 uint
var c uint

func main() {
	fmt.Println("Enter two integer numbers")
	fmt.Scan(&n1, &n2)
	for n2 != 0 {
		c = n1 & n2
		fmt.Println("c: ", c)
		n1 = n1 ^ n2
		fmt.Println("n1: ", n1)
		n2 = c << 1
		fmt.Println("n2: ", n2)
	}
	fmt.Println(n1)

}
