interface TickerProps {
  text: string;
}

export default function Ticker({ text }: TickerProps) {
  const copies = Array.from({ length: 8 });

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track animate-ticker">
        {copies.map((_, i) => (
          <span key={i} className="ticker-item">
            {text}
            <span className="ticker-dot">·</span>
            <span>tulipan58</span>
            <span className="ticker-dot">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
