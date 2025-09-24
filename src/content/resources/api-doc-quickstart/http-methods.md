---
title: "HTTP Methods"
description: "Introduction to HTTP methods that can be used in API requests."
updated: "2025-09-24"
resourceSlug: "http-methods"
---
In our previous example, we used a GET call to retrieve information. But a single endpoint can perform multiple actions based on the method used, so API calls made to an endpoint can do more than retrieve information. That's why the server needs to know your intention when you're communicating with it.

This is where HTTP methods come in. Let's take a look at some of them with an example. Consider this sample endpoint:

```
https://api.casualtechster.com/subscribers
```

This is how the endpoint would respond to some of the most common methods:

* **GET** - This method is used to retrieve information. Our sample endpoint would respond with a list of all the subscribers of the blog when this method is used.
* **POST** - This method is used to send information. Our sample endpoint would create add a new subscriber when this method is used, and respond with a success message.
* **PUT** - This method is used to update information. Our sample endpoint would update a subscriber's information (like email address) when this method is used.
* **DELETE** - This method is used to delete information. Our sample endpoint would delete a subscriber when this method is used.

API documentations usually treat each method-endpoint combo as a separate API for clarity. We'll learn more about that at a later point.

There are other methods that are used in specific situations. If you're interested, you can [learn more about them](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods).