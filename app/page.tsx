export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Test Application
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Built with Next.js and Tailwind CSS
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">Fast</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Optimized performance with Next.js 14 and React 18
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-2 text-purple-600">Modern</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Beautiful UI with Tailwind CSS utility classes
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-2 text-pink-600">Deployed</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Automatically deployed to Vercel for instant access
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Get Started
          </button>
          <button className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </main>
  )
}
