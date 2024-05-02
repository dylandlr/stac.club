package main

import (
	"net/http"

	"github.com/dgrijalva/jwt-go"
)

func handler(w http.ResponseWriter, r *http.Request) {
	tokenString := "YourJWTToken"
	myLookupKey := "yourLookupKey" // Define and provide the value for myLookupKey
	token, _ := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		return myLookupKey, nil
	})

	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		user := claims["user"].(string)
		w.Write([]byte("Hello, " + user))
	} else {
		w.WriteHeader(http.StatusUnauthorized)
	}
}

func main() {
	http.HandleFunc("/", handler)
	http.ListenAndServe(":9000", nil)
}
