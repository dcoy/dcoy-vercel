export default function Page() {
    return (
<div className={`flex flex-col justify-center items-center mx-10 my-10`}>
          <div className={`my-5`}>
            <h1 className={`mb-3 text-2xl font-semibold`}>
            A customer has reached out asking, "When should I choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?" Write a reply to the customer.{" "}
            </h1>
          </div>
        <div className={`items-center text-left`}>
          <div className={`flex-1`}>
            <div>
              <p>
                Hello Customer,
              </p>
              <p>
                Thanks for reaching out to Vercel!
              </p>
              <p>
              I understand that you'd like to determine the best use case for Edge Functions, Serverless Functions and Edge Middleware with Vercel. Let's dive in
              </p>
              <div className={`py-5`}>
                  <ul className={`list-disc pl-10`}>
                    <li>
                    Serverless functions are a great choice when you need to perform intense workloads, or need access to multiple runtime environments. The supported environments are: Node.js, Go, Ruby, and Python.
                    </li>
                    <li>
                    Vercel edge functions are a great choice if you don't need to utilize the full Node.js APIs and are globally distributed by default, supporting automatic global failover.
                    </li>
                    <li>
                    Edge middleware would be a great choice to personalize a user's experience by sending back specific page elements, allowing a greater degree of control for your application. For example, let's say you have an eCommerce application deployed in production and are preparing to release a new product, but want to ensure your <em>customers</em>, not bots, can purchase the new product. With edge middleware, you can intercept the request, determine if the request came from an authenticated user or a bot, and reject it accordingly
                    </li>
                  </ul>
              </div>
              <p>
                Regardless of your choice, we're happy to help you however we can.
              </p>
              <p>
                Thank you,
              </p>
              David Coy
            </div>
          </div>
        </div>
      </div>
    )
}