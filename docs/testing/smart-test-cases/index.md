---
layout: doc
title: SMART Test Cases
description: Our approach of writing test cases in a concise, one-sentence format has several potential benefits over traditional test case writing.
head:
  - ['meta', {property: 'og:title', content:  'Smart Test Cases'}]
  - ['meta', {property: 'og:url', content:  'https://tidyqa.com/testing/smart-test-cases/' }] 
  - ['meta', {name: 'twitter:title', content: 'Smart Test Cases'}]
  - ['link', {rel: 'canonical', href: 'https://tidyqa.com/testing/smart-test-cases/'}]
---

# SMART Test Cases

Offers numerous advantages that directly address the challenges we face in testing complex projects effectively. This approach streamlines our testing efforts while maintaining comprehensive coverage of critical functionalities.

## **S**imple

Test cases should be formulated in a way that eliminates unnecessary complexity. Avoid overloading them with excessive details or branching conditions. By keeping them simple and straightforward, testers can quickly comprehend their objectives and requirements without confusion.

> **Craft test cases that are clear and concise**, ensuring ease of understanding in a single sentence.

## **M**easurable

Test cases need to have measurable criteria for success. This means articulating precise expected outcomes that can be objectively evaluated. By establishing measurable criteria, testers can accurately determine whether the test has met its objectives, enhancing the reliability of testing results.

> **Design test cases with quantifiable success criteria**, enabling clear determination of pass or fail outcomes.

## **A**daptable

Test cases should be designed to accommodate a range of scenarios and system setups. This flexibility reduces the need for rewriting or significant adjustments when the test is executed in different contexts. An adaptable test case is an efficient way to achieve consistent and thorough testing.

> **Create test cases that are flexible enough to be applied across various scenarios**, systems, and environments without requiring substantial modifications.

## **R**elevant

Test cases should target the most crucial features and functionalities of the application. This entails identifying areas that directly impact user experience, security, or overall system stability. Focusing on relevance ensures efficient resource allocation and a thorough examination of the most significant aspects of the software.

> **Prioritize test cases that address critical functionality or potential issues**, ensuring that testing efforts are focused on the most impactful areas.

## **T**ransparent

Test cases should be articulated in a clear and accessible manner. This clarity ensures that not only experienced testers but also individuals who are new to the system can understand the test's purpose, expected steps, and anticipated outcomes. Transparency facilitates effective collaboration and knowledge sharing within the testing team.

> **Construct test cases that are easily comprehensible**, even for individuals unfamiliar with the system or application.

---

Incorporating the SMART Test Cases approach into our testing strategy aligns with modern testing trends and will enhance our ability to deliver high-quality software while adapting to project demands. 

We believe this approach will not only save us time and effort but also lead to more effective testing outcomes.

## SMART Example

### 📁 Login Page

::: details Successful Login
1. **When valid username and password are entered**, the user should be successfully logged in and redirected to the dashboard.
2. **Upon successful login**, the user's last login timestamp should be updated.
:::

::: details Invalid Username
1. **Entering a non-existent username** should display an error message indicating "Username not found."
2. **Attempting to log in with an empty username field** should trigger an error message for missing username.
:::

::: details Incorrect Password
1. **Entering a correct username and an incorrect password** should increment the failed login attempt counter.
2. **After a failed login attempt**, the user should see the remaining number of allowed tries before lockout.
:::

::: details Missing Password
1. **Clicking the "Login" button without entering a password** should highlight the password field and display an error message.
2. **Trying to log in with spaces or tabs in the password field** should trigger an error for invalid input.
:::

::: details Username with Special Characters
1. **Logging in with a username that includes a combination of letters, numbers, and special characters** should work as expected.
2. **Verifying that entering the username in uppercase or lowercase** should not impact the login process.
:::

::: details Account Lockout
1. **After a specified number of consecutive failed login attempts**, the account should be locked for a defined period of time (e.g., 15 minutes).
2. **Checking if the account lockout duration** is reset after the lockout period ends.
:::

::: details Already Logged In
1. **Navigating to the login page while already logged in** should redirect the user to the dashboard.
2. **Attempting to log in from the dashboard after being already logged in** should maintain the user's current session.
:::

::: details Disabled Account
1. **Trying to log in with a disabled account** should result in an immediate error message without any failed attempt count.
:::