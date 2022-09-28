package main

import "testing"

func TestLargestValue(t *testing.T) {

	got := LargestValue([]int{2, 3, 1, 6, 8, 10, 3})
	want := 10
	if want != got {
		t.Errorf("got %v want %v", got, want)
	}
}
