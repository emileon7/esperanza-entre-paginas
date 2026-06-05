export function PaperPlane({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 64 64" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
      <path d="M58 6 6 28l20 6 4 20 10-14 16 12z" fill="rgba(255,255,255,0.6)" />
      <path d="M58 6 26 34" />
    </svg>
  );
}

export function Star({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor">
      <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1z" />
    </svg>
  );
}

export function DashedPath({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 80" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round">
      <path d="M10 60 C 80 10, 200 90, 390 20" />
    </svg>
  );
}