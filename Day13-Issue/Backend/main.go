package main

import (
	"log"

	"github.com/gin-gonic/gin"
)

type Employee struct {
	Name        string `form:"name"`
	Designation string `form:"designation"`
}

func startPage(c *gin.Context) {
	c.Writer.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, DELETE")
	c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
	var employee Employee
	if c.ShouldBind(&employee) == nil {
		log.Println(employee.Name)
		log.Println(employee.Designation)
	}
	log.Println(employee)
	c.String(200, "Success")
}

func main() {
	r := gin.Default()
	r.POST("/home", startPage)
	r.Run("localhost:8081")
}
