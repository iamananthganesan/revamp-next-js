This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


==================================================================================================================================================================
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

Conventions
    1.All route must be placed inside the app folder.
    2.Routes files must be named either page.js or page.tsx
    3.Each folder represets a segmanet of the URL path

    File based Routing
    Scenario 1 
        src -> app -> page.tsx
        create page.tsx
            export default Home = () =>{
                return <h1>Welcome Home!!!</h1>
            }

    layout.tsx next js generates automatically behind the scenes 
        Scenario 2 
            Create About page
                src -> app-> about -> page.tsx
                    export default About = () =>{
                      return <h1>Welcome About!!!</h1>
            }

             Create Profile page
                src -> app-> profile -> page.tsx
                    export default Profile = () =>{
                      return <h1>Welcome Profile!!!</h1>
            }
         Things to remember:   
            -No need to write special code to handle invalid routes

            -No need to install extra routing library to handle the routings file and page will helps to handle it 
6.Nested Routes
    Scenario 3 
        src -> app -> blog -> first -> page.tsx
            /blog/first
        src -> app -> blog -> second -> page.tsx
            /blog/second
7.Dynamic Routes
    Scenario 3 
        http:localhost:3000/products/id
             src -> app -> products -> [productId] -> page.tsx

                export default const ProductDetails = ({params}: {
                    params: Promise<{productId:string}>
                })=>{
                    return <h1>Product details page</h1>
                }


                 export default const async ProductDetails = ({params}: {
                    params: Promise<{productId:string}>
                })=>{
                    const productId = (await params).prdouctId;
                    return <h1>Product details page with {productId}</h1>
                }
8.Nested Dynamic Routes
    Scenario - 5
          http:localhost:3000/products/productid/review/reviewId 
            export default function Review({params}:{
                params:Promise<{productId:string}>
            }) {
                const reviewId = (await params).reviewId; 
                                or 
                const {reviewId} = await params;
               return <h1>Review details page with {reviewId}</h1>
            }         

9.Catch all segments
    Scenario - 6
        its all about slugs
            folder [...docs]

10.Not found page
11.File colocation 
    the route is accessable only when it named page.tsx

    lets say we have src/app/dashboard/line-chart.tsx
        still it returns 404
    src/app/dashboard/page.tsx    
    if we missed with default export we will be gettting an error

    this willthrow an error
        function BarChart(){
            return <h1>Dash</h1>
        }
this will run 
        export default function BarChart(){
            return <h1>Dashboard</h1>
        }

12.Private Folder
    sec/app/_lib _lib is kind of private folders
usages:
    Keeping your ui logic seperate from routing login
    having a consistant way to organize internal files in your project
    making it easier to group related files in your code editor
    avoiding potential naming conflicts with future Next.js file naming conventions

    if you actualy want an underscore in your URL, use "%5F" instead. Thats just ther URL encoded version of an underscore
13.Route Group
    Lets us logically organize our routes and project files without impacting the URL structure
        you need make your group folder name enclosing by using paranthathesis

            ./src/app/(auth)
                register
                    page.tsx
                        accessing by http://localhost:3000/register
                login 
                    page.tsx
                        accessing by http://localhost:3000/login
                forgot-password    
                    page.tsx
                        accessing by http://localhost:3000/forgot-password 

14.Layouts
    Pages are route-specfic UI components
    A layout is UI that is shared between multiple pages in your app
    Header
    ========
    Content/Layout
    ========
    Footer

    autogeneratable code even if you delete it wil generate automatically Layout.tsx

    15.Nested layout
        src/app/products -> layout.tsx
            we can have individual layouts for each features 
                like below 
                export const metadata = {
                    title: "Next.js",
                    description: "Generated by Next.js",
                    };

                    export default function RootLayout({
                    children,
                    }: {
                    children: React.ReactNode;
                    }) {
                    return (
                        <html lang="en">
                        <body>
                            <header>Header</header>
                            {children}
                            <footer>Footer</footer>
                        </body>
                        </html>
                    );
                    }

16.Multiple Root layout
    Grouping the features by having individual Layout.tsx
        (auth)
            login
                page.tsx
            register
                page.tsx    
            layout.tsx

17.Routing Metadata        
The Metadata API in Next.js is a powerful feature that lets us define metadata for each page

Metadata ensures our content look sgreat when its shared or indexed by search engines 

2Ways to handle the metadata
    1.export a static metadata object 
    2.export a dynamic  generateMetadata function

Rules:
    -Both layout.tsx and page.tsx can export metadata. Layout metadata applies to all its page while page metadata is specific to that page

    -Metadata follows a top to down order, starting from the root level
    
    -When metadata exists in multiple places along a route, they merge together, with page metadata overriding layout metadata for matching properties

