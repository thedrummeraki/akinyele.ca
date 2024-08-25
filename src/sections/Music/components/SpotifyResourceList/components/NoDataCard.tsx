export default function NoDataCard() {
  return (
    <div className="artist">
      <div className="image" style={{ width: "100%", height: 125 }} />
      <div
        className="info"
        style={{ display: "flex", flexDirection: "column", gap: 7.5 }}
      >
        <span className={`name`}>--</span>
        <small>--</small>
      </div>
    </div>
  );
}
