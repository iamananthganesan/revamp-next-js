DAY -1 07/07

    Next js
        Framework build on top of React js
    -Rendering pattern

    -Peformance like 
        SEO, 
        image optimaization - Nextimg
    
    -SEO friendly

    -Files based Routing system

    -Vercel one click deployment


Render pattern    

-1.CSR Client side rendering
    we will handle the client code in client side itself we require only data from the backend

    its traditional and usual way 

    we will request data from client side we will receive the data from server side 

-2.SSR Server side rendering 
    Next js brings the SSR Server side rendering where we have the markup files and its been intergrated with data to sends to the frontend
,the flow is like hitting an application url in browser its fetch the data from database and in server level we will make the markup ready and sends to the client
on every request we wil getmerate makeup with data

    SSR pattern wont give you a json response instead it will give you the data + makeup

-3.SSG Static side Generation
    Introduced on 2019
    We will generate few files in server side during the build so that it will helps to load the page instantly 
    lets say if we update something on db level it wont get updated that we consider as a flaws here in this pattern

-4.ISR Incremental StaticSide Generation
    We wont hit the api frequently 

    consider you're having a blog application we will make the api call for time interval like 1 an hour or half an hour to avoid to the multiple api calls 

    on every time interval we will make the blog updated by hitting the api

Official documentation


-Installation
    npx create-next-app@latest

-Styling Next js application
    - Normal css
    - Tailwind css

Day - 02 07/09

Router
    - Page Router
    - App router 1.(Basic Routing)
        - 2.Nested routing
        Nested routes
            -src 
                -app
                    -about
                        page.jsx
                            -team
                                page.jsx
                    -contact
                        page.jsx
- 3.Dynamic Routing
    -products
        page.jsx
        -[product_Id]
            page.jsx
                const ProductDetails = ({params}) =>{
                    return(
                        <div>{params}</div>
                    )
                }
    4. Catch all routing
        [...] it wil work for sub directories /docs wont work /docs/id will work
        [[...]] in this case it work for parent and sub directories /docs/subdoc/doc_id

    5.Group Routes
        (auth)
            -login
                page.jsx
            -refister
                page.jsx

    Link
        import {Link} from "next/Link"
        <Link href="/about">
            <button>About<button>
        </Link>
    Navigating through programmatically
        useRouter
    "use client" its must to include on top of the component
        import {useRouter} from "next/navigation"

        const router = useRouter();


         <button
        onClick={() => {
          router.push("/login");
        }}
      >
        Go to login page
      </button>


-Redirect by default
    -next.config.mjs
        lets say if you wanted to re-direct by default you can use the redirect option inside the next.config.mjs file

        /** @type {import('next').NextConfig} */
        const nextConfig = {
            async redirects(){
                return [
                    {
                        source: '/blogs',
                        destination: "/about",
                        permanent: true
                    }
                ]
            }
        };

        export default nextConfig;

Day - 03 07/11
    Diff b/w page and app router

    page router              |             App Router
    --------------------------------------------------
    1.folder/page.jsx             1.app/feature/page/jsx
    2.File based                  2.file based(improved versions)
    3.useState() --shimemr        3.loading.js error.js
    4.next/link                    4. next/link next/navigation             
    No server componnet            Server component is fully supported 
    is supported 



    -Client side component 
        API integration in products component
        By default the component will be considered as server side component, if its Ui component we need to mention the "use Client" directive on top of the component file

    - Server side component
        -Runs the code as per the request
        -Recipe its a Server component we're not suppose to use the useState and useEffect hooks and all in server component
        
    -Static Site Generation SSG
        - Runs code at build time
        No server call is required when user visit the page since we made a api call duding the build phase 
    -Incremental Static site Generation - ISR
        Mix of static  + Refresh (Save the HTML in server side during the build time + re-validate the html file on the given time interval)
        After the deployment, In time interval it will make a api call to update the UI  
        update the static page after the deployment by setting a revalidation time

-Day 04 07/20
    Can we create an API with Next js?
        Yes
    Server
        SSC serve side component
            you can write any js ar typscript code 
        Server action
    Project 
        Step 1 Design an UI
            creating a card with tailwind

        Step 2 Db Design or Schema Planning
            i,Schema design with prisma
                -you can make a use of prismaliser.app to create a model https://prismaliser.app/               

        Step 3 API Creation
            http://localhost:3000/blogs - GET
            http://localhost:3000/blog/blog_id - GET
            http://localhost:3000/blogs - POST
            http://localhost:3000/blog/blog_id - PUT
            http://localhost:3000/blog/blog_id - DELETE     
        
        Step -4
        Postgres SQL Neon DB (server less)
            Create a project 
                https://console.neon.tech/app/org-empty-butterfly-34658975/projects

                You need to fill with essential details
                    -project name: blogs-app
                    -Choose the closest region: Singapore

                Create a database 
                    -Database Name
                Tables
                    -Click on tables options initially you wont see any tables if you wanted to create a table on your own you need to run a command
                    
                        -npx prisma migrate dev
                        -init

                        -Prisma helps to create a table in your neon db (you can visit the migerate folder inside you will able to see the RAW query)
                        - You can create a record in neon db or you can create from prisma studio as well
                            Prisma Studio - http://localhost:5555/

                            Quick Re-cap
                                -Design Schema with prismaliser (model name along with colum names and its datatypes)

                                -Create Database in Postgress Neon DB which is server less

                                -Create a folder with prisma -> with schema.prisma(where it has the schema details(model details)) it has to be created outta src folder

                                -Once the schema creation is done you run migerate command to create a table 

                                -npx prisma migerate dev migreation_Details_name
                    
                                -Create .env file where you need to palce the database connection strings 
                    
-Day 05 07/21
    API Creations for all the http methods
    We need to create api folder underneath we can start creating out api with feature name
    controllers will be placed inside the route file of each features

    example
        src
            api
                blogs
                    route.js
                        const GET = async () =>{
                            //if its prisma you need to get the prisma instance 
                            const data = await prisma.model_name.findMany();

                            return NextResponse.json({
                                message: "Data",
                                data
                            },{
                                status: 200
                            })
                        }
                        [blog_id]
                            route.js
                                const GET/PUT/DELETE = async (req,{params}) =>{
                                    //this is how you need to extract the params and body value
                                    const {blog_id} = await params;
                                    const body = await req.json()
                                }


 - Day 06 07/23
 This session is all about component library,performance 