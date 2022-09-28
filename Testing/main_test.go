package main

import (
	"reflect"
	"testing"
)

func TestSum(t *testing.T) {
	numbers := []int{1, 2, 3, 4, 5}
	got := Sum(numbers)
	want := 15
	if want != got {
		t.Errorf("got %v want %v", got, want)
	}
}

func TestSumAll(t *testing.T) {

	got := SumAll([]int{1, 2}, []int{0, 9}, []int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
	want := []int{3, 9, 55}

	if !reflect.DeepEqual(got, want) {
		t.Errorf("got %v want %v", got, want)
	}
}
