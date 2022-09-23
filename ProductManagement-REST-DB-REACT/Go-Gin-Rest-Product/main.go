package main

import (
	"Product/controllers"
	"Product/models"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// Connect to database
	models.ConnectDatabase()

	// Routes
	r.GET("/products", controllers.GetAllProducts)
	r.GET("/products/:id", controllers.FindProduct)
	r.POST("/addProduct", controllers.CreateProducts)
	r.PUT("/product/:id", controllers.UpdateProducts)
	r.DELETE("/product/:id", controllers.DeleteProduct)

	// Run the server
	r.Run("localhost:8080")
}
