This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
Code evolution
1.Intro
Nextjs 
    React framework to create production ready fullstack application 

Why?
    it simpilify the process of building  production-ready web applications
    1.Routing
    2.API Routes
    3.Rendering (Client side / server side)
    4.Data fetching (build in sync await support)
    5.Styling(core, tailwaid)
    6.Opimization(images, fonts, scripts many more)
    7.Dev and prod build system

Prerequisites
    HTML
    CSS
    Modern Javascript
    React fundamentals
2.Hello World
    npx create-next-app@latest
        7 configuration confirmations we need to choose on our own 
        application will be up running in localhost:3000
        with command npm run dev

3.Project Structure
    package.json
        heart of an application
        "scripts": {
            "dev": "next dev",// development mode
            "build": "next build", //build for the production
            "start": "next start", //start your application in production server
            "lint": "next lint"
        },

    
    Exploring folders
        .next        
            .next folder will get generated when we run npm run dev 
        node_modules
            dependenties 
        public
            static assets images and icons will be placed here
        src
            favicon
            global.css
            layout.tsx
                shared ui across pages
            page.tsx
                what you see in localhost


               npm run dev -> package.json -> layout.jsx rendering the RootLayout component ->for the url ->

               ->localhost URL looks for page.jsx it renders the page in Rootlayout
4.Before we start
    React Server Components(RSC)
        React server components is a new archeteture that was introduced by the react team and quickly adopted by ther Next js 

        This arch introduces a new approach to creating React components by dividing them into two distinct types
            -server components
            -client components

            Server component
                -By defaulyt Next js treats all the components as Server components

                -These components can perform server side tasks like reading files or fetching data directly from a database
                
                -The trade-off is that they cant use React hooks or handle user interactions

            Client Component
                -To create a client component you will need to add the "use client" directive at the top of your component file
                -While client components cant perofrm server side tasks like reading a files, they can use hooks and handle user interations
                -Client components are the traditional React components you've already familiar with from previous version of react.
            React Server components and routing 
                As we get into routing , you will see practical exampl,es of both types

                Work with server components that wait for certain operations to complete before rendering the content

                use client components to take advantage of hooks from the routing module 
5.Routing

Next js has a file system based routing system

URLS you can access in you browser are determined by how you organize your files and folders in your code 







