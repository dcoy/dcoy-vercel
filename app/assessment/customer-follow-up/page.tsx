export default function Page() {
  return (
      <div className={`flex flex-col justify-center items-center mx-10 my-10`}>
          <div className={`my-5`}>
            <h1 className={`mb-3 text-2xl font-semibold`}>
              Imagine that the customer from Question 4 responds with the following email -- write a reply to the customer addressing the concerns raised.{" "}
            </h1>
              <p>
                "I'm so frustrated. I've been trying to make this work for hours and I just can't figure it out. It must be a platform issue so why don't you just fix it for me instead of asking me questions."
              </p>
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
                I understand that you're frustrated as you've invested a lot of time into the configuring the platform to work in conjunction with your application, and would like to to help you determine what's going wrong and try to fix this for you. While I'm not able to directly troubleshoot your code, I am able to determine if there's anything specific that would need to be modified in relation to the redirect. Would it be possible to share the following?
              </p>
              <div className={`py-5`}>
                  <ul className={`list-disc pl-10`}>
                    <li>
                      If you chose to utilize a <em>static redirect</em>, would you be able to provide the <code className={`bg-slate-700`}>vercel.json</code> or <code className={`bg-slate-700`}>next.config.js</code> file so I can review the redirect for <code className={`bg-slate-700`}>/blog</code>? If need be, you can choose to <em>only</em> provide the code that relates to <code className={`bg-slate-700`}>/blog</code>.
                    </li>
                    <li>
                      If you chose to utilize a <em>dynamic redirect</em>, would you mind providing the main error from the build output? You're able to access your logs in your Vercel project by clicking <b>View Functions Logs</b> next to the deployment. This should help us narrow down what could be going wrong and how we can help remedy this.
                    </li>
                  </ul>
              </div>
              <p>
                I look forward to hearing back from you!
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