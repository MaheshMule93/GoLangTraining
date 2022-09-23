package main

import (
	"fmt"
	"log"

	"mime/multipart"
	"net/http"
	"path/filepath"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

type Employee struct {
	Name        string `form:"name"`
	Designation string `form:"designation"`
}

type BindFile struct {
	Name  string                `form:"name" binding:"required"`
	Email string                `form:"email" binding:"required"`
	File  *multipart.FileHeader `form:"file" binding:"required"`
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
	r.Use(static.Serve("/", static.LocalFile("./views", true)))
	r.POST("/home", startPage)

	r.POST("/upload", func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, DELETE")
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		var bindFile BindFile
		fmt.Println(" inside upload....")
		// Bind file
		if err := c.ShouldBind(&bindFile); err != nil {
			c.String(http.StatusBadRequest, fmt.Sprintf("err: %s", err.Error()))
			return
		}

		// Save uploaded file
		file := bindFile.File
		dst := filepath.Base(file.Filename)
		if err := c.SaveUploadedFile(file, dst); err != nil {
			c.String(http.StatusBadRequest, fmt.Sprintf("upload file err: %s", err.Error()))
			return
		}

		c.String(http.StatusOK, fmt.Sprintf("File %s uploaded successfully with fields name=%s and email=%s.", file.Filename, bindFile.Name, bindFile.Email))
	})

	r.Run("localhost:8081")
}
