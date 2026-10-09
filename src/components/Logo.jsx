export default function Logo({ light = false }) {
  return (
    <a href="#top" className={`logo ${light ? 'logo--light' : ''}`} aria-label="Kartly home">
      <span className="logo__mark">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
          <path d="M9 2h6v7h7v6h-7v7H9v-7H2V9h7z" />
        </svg>
      </span>
      Kartly
    </a>
  );
}
