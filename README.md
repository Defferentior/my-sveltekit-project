# Book Description

This is a repo for the project guided by the book [`Large Scale Apps with Svelte and TypeScript`](https://www.amazon.com/dp/B0CJDP4FS2) by [`Damiano Fusco`](https://www.damianofusco.com/).

However, rather than using the book's defined creation method wholesale, I've instead created a sveltekit app, and reworked the application so that it works with that different architecture. Rather than copy pasting code, I'm also using this book as a chance to learn both how to use and how not to use Github Copilot by debugging, reworking, and aligning with the book the premade code it creates.

## Commit-Times

All chapter completions that I do will be commited, as well as sensible breakpoints within chapters

--- 

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
