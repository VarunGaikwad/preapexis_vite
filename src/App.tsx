const stack = [
  {
    icon: "⚡",
    name: "Vite",
    desc: "blazing fast dev server",
    bg: "bg-purple-500/10",
  },
  {
    icon: "🔀",
    name: "React Router v7",
    desc: "client-side routing",
    bg: "bg-orange-500/10",
  },
  {
    icon: "⚛",
    name: "React 19",
    desc: "UI component library",
    bg: "bg-cyan-400/10",
  },
  {
    icon: "TS",
    name: "TypeScript",
    desc: "type-safe by default",
    bg: "bg-blue-500/10",
  },
  {
    icon: "🌊",
    name: "Tailwind CSS v4",
    desc: "utility-first styling",
    bg: "bg-teal-400/10",
  },
  {
    icon: "◈",
    name: "Lucide Icons",
    desc: "beautiful icon library",
    bg: "bg-violet-500/10",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center font-sans">
      <div className="border border-white/10 bg-white/5 rounded-2xl p-6 max-w-lg w-full relative">
        <span className="absolute top-3 right-4 text-xs text-white/30 font-mono">
          v1.0.0
        </span>

        <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 rounded-full px-3 py-1 text-violet-400 text-xs font-mono mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          TEMPLATE READY
        </div>

        <h1 className="text-3xl font-black leading-tight mb-2">
          Start building
          <br />
          <span className="text-violet-400">something great.</span>
        </h1>
        <p className="text-white/40 text-xs mb-5">
          Your stack is locked and loaded. Everything below is pre-installed and
          ready to use.
        </p>

        <div className="flex flex-col gap-1.5 mb-5">
          {stack.map(({ icon, name, desc, bg }) => (
            <div
              key={name}
              className="flex items-center gap-3 border border-white/5 rounded-xl p-2.5 hover:border-violet-500/40 transition-colors"
            >
              <div
                className={`w-7 h-7 rounded-lg ${bg} flex items-center justify-center text-sm`}
              >
                {icon}
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold">{name}</p>
                <p className="text-xs text-white/30 font-mono">{desc}</p>
              </div>
              <div className="w-4 h-4 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 text-[10px]">
                ✓
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between">
          <code className="text-xs text-white/40 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5">
            $ npm run dev
          </code>
          <code className="text-xs text-white/40 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5">
            src/<span className="text-emerald-400">App.tsx</span>
          </code>
        </div>
      </div>
    </div>
  );
}
