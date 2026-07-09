export function ProgressPanel({ stats, current, total }) {
  const completed = stats.known + stats.review;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="panel">
      <h2>Progress</h2>
      <div className="progress-track">
        <div style={{ width: `${percent}%` }} />
      </div>
      <dl className="stats">
        <div>
          <dt>Card</dt>
          <dd>{total === 0 ? 0 : current} / {total}</dd>
        </div>
        <div>
          <dt>Known</dt>
          <dd>{stats.known}</dd>
        </div>
        <div>
          <dt>Review</dt>
          <dd>{stats.review}</dd>
        </div>
      </dl>
    </div>
  );
}
