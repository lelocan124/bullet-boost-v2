"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const smartBoost = () => {
    setLoading(true);
    setTimeout(() => {
      let finalResult = "";
      const text = input.toLowerCase();

      const hasSport = text.includes("antrenör") || text.includes("koç") || text.includes("spor");
      const hasService = text.includes("garson") || text.includes("hizmet") || text.includes("kafe") || text.includes("restoran");

      if (hasSport && hasService) {
        finalResult = `🚀 Dual-Specialized Professional: Expertly integrated leadership dynamics from athletic coaching with high-pressure crisis management from the service industry to optimize operational workflows.`;
      } else if (hasSport) {
        finalResult = `🏆 Performance Strategy: Developed data-driven training regimens that improved athlete performance by 25% while fostering a culture of high-level discipline.`;
      } else if (hasService) {
        finalResult = `🤝 Client Relations: Streamlined high-volume service operations with 100% accuracy, maintaining top-tier customer satisfaction ratings during peak performance hours.`;
      } else {
        finalResult = `✨ Strategic Achievement: Successfully optimized the ${input} process through disciplined execution and result-oriented methodologies.`;
      }

      setResult(finalResult);
      setLoading(false);
    }, 1200);
  };

  return (
    <main style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh", fontFamily: "sans-serif" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", padding: "20px 40px", borderBottom: "1px solid #222" }}>
        <div style={{ fontWeight: "bold", fontSize: "1.2rem", letterSpacing: "1px" }}>💥 BULLETBOOST</div>
        <button style={{ backgroundColor: "#fff", color: "#000", border: "none", padding: "8px 20px", borderRadius: "20px", fontWeight: "bold", cursor: "pointer" }}>Upgrade - $9</button>
      </nav>

      <div style={{ maxWidth: "800px", margin: "80px auto", textAlign: "center", padding: "0 20px" }}>
        <h1 style={{ fontSize: "3.5rem", fontWeight: "900", marginBottom: "20px", background: "linear-gradient(to right, #fff, #666)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Don't just list tasks.<br/>Show impact.
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#888", marginBottom: "40px" }}>AI-powered resume optimizer for global careers.</p>

        <div style={{ background: "#111", padding: "30px", borderRadius: "24px", border: "1px solid #222" }}>
          <textarea 
            placeholder="E.g. I worked as a basketball coach and a waiter..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ width: "100%", height: "100px", background: "transparent", border: "none", color: "#fff", fontSize: "1.1rem", outline: "none", resize: "none" }}
          />
          <hr style={{ borderColor: "#222", margin: "20px 0" }} />
          <button 
            onClick={smartBoost}
            disabled={loading || !input}
            style={{ width: "100%", padding: "18px", borderRadius: "12px", backgroundColor: "#0070f3", color: "#fff", fontWeight: "bold", border: "none", cursor: "pointer", fontSize: "1.1rem" }}
          >
            {loading ? "AI is processing..." : "Boost My Career 🚀"}
          </button>
        </div>

        {result && (
          <div style={{ marginTop: "40px", padding: "25px", backgroundColor: "#0a2540", borderRadius: "20px", border: "1px solid #0070f3", textAlign: "left" }}>
            <p style={{ color: "#0070f3", fontWeight: "bold", marginBottom: "10px", fontSize: "0.8rem" }}>AI OPTIMIZED RESULT:</p>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>{result}</p>
          </div>
        )}
      </div>
    </main>
  );
}
