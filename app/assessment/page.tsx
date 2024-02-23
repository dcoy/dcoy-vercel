import Link from 'next/link';

export default function Page() {
    return (
        <div>
            <h1 className={`mb-3 text-2xl font-semibold`}>
                <Link
                    href="/"
                >
                Assessment
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
                        <Link href="/assessment/compare">Framework Comparison - Next.js & Nuxt.js</Link>
                    </li>
                    <li>
                        <Link href="/assessment/infrastructure">Infrastructure</Link>
                    </li>
                    <li>
                        <Link href="/assessment/redirect">Redirect to /blog</Link>
                    </li>
                    <li>
                        <Link href="/assessment/concerns">Customer Concerns</Link>
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