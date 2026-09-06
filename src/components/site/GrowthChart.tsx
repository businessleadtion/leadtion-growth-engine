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

      <div className="relative mt-8 h-40">
        <div className="flex h-full items-end gap-2.5 sm:gap-4">
          {bars.map((h, i) => (
            <div key={i} className="flex h-full flex-1 items-end">
              <div
                className="w-full origin-bottom rounded-t-md bg-brand-gradient opacity-80"
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
          preserveAspectRatio="none"
          role="img"
          aria-label="Rising revenue trend line"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="oklch(0.85 0.14 225)" />
              <stop offset="100%" stopColor="oklch(0.72 0.2 258)" />
            </linearGradient>
          </defs>
          <path
            d="M6 112 L54 96 L102 100 L150 68 L198 48 L246 26 L314 8"
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="1200"
            style={{ animation: "draw-line 2s var(--ease-lux) 400ms both" }}
          />
        </svg>
      </div>


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
