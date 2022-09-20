package main

import (
	"encoding/json"
	"fmt"
	"os"
)

type User struct {
	Id       int64
	Password int64
	Name     string
	Balance  float64
}

type Users struct {
	Users []User `json:"users"`
}

var selectedOption string
var userId int64
var password int64
var loggedUser User

func login() {
	var option string
	var bal float64 = 0
	var userData Users
	if loggedUser.Id < 1 {

		fmt.Println("Please enter your user id: ")
		fmt.Scan(&userId)
		fmt.Println("Please enter your password: ")
		fmt.Scan(&password)
		user := User{Id: userId, Password: password}

		f, err := os.Open("user.json")
		if err != nil {
			fmt.Println("Error while validating user")
		}
		defer f.Close()

		err = json.NewDecoder(f).Decode(&userData)
		if err != nil {
			fmt.Println("Error in reading file")
		}
		var isValid bool = false

		for i, _ := range userData.Users {
			if userData.Users[i].Id == user.Id && userData.Users[i].Password == user.Password {
				loggedUser = userData.Users[i]
				isValid = true
			}
		}
		if isValid {
			fmt.Println("User authenticated successfully...")
			fmt.Println("1.Withdraw money.\n2.Deposit money.\n3.Request balance.\n4.Quit the program.")
			fmt.Scan(&option)
		} else {
			fmt.Println("\nIncorrect UserId or Password \n")
			main()
		}
	}
	switch option {
	case "1":
		fmt.Println("Please enter amount to withdraw money")
		fmt.Scan(&bal)
		loggedUser.Balance -= bal
		for i, _ := range userData.Users {
			if userData.Users[i].Id == loggedUser.Id {
				userData.Users[i].Balance = loggedUser.Balance
			}
		}
		content, _ := json.Marshal(userData)
		//fmt.Println(string(content))
		os.WriteFile("user.json", content, 0644)
		bal = 0
		login()
	case "2":
		fmt.Println("Please enter amount to deposit money: ")
		fmt.Scan(&bal)
		loggedUser.Balance += bal
		for i, _ := range userData.Users {
			if userData.Users[i].Id == loggedUser.Id {
				userData.Users[i].Balance = loggedUser.Balance
			}
		}
		content, _ := json.Marshal(userData)
		//fmt.Println(string(content))
		os.WriteFile("user.json", content, 0644)
		bal = 0
		login()
	case "3":
		fmt.Println("Your Balance: ", loggedUser.Balance)
		login()
	case "4":
		fmt.Println("exiting...")
		os.Exit(3)
	}
}

func createAccount() {
	newUser := User{}
	fmt.Println("Please enter userId:")
	fmt.Scan(&newUser.Id)
	fmt.Println("Please enter password:")
	fmt.Scan(&newUser.Password)
	fmt.Println("Please enter name:")
	fmt.Scan(&newUser.Name)
	newUser.Balance = 100
	fmt.Println("User Created..", newUser)

	f, err := os.Open("user.json")
	if err != nil {
		fmt.Println("Error while validating user")
	}
	defer f.Close()

	var userData Users
	err = json.NewDecoder(f).Decode(&userData)
	if err != nil {
		fmt.Println("Error in reading file")
	}
	userData.Users = append(userData.Users, newUser)
	content, _ := json.Marshal(userData)
	fmt.Println(string(content))
	os.WriteFile("user.json", content, 0644)
}

func main() {
	fmt.Println("Hi! Welcome to Mr. Mahesh ATM Machine! \n\nPlease select an option from the menu below: ")
	fmt.Println("\nl -> Login \nc -> Create New Account \nq -> Quit")
	fmt.Scan(&selectedOption)
	fmt.Println("You have selected: ", selectedOption)

	switch selectedOption {
	case "l":
		login()

	case "c":
		createAccount()
	case "q":
		os.Exit(3)
	default:
		fmt.Println("Please enter valid option\n")
		main()
	}

}
