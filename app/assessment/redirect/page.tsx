export default function Page() {
    return (
        <div className={`flex flex-col justify-center items-center mx-10 my-10`}>
            <div className={`my-5`}>
                <h1 className={`mb-3 text-2xl font-semibold`}>
                    A customer has a project on Vercel and they want to redirect the <code className={`bg-slate-700`}>/blog</code> path to another website. Write a reply to the customer.{" "}
                </h1>
            </div>
            <div className={`items-center text-left`}>
                <div className={`flex-1`}>
                    <div>
                        Hello Customer,
                        Thanks for reaching out to Vercel!
                        <p>
                            I understand that you would like to redirect the `/blog` path to another destination -- I'd be happy to help.
                        </p>
                        <p>
                            There's a few options you can implement -- serverless functions, edge functions, or edge middleware. We have some documentation that covers our recommended approach for achieving this.
                        </p>
                        <p>
                            If you want to create dynamic redirects, the simplest approach would be to utilize serverless functions or edge functions:
                        </p>
                        <div>
                            <ul className={`list-disc pl-10`}>
                                <li>
                                <a href="https://vercel.com/docs/edge-network/redirects#serverless-functions" className={`underline decoration-white hover:decoration-blue-400`}>Redirects: Serverless Functions</a>
                                </li>
                                <li>
                                <a href="https://vercel.com/docs/edge-network/redirects#serverless-functions" className={`underline decoration-white hover:decoration-blue-400`}>Redirects: Edge Functions</a>
                                </li>
                            </ul>
                        </div>
                        <p>
                            Otherwise, you can utilize a static-based configuration redirects using the framework-specific config file, or the vercel.json file located in the root of your application: <a href="https://vercel.com/docs/edge-network/redirects#configuration-redirects" className={`underline decoration-white hover:decoration-blue-400`}>Redirects: Configuration</a>
                        </p>
                        <p>
                            If you find that you've exceeded our documented limits, as well have a critical redirect that needs to run on _every_ request, you can use edge middleware in conjunction with edge config:
                        </p>
                        <ul className={`list-disc pl-10`}>
                            <li><a href="https://vercel.com/docs/edge-network/redirects#configuration" className={`underline decoration-white hover:decoration-blue-400`}>Redirects: Configration</a></li>
                            <li><a href="https://vercel.com/docs/functions/edge-middleware" className={`underline decoration-white hover:decoration-blue-400`}>Edge Middleware</a></li>
                            <li><a href="https://vercel.com/docs/storage/edge-config" className={`underline decoration-white hover:decoration-blue-400`}>Edge Config</a></li>
                        </ul>
                        <p>
                            If you require additional assistace or have additional questions, please don't hesitate to reach back out!
                        </p>
                        <p>
                            Thank you,
                        </p>
                        <p>
                            David Coy
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}