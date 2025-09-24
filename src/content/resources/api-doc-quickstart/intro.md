---
title: "Introduction to APIs"
description: "A small tutorial to demonstrate how APIs work."
updated: "2025-09-24"
resourceSlug: "intro"
---
Put simply, Application Programming Interfaces (APIs) are a bunch of methods or functions that can help two systems communicate with each other--for example, over the internet. APIs can look a bit intimidating for someone new to programming, but they're very easy to understand.

Let's start with a small example:

1. Go to <https://reqbin.com>.
2. Paste this in the main input box: `https://v2.jokeapi.dev/joke/Programming`
3. Click **Send**.
4. Scroll down a bit, and you'll find a response containing a joke.

Let's break down how this worked.

1. You sent an API request from your browser (the client), to the website `jokeapi.dev` (the server).
2. The server processed your request and sent you a response containing the programming joke you requested.

That is all there is to an API--you send a request, and you receive a response. You might have noticed a dropdown with the option `GET` selected in the website you just used. That is one of the many HTTP methods you can use to make API requests.

In the next section, we'll learn about the different types of HTTP methods you can use.