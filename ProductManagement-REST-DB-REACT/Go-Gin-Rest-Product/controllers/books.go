package controllers

import (
	"fmt"
	"net/http"

	"Product/models"

	"github.com/gin-gonic/gin"
)

type CreateProduct struct {
	Name       string `json:"name" binding:"required"`
	Quantity   int    `json:"quantity" binding:"required"`
	ExpiryDate string `json:"expiryDate" binding:"required"`
}

type UpdateProduct struct {
	Name       string `json:"name"`
	Quantity   int    `json:"quantity"`
	ExpiryDate string `json:"expiryDate"`
}

// GET /products
// Find all products
func GetAllProducts(c *gin.Context) {
	c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
	var products []models.Product
	models.DB.Find(&products)

	c.JSON(http.StatusOK, gin.H{"data": products})
}

// GET /products/:id
func FindProduct(c *gin.Context) {
	// Get model if exist
	c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
	var product models.Product
	if err := models.DB.Where("id = ?", c.Param("id")).First(&product).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Product not found!"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": product})
}

// POST /addProduct
// Create new product
func CreateProducts(c *gin.Context) {
	// Validate input
	c.Writer.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
	c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
	var input CreateProduct
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Create book
	product := models.Product{Name: input.Name, Quantity: input.Quantity, ExpiryDate: input.ExpiryDate}
	models.DB.Create(&product)

	c.JSON(http.StatusOK, gin.H{"data": product})
}

// PUT /products/:id
func UpdateProducts(c *gin.Context) {
	// Get model if exist
	c.Writer.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	c.Writer.Header().Set("Access-Control-Allow-Methods", "PUT")
	c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
	fmt.Println("update----", c)
	var product models.Product
	if err := models.DB.Where("id = ?", c.Param("id")).First(&product).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Record not found!"})
		return
	}

	// Validate input
	var input UpdateProduct
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	data := models.Product{Name: input.Name, Quantity: input.Quantity, ExpiryDate: input.ExpiryDate}

	if err := models.DB.Model(&product).Updates(&data).Error; err != nil {

		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})

	}
	//models.DB.Model(&product).Updates(input)

	c.JSON(http.StatusOK, gin.H{"data": product})
}

// DELETE /books/:id
// Delete a book
func DeleteProduct(c *gin.Context) {
	// Get model if exist
	c.Writer.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, DELETE")
	c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
	var product models.Product
	if err := models.DB.Where("id = ?", c.Param("id")).First(&product).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Record not found!"})
		return
	}

	models.DB.Delete(&product)

	c.JSON(http.StatusOK, gin.H{"data": true})
}
