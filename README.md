# Password Strength Checker v1

A simple web application that analyses password strength based on common security rules. Built to practise JavaScript DOM manipulation and input validation.

## About

This project was built as part of my web portfolio to practise my JavaScript skills and gain experience building interactive browser applications without external frameworks.


## Features

- Live password strength checking
- Detects:
	- Minimum length
	- Uppercase letters
	- Lowercase letters
	- Numbers
	- Special characters
- Colour-coded strength indicator
- Responsive layout

## Screenshot

![Password Strength Checker](images/screenshot.png)

## Languages Used

![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

## Installation

Clone the repository:

```bash
git clone https://github.com/HexHunter-Dev/password-strength-checker.git
```

Open `index.html` in your browser.

## Usage

1. Type a password.
2. The application evaluates its strength.
3. Missing requirements are highlighted.

## Limitations

This project estimates password strength using predefined rules. It does not calculate true password entropy or check against leaked password databases.

## Future Improvements

- Password entropy calculation
- Have I Been Pwned API integration
- Password generator
- Theme switching (Light mode ↔ Dark mode)
- Accessibility Improvements
- UI/UX improvements

## What I learned

This project helped me practise:
	
- DOM manipulation
- Event listeners
- String validation
- Regular expressions
- Writing maintainable JavaScript

## License
MIT
