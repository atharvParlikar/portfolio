---
title: My attempt at fixing websockets
author: Atharv Parlikar
pubDatetime: 2025-06-04
postSlug: fixing-websockets
featured: false
draft: false
tags:
  - technical
  - websockets
description: Issues I faced with websockets and how I tried to solve them.
---

**NOTE: Its only applicable if you're using typescript on both client and server.**

### My problems with websockets.

**1. Code discontinuity**

websockets, by design, are event-driven. You send a message; someone listens. The server emits something; the client reacts. This pattern works beautifully when the interactions are small, isolated and one-directional like broadcasting a notification or streaming real-time data. But that's not how most real world logic works.

In any moderately complex system, you're not just sending a message and forgetting it. You care about the outcome. Maybe you send a message to update a user's profile or to trigger some action on the server. Now you need to know: 'did that work?' With http, you just await fetch and move on. But with websockets? You emit an event... and then what? you set up a completely separate listener. you listen on a different event name. You track state changes. You trigger UI side effects. Suddenly, the logic that should've been 2 line long is scattered across different parts of file or even multiple files, components and contexts.

Even in libraries like socket.io that support ACK, the flow remains awkward. You're nesting callback functions, or manually resolving logic through client-side state. This makes debugging a nightmare. You forget which event triggered what, whether the server responded, and whether that response actually belongs to the message you just sent.

You might argue, "Well, that is what http is for request-response flows, and websockets only for pushes". And that's a _fair_ point in theory but in practice, once you're operating inside a persistent websocket connection say in a multiplayer game, or a realtime dashboard it's far cleaner to keep everything flowing through the same channel. And sometimes you simply can't use http and still want req-res lets say you emit a message to server, it broadcasts it to everyone, or you want to know the number of active players in the server. Here you simply can't use http as your request depends on ws server specific context. plus you have to now sync sessions, do auth again, validate if http request sender is the same ws connection (socket id) as it is claiming to be, its a mess.

I solved this in zap-socket by providing a clean abstraction over ws.

```ts
await zap.events.someEvent.send();
// or if there is a response.
const response = await zap.events.someEvent.send();
```

That's all, no listeners fragmented logic, just a clean linear code. In zap-socket every message is a request but the server doesn't have to respond each time. If the server doesn't send an explicit response zap-socket still sends an implicit ACK to complete the loop, and resolve the promise.

**2. Websockets don't feel native to React**

React is built on the idea of declarative state. You describe what your UI should look like based on the state, and React handles the rest. But websockets force you to step out of that world. You listen for events manually, and then imperatively call `setState`, the react flow gets broken. Let's assume you're building a chat app You want to display all the incoming messages. With plain ws or even socket.io, you end up writing something like this.

```ts
const [messages, setMessages] = useState<string[]>([]);

useEffect(() => {
  socket.on("message", msg => {
    setMessages(prev => [...prev, msg]);
  });
  return () => socket.off("message");
}, []);
```

This works, but it's not eligant. It separates the event source from the state, and mixes real time logic with component lifecycle management. It gets messy fast, specially if you are dealing with multiple streams of data.
To fix this, zap-socket offers a React package designed for tight integration

It introduces a hook called `syncedState` which lets you treat any websocket event like a live react state. You don't need to manage listeners or state updates manually. You just declare it:

```ts
const messages = zap.syncedState.messages();
```

That's it. Now messages is a live-updating array of all incoming messages, synced automatically with the event stream. You can even pass a reducer if you want fine-grained control over how the updates happen.

```ts
const notifications = zap.syncedState.notifications((prev, new) => [..prev, new]);
```

It sounds trivial but it was also very trivial to implement, I thought why not, it also aligned with the goal of library to reduce fragmented code.

**3. Lack of Type Safety and Constant Back-and-Forth**

One of the biggest pains with websockets and real-time code in general is the lack of clear contracts between client and server. When you want to send a new kind of message, you have to dig into the server code to see what input it expects. And when you listen for events, you're never 100% sure what shape the data will have. Nobody remembers all that. It leads to a lot of guessing, copy-pasting, and worst of all—runtime crashes.

Since websockets just send strings or blobs, the client can easily send malformed data without anyone noticing until something breaks. I've had my fair share of crashes because I assumed the data looked one way but it was actually missing keys or in a different format.

zap-socket solves this with full TypeScript typing that's shared between client and server. You define your events and their data types once on the server, using Zod schemas for validation. This means every message is not only typed but also validated at runtime to ensure it matches the expected shape.

When you pass these types to the client during socket creation, you get accurate autocomplete and guaranteed type safety everywhere. So, when you send an event, you know exactly what the server expects. When you listen for events, the data you get is correctly typed and validated.

This is a massive boost to developer confidence and productivity because you catch bugs before they happen, and you spend less time jumping between codebases or debugging mysterious runtime errors.

---

### Little things

There are plenty of small improvements and API details I haven't covered here things that reduce friction and help keep your code tight. I'm still working on the full docs, but if this sounds interesting, check out the [landing page](https://zap-socket-control-center.vercel.app) or give the repo a [star](https://github.com/atharvparlikar/zap-socket).

