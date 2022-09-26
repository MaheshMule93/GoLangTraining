package main

import (
	"bufio"
	"fmt"
	"io"
	"net"
	"time"
)

var port = "0.0.0.0:9001"

func EchoMessage(conn net.Conn) {
	r := bufio.NewReader(conn)

	for {
		message, err := r.ReadBytes(byte('\n'))
		switch err {
		case nil:
			break
		case io.EOF:
		default:
			fmt.Println("Error", err)
		}

		conn.Write([]byte("From Server: "))
		t := time.Now()
		conn.Write([]byte(t.String()))
		conn.Write(message)
		fmt.Println("Message:  ", string(message))
	}
}

var counter = 0
var clientList []string

func main() {
	fmt.Println(" strating server...")
	ln, err := net.Listen("tcp", port)

	for {
		conn, _ := ln.Accept()
		isPresent := false
		for _, v := range clientList {
			if v == conn.RemoteAddr().String() {

				isPresent = true
				break
			}
		}
		if isPresent == false {
			counter += 1
			clientList = append(clientList, conn.RemoteAddr().String())
		}

		fmt.Println(" Connected Client : ", conn.RemoteAddr())
		fmt.Println(" Number of Clients Connected : ", counter)
		if err != nil {
			fmt.Print(" Error", err)
			continue
		}
		go EchoMessage(conn)
	}
}
