export default function AiChatbotSection({ quickPromptItems }) {
  return (
    <section
      id="ai-chatbot"
      className="flex min-h-[70vh] snap-start items-center justify-center bg-gray-50 px-3 py-10 sm:px-4 md:h-screen md:px-6"
    >
      <div className="w-full max-w-6xl rounded-3xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6 md:p-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">Quick Tools</p>
            <h2 className="mt-1 text-xl font-black text-gray-900 sm:text-2xl md:text-3xl">
              YES AI Assistant
            </h2>
            <p className="mt-2 text-sm text-gray-600 sm:text-base">
              Ask once and get the right plan, bundle, and coverage guidance instantly.
            </p>
          </div>
          <span className="inline-flex w-fit rounded-full bg-green-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-green-700">
            Live Advisor
          </span>
        </div>

        <div className="mb-5 flex flex-wrap gap-2">
          {quickPromptItems.map((prompt) => (
            <button
              key={prompt}
              type="button"
              className="rounded-full border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-100 sm:text-sm"
            >
              {prompt}
            </button>
          ))}
        </div>

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-3 sm:p-4">
          <div className="space-y-3">
            <div className="max-w-[88%] rounded-2xl rounded-tl-md bg-white px-3 py-2 text-sm text-gray-700 shadow-sm sm:max-w-[70%]">
              I stream, game, and work remotely. What&apos;s the best YES plan for me?
            </div>
            <div className="ml-auto max-w-[92%] rounded-2xl rounded-tr-md bg-gray-900 px-3 py-2 text-sm text-white shadow-sm sm:max-w-[72%]">
              I recommend YES Infinite Plus: high-priority 5G data, hotspot support, and device bundle savings.
            </div>
            <div className="max-w-[88%] rounded-2xl rounded-tl-md bg-white px-3 py-2 text-sm text-gray-700 shadow-sm sm:max-w-[70%]">
              Great. Can you compare it with a budget option under RM60?
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <input
              type="text"
              placeholder="Ask YES AI anything about plans, coverage, and devices..."
              className="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none ring-0 placeholder:text-gray-400 focus:border-gray-400"
            />
            <button
              type="button"
              className="h-11 w-full rounded-xl bg-gray-900 px-5 text-sm font-bold text-white transition hover:bg-black sm:w-auto sm:shrink-0"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
