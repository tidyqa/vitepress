---
layout: doc
title: Testing Login Page
description: Test cases for a login page, covering valid and invalid credentials, security measures, user experience, account locking, concurrent access, and more.
head:
  - ['meta', {property: 'og:title', content:  'Testing Login Page'}]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/testing/login-page/' }] 
  - ['meta', {name: 'twitter:title', content: 'Testing Login Page'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/testing/login-page/'}]
---

# Testing Login Page

Diverse scenarios to validate your login page, encompassing successful and unsuccessful logins, unique situations, security measures, user interaction, and concurrent access. As always, adapt the test cases to suit the specific context and requirements of your application.

## Valid Credentials

- **Enter valid username and valid password:** User successfully logs in and is redirected to the dashboard.
- **Enter valid username and valid password with special characters:** User successfully logs in, and special characters are handled correctly.
- **Enter valid username in uppercase and valid password:** User successfully logs in regardless of username capitalization.

## Invalid Credentials

- **Enter valid username and incorrect password:** User should not be able to log in, and an error message should be displayed.
- **Enter username that doesn't exist and valid password:** User should not be able to log in, and an error message should be displayed.
- **Enter empty username and password:** User should not be able to log in, and field-level error messages should be displayed for both fields.
- **Enter valid username and empty password:** User should not be able to log in, and a field-level error message should be displayed for the password field.
- **Enter username with an invalid format (e.g., no '@') and valid password:** User should not be able to log in, and a field-level error message should be displayed for the username field.
- **Enter valid username and password with less than 8 characters:** User should not be able to log in, and field-level error messages should be displayed for both fields.

## Edge Cases

- **Enter extremely long username and valid password:** System should handle the input without crashing and provide appropriate feedback.
- **Enter valid username and an extremely long password:** System should handle the input without crashing and provide appropriate feedback.
- **Enter valid username and password with leading/trailing spaces:** System should trim spaces and perform a successful login.

## Security

- **Enter valid username and SQL injection attempt as password:** System should prevent SQL injection and deny login, displaying an error message.
- **Enter valid username and XSS attempt as password:** System should prevent XSS attacks and deny login, displaying an error message.

## User Experience

- **Click Login without entering any credentials:** User should not be able to log in, and field-level error messages should be displayed for both fields.
- **Click Login after one failed attempt:** User should not be able to log in, and a message about the account being temporarily locked should be displayed.

## Account Locking

- **Enter valid username and incorrect password multiple times:** After a certain number of attempts, the user's account should be locked, and an appropriate message should be displayed.
- **Attempt to log in using a locked account:** User should not be able to log in, and a message about the account being locked should be displayed.

## Concurrent Access

- **Simultaneously log in from two different devices using the same credentials:** System should handle this scenario gracefully, and both sessions should remain active.
- **Simultaneously log in from two different devices using different credentials:** Both sessions should be successful, and actions in one session should not affect the other.