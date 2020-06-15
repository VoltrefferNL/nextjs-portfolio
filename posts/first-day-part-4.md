---
title: 'The first day of school Part 5, Part #4'
date: '2020-05-26'
tags: [Northcoders]
---

And here we are, two weeks further into my journey to become a software developer. And what two weeks it has been! Following on from delivering my NC News frontend project (see here for anyone who's missed it) I'm now well and truly underway in the final part of the Northcoders course. The project phase involves teams of students developing an application from the ground up in two weeks. And to be fair, that proposition was daunting at the beginning.

Working in groups again after spending so much time on our own was a nice change of scene for me! After receiving our group division we set out to brainstorm about our application and what we needed to realize our vision. I'm going to keep our actual app a secret for now, as we'll have a big presentation in a fortnight on the Northcoders Youtube channel (I'll share the link in my next post) and I don't want to spoil the moment.

I can however talk about the (new) things I've learned or done these past weeks. I'm going to start at the beginning...

Our app will be a mobile app, and we chose to use Flutter so we can develop for both mobile operating systems (Andriod and iOS). Just getting Flutter to run on my system proved quite the challenge on its own. But after some troubleshooting, the real work could begin! As a team we wanted to demonstrate what we have learned over the last couple of months, therefore we've gone with a mix of familiar tech and some new additions such as MongoDB, Firebase for the backend, and Dart for our app development language.

Argon2 - Hashing our user's passwords
I might touch upon some of the above-mentioned technologies in a later post, however, in the remainder of this post I'd like to highlight something smaller that I've implemented in the last week to allows us to hash passwords when we sign up and log in our users. It's called Argon2.

<!-- ```javascript
    hash = await argon2.hash
    password, process.env.hashSalt);
 ``` -->

Argon2 is a package that allows you to "hash" data. In layman's terms hash functions allow the processing from humanly-readable data (`th!sIsMyPa$$word`) to random gibberish (19sNwesreihawoe+-). Hash functions are therefore mostly used to store passwords. Why? Firstly they don't reveal passwords if a data breach happens, and secondly, it prevents the system from having access to the actual user's password. When a user wants to log in, they enter their password and send it to the server. The server then hashes the user input and checks it against the previously submitted hash when the user originally created their account.

In the above line of code you can see our implementation in the user sign up. Argon hashes the input from the user with a so-called Salt that is stored in the process.env. This provides additional security in the event our database is breached. Please see the Wikipedia page about Salts for additional information.

In cryptography, a salt is random data that is used as an additional input to a one-way function that hashes data, a password or passphrase. Salts are used to safeguard passwords in storage. Historically a password was stored in plaintext on a system, but over time additional safeguards developed to protect a user's password against being read from the system. A salt is one of those methods.

<!-- ```javascript
    if (await argon2.verify
    (encodedHash, password)) {
    return res.status(201)
    .send({ user: { ...user._doc,
    password: null } 
```        -->

When the user wants to login we use the hashed password and compare it to the user input. If everything checks out we send a 201 status and the user object return. This will result in a successful login for the user.

When I set out in my quest to find a solution for safely storing our passwords I imagined a long and hard process, in reality it was solved with as little as 10 lines of code. Pretty astonishing especially when you read into what the package is doing behind the scenes.

Moving on - The last week!
And so I have arrived in the last two weeks of the course. This week will see us finishing our app and preparing our presentation that is planned for Friday the 5th of June. One more week to dive in deep and produce the best we can possibly do as a team! Wish us luck!