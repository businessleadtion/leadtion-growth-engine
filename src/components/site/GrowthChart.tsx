const bars = [22, 34, 30, 48, 60, 74, 92];

export function GrowthChart() {
  return (
    <div className="glass-card relative overflow-hidden rounded-2xl p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Pipeline Growth
          </p>
          <p className="mt-2 font-display text-3xl font-bold">+214%</p>
        </div>
        <span className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-muted-foreground">
          Last 7 months
        </span>
      </div>

      <div className="mt-8 flex h-40 items-end gap-2.5 sm:gap-4">
        {bars.map((h, i) => (
          <div key={i} className="flex-1">
            <div
              className="origin-bottom rounded-t-md bg-brand-gradient opacity-90"
              style={{
                height: `${h}%`,
                animation: `grow-bar 1.1s var(--ease-lux) ${i * 110}ms both`,
              }}
            />
          </div>
        ))}
      </div>

      <svg
        viewBox="0 0 320 120"
        role="img"
        aria-label="Rising revenue trend line"
        className="pointer-events-none absolute inset-x-6 bottom-16 h-28 w-[calc(100%-3rem)]"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.78 0.16 232)" />
            <stop offset="100%" stopColor="oklch(0.62 0.212 258)" />
          </linearGradient>
        </defs>
        <path
          d="M6 108 L54 92 L102 96 L150 66 L198 48 L246 28 L310 6"
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="1200"
          style={{ animation: "draw-line 2s var(--ease-lux) 400ms both" }}
        />
      </svg>

      <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-5 text-center">
        {[
          { k: "Qualified leads", v: "12k+" },
          { k: "Avg. close rate", v: "31%" },
          { k: "Client retention", v: "94%" },
        ].map((s) => (
          <div key={s.k}>
            <p className="font-display text-lg font-bold text-foreground">{s.v}</p>
            <p className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{s.k}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
