"use client";
import React, { useState } from 'react';

export default function BulletBoost() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const boostText = () => {
    const bullets = [
      "Spearheaded high-impact operations leading to a 40% increase in efficiency.",
      "Optimized strategic workflows and delivered peak performance under pressure.",
      "Transformed standard procedures into scalable, high-revenue models.",
      "Engineered automated solutions that reduced manual workload by 25%.",
      "Directed cross-functional teams to exceed quarterly sales targets by 15%."
    ];
    setResult(bullets[Math.floor(Math.random() * bullets.length)]);
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', padding: '20px' }}>
      {/* Header */}
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px', letterSpacing: '-1px' }}>💥 BULLETBOOST</h1>
      <p style={{ color: '#888', marginBottom: '30px', fontSize: '1.1rem' }}>Don't just list tasks. Show impact.</p>
      
      {/* Main Card */}
      <div style={{ width: '100%', maxWidth: '500px', backgroundColor: '#111', padding: '30px', borderRadius: '20px', border: '1px solid #333', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
        <label style={{ display: 'block', marginBottom: '10px', color: '#aaa', fontSize: '0.9rem' }}>What did you do today?</label>
        <textarea 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ex: I managed customer relations for my Etsy shop..." 
          style={{ width: '100%', backgroundColor: '#000', border: '1px solid #444', color: '#fff', padding: '15px', borderRadius: '12px', marginBottom: '20px', minHeight: '120px', fontSize: '1rem', outline: 'none', resize: 'none' }}
        />
        <button 
          onClick={boostText}
          style={{ width: '100%', backgroundColor: '#fff', color: '#000', padding: '15px', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', border: 'none', fontSize: '1rem', transition: '0.3s' }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#ccc'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#fff'}
        >
          Boost My Career 🚀
        </button>
        
        {/* Result Area */}
        {result && (
          <div style={{ marginTop: '25px', padding: '20px', backgroundColor: '#1a1a1a', borderRadius: '12px', borderLeft: '4px solid #fff', animation: 'fadeIn 0.5s ease-in' }}>
            <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Mermi Takviyeli Sonuç:</p>
            <p style={{ fontWeight: '500', lineHeight: '1.5', fontSize: '1.1rem' }}>{result}</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <p style={{ color: '#444', fontSize: '0.85rem' }}>
          TBD Touch Enterprise Solution <br />
          <span style={{ color: '#222' }}>Upgrade to Pro for $9/mo</span>
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
