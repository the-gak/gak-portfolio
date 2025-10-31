---
title: "Authentication and Authorization"
description: "Identifying yourself to the server when you make an API call."
updated: "2025-09-25"
resourceSlug: "authentication-authorization"
---
Let's consider our GET call example:

```
GET https://api.casualtechster.com/subscribers
```

Information returned by this call, like a subscriber's name or email address, should not be accessible the public. Only the blog's owners should be able to get the information of their subscribers.

Let's say only the admins of `https://casualtechster.com` can use the Get Subscribers API, and that ahilesh@casualtechster.com is an admin. The server will first need to validate if the client sending the request is sending it on behalf of ahilesh@casualtechster.com. Upon success, it will have to validate if the specific user is an admin.

### Authentication

Authentication is the process of verifying your identity. API calls are made by clients (browsers, for example). The server will have to ensure that the person using the browser is who they claim to be. You might have seen this in action when you're trying to give Instagram or Snapchat permission to import your Google or Apple contacts. You will first be asked to enter your Google/Apple password to ensure you're who you say you are.

Most API endpoints of protected resources (resources that shouldn't be available for everyone) will have an authentication requirement built into them. There are many ways to authenticate your identity when using APIS, such as using OAuth 2.0, API Keys, or JWTs. We'll learn about them later.

### Authorization

Authorization is the process of ensuring you have the right permissions to do what you're trying you do. You might have seen this when trying to open a Google Docs file someone sent you a link to. After signing in to your Google account, you might get a screen telling you that you don't have access to that file, because it hasn't been shared to you.

OAuth 2.0 is one of the best standards for web authentication and authorization available today. We'll be looking into it next.
