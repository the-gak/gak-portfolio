---
title: "Params"
description: "Adding more context to API calls."
updated: "2025-09-24"
resourceSlug: "params"
---
Often API calls require more context. Let's say you're making a post call to an endpoint.

```
POST https://api.casualtechster.com/subscribers
```

This would let you add a subscriber to the blog `casualtechster.com`. Practically, the server would need more information to add the subscriber--their name, their email address, and probably a consent for receiving emails.

Params can help provide that context. In this example, the params can be added at the end of the request, like this:

```
POST https://api.casualtechster.com/subscribers?name=Ahilesh&email=owner@casualtechster.com&emailConset=true

```

Similarly, a GET request for the response would have params like filters to retrieve specific subscribers. For example:

```
GET https://api.casualtechster.com/subscribers?name=Ahilesh
```

There are many ways to add params. The example shows *query params*. There are also *header params*, *payload params*, *path params*, and *cookie params*. We'll learn about them later.

Note that the params provided in this chapter are just samples, and not just any param can be added to a request. The endpoint would have been designed to accept only a certain set of params for each method. The list of acceptable params can usually be found in the API documentation. I'm sure you're starting to understand the value of documentating APIs.