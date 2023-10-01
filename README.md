# Random Password Generator

This is a JavaScript program that generates random passwords based on what a user chooses in the provided prompts.
It provides a secure way to create strong passwords for various purposes.

## Table of Contents

- [Introduction](#introduction)
- [Usage](#usage)
- [Features](#features)
- [Code Structure](#code-structure)


## Introduction

AS AN employee with access to sensitiv data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

## Usage

To use the Random Password Generator:

1. Open the provided HTML file in a web browser.
2. Click the "Generate Password" buttonn.
3. Answer all the prompts
## Features

- Allows users to specify the length of the password (between 8 and 128 characters).
- Provides options for including or excluding uppercase letters, lowercase letters, numbers, and special characters.
- Ensures that at least one character type is selected before generating the password.
- Generates random passwords based on the user's criteria.
- Displays the generated password.
## Code Structure

The code is structured as follows:

- Arrays of characters for uppercase, lowercase, numbers, and special characters are defined at the beginning.
- The `generatePassword` function handles the password generation logic.
  - It prompts the user for password criteria and validates user input.
  - It constructs an array of possible characters based on user choices.
  - It generates a random password using the selected characters and retrns it.
- Event listeners are used to trigger the password generation and display the password in the HTML.

