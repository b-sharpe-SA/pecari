<p align="center">
    <img src="https://img.freepik.com/vecteurs-libre/illustrations-vintages-pecari_53876-80785.jpg?w=1380&t=st=1675930567~exp=1675931167~hmac=66ad0999ea116a140f83caf8a8cf1e866068172df72b2e47405d7580b56c7036" width="100" height="100" />
</p>
<h2 align="center">Pecari is eating cactus</h2>
<p align="center">Hit cactus API with javascript functions</p>

---

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

## About the project

The goal is to share cactus API ressources between javascript projects.

## How to use

Install dependency

```
yarn add pecari@https://github.com/b-sharpe-SA/pecari#1.0.0
```

To make requests with Pecari you have to initialize a new client and then use this client for every call.

```js
// cactus.js
import CactusClient from 'pecari/dist';

// Initialize new client
export const cactusClient = new CactusClient({
    baseUrl: 'cactus.b-sharpe.com',
    token: 'optional access token', // If pass will be set in axios global config headers
    refreshToken: 'optional refresh token' // If pass will be saved in cactus instance and will be used if access token is expired
    language: 'en' // If pass will be set in axios global config headers
    saveTokens: (access: string, refresh?: string) => saveTokensToLocalStorage(access, refresh), // This function will be trigger on login success or refresh token success. This callback is useful to save tokens in localstorage to keep user signed in.
    onLogout: () => handleLogout() // This function will be trigger when calling cactusClient.logout() from any projects or when pecari failed to refresh token or failed any requests with error invalid token
});
```

Make requests

```js
// example.js
// Import previously initialized client
import { cactusClient } from './cactus';

const myself = await cactusClient.myself.get();
```

## Methods

This client exports methods to make requests and manage authorization token

```js
/**
 * Login user
 * On success it calls cactusClient.handleTokens()
 * No need to call it yourself
 */
cactusClient.login.token();
```

```js
/**
 * Set token
 * Token will be used for every requests
 */
cactusClient.setToken('your token');
```

```js
cactusClient.logout(); // Remove token from axios instance and call onLogout callback
```

## Release

A github action is configured to create releases automatically
Create new branch release-vx.x.x
Release name and release tag will take vx.x.x matching branch name
