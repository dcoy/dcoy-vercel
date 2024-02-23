import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      
      {/* Assessment button */}
      
      <div className="group rounded-lg border border-transparent px-5 py-4 hover:border-white-300 hover:bg-white-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <Link
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          href="/assessment"
          rel="noopener noreferrer"
        >
        <h2 className={`mb-3 text-2xl font-semibold`}>
            Assessment Answers{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        </Link>
      </div>

      {/* Assessment button */}

      {/* <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href="/assessment"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Assessment Answers{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </Link>
      </div> */}
    </main>
  )
}