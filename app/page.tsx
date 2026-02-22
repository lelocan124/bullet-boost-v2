"use client";
import React, { useState } from 'react';

export default function BulletBoost() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const boostText = () => {
    const bullets = [
      "Spearheaded high-impact operations leading to a 40% increase in efficiency.",
      "Optimized strategic workflows and delivered peak performance under pressure.",
      "Transformed standard procedures into scalable, high-revenue models."
    ];
    setResult(bullets[Math.floor(Math.random() * bullets.length)]);
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', padding: '20px' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px' }}>💥 BULLETBOOST</h1>
      <p style={{ color: '#888', marginBottom: '30px' }}>Don't just list tasks. Show impact.</p>
      
      <div style={{ width: '100%', maxWidth: '500px', backgroundColor: '#111', padding: '30px', borderRadius: '15px', border: '1px solid #333' }}>
        <textarea 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ex: I sold backpacks on Etsy..." 
          style={{ width: '100%', backgroundColor: '#000', border: '1px solid #444', color: '#fff', padding: '15px', borderRadius: '8px', marginBottom: '20px', minHeight: '100px' }}
        />
        <button 
          onClick={boostText}
          style={{ width: '100%', backgroundColor: '#fff', color: '#000', padding: '15px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', border: 'none' }}
        >
          Boost My Career 🚀
        </button>
        
        {result && (
          <div style={{ marginTop: '25px', padding: '15px', backgroundColor: '#222', borderRadius: '8px', borderLeft: '4px solid #fff' }}>
            <p style={{ fontSize: '0.9rem', color: '#aaa', marginBottom: '5px' }}>Mermi Takviyeli Sonuç:</p>
            <p style={{ fontWeight: '500' }}>{result}</p>
          </div>
        )}
      </div>
      <p style={{ marginTop: '20px', color: '#444', fontSize: '0.8rem' }}>Upgrade to Pro for $9/mo</p>
    </div>
  );
}
