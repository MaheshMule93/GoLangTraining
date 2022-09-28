package iteration

func Repeat(a string) string {
	var appendString string
	for i := 1; i <= 5; i++ {
		appendString += a
	}
	return appendString
}
