export default function Page() {
    return (
    <div className={`flex flex-col justify-center items-center mx-10 my-10`}>
        <h1 className={`mb-3 text-2xl font-semibold`}>
        How would you compare Next.js with another framework?{" "}
      </h1>
      <div className={`flex-wrap items-center py-5`}>
        <div className={`flex-1 py-10`}>
          <p>
            All frameworks have their benefits and drawbacks. I've used Gatsby in the past to build static sites and ran into some difficulty. Overall, the two frameworks simplify creating frontend applications, but one of the differences come down to needs: Do I need to render data dynamically or statically? 
          </p>
          <p>
            Both Next.js and Gatsby can generate static sites, but Next.js has the capability to dynamically render data <em>easily</em>. Next.js can request REST APIs (and other data sources) in React Server Components. Whereas, Gatsby requires a fair bit of configuration to fetch data from a REST API by creating your own function. Gatsby prefers using its dedicated data layer (GraphQL).
          </p>
          <p>
            Next.js is pragmatic, highly modular, with built-in components. Whereas Gatsby is opinionated with its "progressive disclosure" approach and oftentimes requires utilizing its plugin system. For large enterprise teams, using Next.js would be simpler as this requires learning Next.js component system. If utilizing Gatsby in a large team, the engineers would need to learn Gatsby, along with any other plugins that are integrated into the project.
          </p>
        </div>
      </div>
    </div>
    )
}