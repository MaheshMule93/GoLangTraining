package main

import (
	"fmt"
	"time"
)

func printNumber() {
	for i := 1; i <= 26; i++ {
		time.Sleep(240 * time.Millisecond)
		fmt.Printf("%d", i)
	}
}
func printAlphabets() {
	for i := 'A'; i <= 'Z'; i++ {
		time.Sleep(245 * time.Millisecond)
		fmt.Printf("%c ", i)
	}
}

func main() {
	fmt.Println("Starting....")
	go printNumber()
	go printAlphabets()
	time.Sleep(30000 * time.Millisecond)
	fmt.Println("Ending......")
}
