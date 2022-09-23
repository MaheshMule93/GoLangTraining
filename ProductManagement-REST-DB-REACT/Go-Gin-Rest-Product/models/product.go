package models

type Product struct {
	ID         uint   `json:"id" gorm:"primary_key"`
	Name       string `json:"name"`
	Quantity   int    `json:"quantity"`
	ExpiryDate string `json:"expiryDate"`
}
