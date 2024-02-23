import Link from 'next/link';

export default function Page() {
    return (
        <div>
            <h1 className={`mb-3 text-2xl font-semibold`}>
                <Link
                    href="/"
                >
                David Coy's Sr. CSE Assessment Answers
                </Link>{" "}
            {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
            </span> */}
            </h1>
            <h2>
                <ul>
                    <li>
                        <Link href="/assessment/challenge">Solving a Challenge</Link>
                    </li>
                    <li>
                        <Link href="/assessment/compare">Framework Comparison - Next.js & GatsbyJS</Link>
                    </li>
                    <li>
                        <Link href="/assessment/platform">Platform -- Edge Functions, Serverless Functions, or Edge Middleware with Vercel?</Link>
                    </li>
                    <li>
                        <Link href="/assessment/redirect">How do I redirect /blog to another site?</Link>
                    </li>
                    <li>
                        <Link href="/assessment/customer-follow-up">Customer Follow-up: Please fix this for me.</Link>
                    </li>
                    <li>
                        <Link href="/assessment/no-index">No Search Engine Indexing</Link>
                    </li>
                    <li>
                        <Link href="/assessment/feedback">Feedback</Link>
                    </li>
                </ul>
            </h2>
    </div>
    )
}