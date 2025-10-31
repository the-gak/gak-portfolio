---
title: "OAuth 2.0"
description: "An intro to OAuth tokens and scopes."
updated: "2025-09-25"
resourceSlug: "oauth"
---
OAuth 2.0 is a standard that provides both authentication and authorization. It has been the industry standard for a while now, specifically because of its features like short-lived and scoped access. It's very likely that you would have used OAuth to give an app or a browser access to your data when using the internet at some point.

Here's an example of Notion Calendar requesting a user's permission to access Google Calendar with APIs. If you've seen a screen similar to this, you've used OAuth:

![Google Consent Screen](/assets/images/resources/api-doc-quickstart/notion-consent.png "Google asking consent to share your information with Notion Calendar")

OAuth has four main components:

* Scopes
* Authorization Code
* Access Token
* Refresh Token

### Scopes

Scopes are a way to segment your resources, providing users and clients granular control over what can be accessed with APIs. In the screenshot above, you can see that you, as the user, can choose how much access into your Google resources you can provide to Notion Calendar.

Scoping resources is an important part of designing APIs. There is no universal guidelines, as it depends on your app's architecture and your server's structure. However, a good documentation would clearly list all the scopes and explain what permission each scope grants.

### Authorization Code

Authorization Code is a single-use code that is generated from the authentication server. This code can later be used to generate access tokens.

### Access Token

An access token is a short-lived token that a client can use to communicate with the server on behalf of the user.
