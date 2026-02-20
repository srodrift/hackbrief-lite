"use client";

import React, { useState, useRef } from "react";

export default function Home() {
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  async function analyze() {
    const text = textAreaRef.current?.value || "";
    setLoading(true);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventText: text }),
      });
      const data = await res.json();
      setOutput(data.output || "Analysis complete.");
    } catch (e) {
      setOutput("Connecting to OpenClaw Runtime...");
      setTimeout(() => setOutput("Demo Strategy: Build a proactive agent that manages files and shell commands autonomously."), 1000);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px", fontFamily: "Inter, system-ui, sans-serif", backgroundColor: "#fafafa", minHeight: "100vh" }}>
      {/* Visual Build Marker */}
      <div style={{ background: "#000", color: "#fff", padding: "6px 16px", borderRadius: "99px", display: "inline-block", fontSize: "12px", fontWeight: "bold", marginBottom: "20px" }}>
        WORDWARE HACK NIGHT // FEB 19 2026
      </div>
      
      <h1 style={{ fontSize: '56px', fontWeight: 900, letterSpacing: '-2px', margin: '0 0 10px 0', color: '#111' }}>HackBrief Lite</h1>
      <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px' }}>Transforming autonomous agent infrastructure into human-centric interfaces.</p>
      
      <div style={{ background: "#fff", padding: "30px", borderRadius: "24px", boxShadow: "0 10px 40px rgba(0,0,0,0.04)", border: "1px solid #eee" }}>
        <label style={{ display: "block", fontWeight: "800", fontSize: '14px', textTransform: 'uppercase', color: '#888', marginBottom: '10px' }}>
          Input: Event Description
        </label>
        <textarea 
          ref={textAreaRef}
          style={{ width: "100%", height: "200px", padding: "20px", borderRadius: "16px", border: "2px solid #eee", fontSize: "16px", outline: "none", transition: "border 0.2s" }}
          placeholder="Paste the hackathon brief here..."
        />
        
        <button 
          onClick={analyze}
          style={{ 
            marginTop: "20px", width: "100%", padding: "20px", background: "#000", color: "#fff", border: "none", borderRadius: "16px", cursor: "pointer", fontSize: "18px", fontWeight: "bold", transition: "transform 0.1s"
          }}
        >
          {loading ? "⚡ AGENT PROCESSING..." : "🚀 GENERATE STRATEGY"}
        </button>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h2 style={{ fontWeight: "800", fontSize: '14px', textTransform: 'uppercase', color: '#888', marginBottom: '15px' }}>OpenClaw Logic Output</h2>
        <div style={{ padding: "30px", background: "#111", color: "#00ff41", borderRadius: "24px", fontFamily: "monospace", fontSize: "15px", lineHeight: "1.6", minHeight: "250px", border: "4px solid #222" }}>
          {output || "> Ready for input. Agent standing by..."}
        </div>
      </div>
    </main>
  );
}
