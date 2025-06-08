export default function UnderwearPage() {
  return (
    <div dir="rtl" style={{ backgroundColor: "#000", minHeight: "100vh", padding: "2rem", color: "#fff" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>قسم الملابس الداخلية 🩲</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} style={{ backgroundColor: "#fff", color: "#000", borderRadius: "1rem", padding: "1rem", width: "calc(50% - 1rem)" }}>
            <img src="https://via.placeholder.com/300x200?text=Underwear" alt="Underwear" style={{ width: "100%", borderRadius: "0.5rem" }} />
            <p style={{ marginTop: "0.5rem", textAlign: "center" }}>ملابس داخلية {i + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
