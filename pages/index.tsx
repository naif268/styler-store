export default function Home() {
  return (
    <div dir="rtl" style={{
      backgroundColor: "#000",
      color: "#fff",
      minHeight: "100vh",
      fontFamily: "sans-serif",
      padding: "2rem"
    }}>
      <h1 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: "bold" }}>
        مرحباً بك في <span style={{ color: "#fff" }}>STYLER</span>
      </h1>
      <h2 style={{ textAlign: "center", margin: "2rem 0" }}>الأقسام:</h2>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "2rem"
      }}>
        {[
          { name: "قسم القمصان 👔", image: "https://via.placeholder.com/200x150?text=Shirts", link: "/shirts" },
          { name: "قسم التيشيرتات 👕", image: "https://via.placeholder.com/200x150?text=T-Shirts", link: "/t-shirts" },
          { name: "قسم السراويل 👖", image: "https://via.placeholder.com/200x150?text=Pants", link: "/pants" },
          { name: "قسم الملابس الداخلية 🩲", image: "https://via.placeholder.com/200x150?text=Underwear", link: "/underwear" },
        ].map((item, index) => (
          <a key={index} href={item.link} style={{
            backgroundColor: "#fff",
            color: "#000",
            textDecoration: "none",
            width: "45%",
            maxWidth: "250px",
            borderRadius: "1rem",
            padding: "1rem",
            textAlign: "center"
          }}>
            <img src={item.image} alt={item.name} style={{ width: "100%", borderRadius: "0.5rem" }} />
            <p style={{ marginTop: "1rem", fontWeight: "bold" }}>{item.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
