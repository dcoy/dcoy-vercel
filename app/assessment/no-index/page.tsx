export default function Page() {
  return (
      <div className={`flex flex-col justify-center items-center mx-10 my-10`}>
        <div className={`my-5`}>
          <h1 className={`mb-3 text-2xl font-semibold`}>
            A customer is creating a site and would like their project not to be indexed by search engines. Please write a reply to the customer.{" "}
          </h1>
        </div>
        <div className={`items-center text-left`}>
          <div className={`flex-1 py-5`}>
            <div>
              <p>
                Hello Customer,
              </p>
              <p>
                Thanks for reaching out to Vercel!
              </p>
              <p>
                I understand that you're creating a new site and would like to ensure that the project is not indexed by search engines. You're able to achieve this by utilizing the <code className={`bg-slate-700`}>x-robots-tag: noindex</code> header: <a href="https://vercel.com/docs/edge-network/headers#x-robots-tag" className={`underline decoration-white hover:decoration-blue-400`}>Headers: x-robots-tag</a>
              </p>
              <p>
                This can be configured a few ways:
              </p>
            </div>
            <div className={`py-5`}>
                <ul className={`list-disc pl-10`}>
                  <li>
                    If using a framework that supports injecting response headers, we recommend using your frameworks built-in methods to set the <code className={`bg-slate-700`}>x-robots-tag: noindex</code>. For example, if you're using Next.js, you can do so by adding <code className={`bg-slate-700`}>x-robots-tag</code> as the key, and <code className={`bg-slate-700`}>noindex</code> as the value: <a href="https://nextjs.org/docs/pages/api-reference/next-config-js/headers" className={`underline decoration-white hover:decoration-blue-400`}>Next-Config: Headers</a>
                    </li>
                  <li>
                  If you're not using a framework, or your framework doesn't support injecting response headers, create a <code className={`bg-slate-700`}>vercel.json</code> file or modify the existing one to include <code className={`bg-slate-700`}>x-robots-tag</code> as the key, and <code className={`bg-slate-700`}>noindex</code> as the value: <a href="https://vercel.com/docs/projects/project-configuration#headers" className={`underline decoration-white hover:decoration-blue-400`}>Project Configuration: Headers</a>
                  </li>
                </ul>
            </div>
            <div>
              <p>
                I look forward to hearing back from you!
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