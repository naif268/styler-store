export default function Home() {
  const sections = [
    {
      name: "قسم القمصان 👔",
      image: "https://via.placeholder.com/200x150?text=قمصان",
      link: "/shirts",
    },
    {
      name: "قسم التيشيرتات 👕",
      image: "https://via.placeholder.com/200x150?text=تيشيرتات",
      link: "/t-shirts",
    },
    {
      name: "قسم السراويل 👖",
      image: "https://via.placeholder.com/200x150?text=سراويل",
      link: "/pants",
    },
    {
      name: "قسم الملابس الداخلية 🩲",
      image: "https://via.placeholder.com/200x150?text=ملابس+داخلية",
      link: "/underwear",
    },
  ];

  return (
    <div dir="rtl" style={{
      backgroundColor: "#000",
      minHeight: "100vh",
      color: "#fff",
      padding: "2rem",
      fontFamily: "sans-serif"
    }}>
      <h1 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: "bold" }}>
        مرحباً بك في <span style={{ color: "#fff" }}>STYLER</span>
      </h1>
      <h2 style={{ textAlign: "center", margin: "1.5rem 0" }}>الأقسام:</h2>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1.5rem",
      }}>
        {sections.map((item, index) => (
          <a
            key={index}
            href={item.link}
            style={{
              backgroundColor: "#fff",
              color: "#000",
              width: "calc(50% - 1rem)",
              maxWidth: "300px",
              textDecoration: "none",
              borderRadius: "1rem",
              padding: "1rem",
              boxSizing: "border-box",
              textAlign: "center"
            }}
          >
            <img src={item.image} alt={item.name} style={{ width: "100%", borderRadius: "0.5rem" }} />
            <p style={{ marginTop: "1rem", fontWeight: "bold" }}>{item.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
