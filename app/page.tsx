"use client";
import React, { useState, useEffect } from 'react';

export default function BulletBoost() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [count, setCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false); // Sayfanın tam yüklendiğini anlamak için

  // Sayfa yüklendiğinde tarayıcı hafızasını oku
  useEffect(() => {
    const savedCount = localStorage.getItem('bulletCount');
    if (savedCount) {
      setCount(parseInt(savedCount));
    }
    setIsLoaded(true); // Artık tarayıcıdayız, her şey hazır
  }, []);

  const boostText = () => {
    // Önce kontrol: Hak bittiyse çalıştırma
    if (count >= 2) {
      alert("⚠️ Ücretsiz hakkın bitti kanka! TBD Touch Pro ile sınırsız mermi atabilirsin.");
      return;
    }

    const bullets = [
      "Spearheaded high-impact operations leading to a 40% increase in efficiency.",
      "Optimized strategic workflows and delivered peak performance under pressure.",
      "Transformed standard procedures into scalable, high-revenue models.",
      "Engineered automated solutions that reduced manual workload by 25%.",
      "Directed cross-functional teams to exceed quarterly sales targets by 15%."
    ];
    
    // Sayacı artır ve hafızaya kazı
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('bulletCount', newCount.toString());
    
    setResult(bullets[Math.floor(Math.random() * bullets.length)]);
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', padding: '20px' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px' }}>💥 BULLETBOOST</h1>
      <p style={{ color: '#888', marginBottom: '30px' }}>Don't just list tasks. Show impact.</p>
      
      <div style={{ width: '100%', maxWidth: '500px', backgroundColor: '#111', padding: '30px', borderRadius: '20px', border: '1px solid #333' }}>
        {/* Sadece sayfa yüklendiğinde hakkı göster ki kafa karışmasın */}
        {isLoaded && (
          <p style={{ color: '#444', fontSize: '0.8rem', textAlign: 'right', marginBottom: '10px' }}>
            Kalan Hak: {Math.max(0, 2 - count)}/2
          </p>
        )}
        
        <textarea 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ex: I managed customer relations for my Etsy shop..." 
          style={{ width: '100%', backgroundColor: '#000', border: '1px solid #444', color: '#fff', padding: '15px', borderRadius: '12px', marginBottom: '20px', minHeight: '120px', outline: 'none' }}
        />
        
        <button 
          onClick={boostText}
          disabled={isLoaded && count >= 2}
          style={{ 
            width: '100%', 
            backgroundColor: isLoaded && count >= 2 ? '#333' : '#fff', 
            color: isLoaded && count >= 2 ? '#888' : '#000', 
            padding: '15px', 
            borderRadius: '12px', 
            fontWeight: 'bold', 
            cursor: isLoaded && count >= 2 ? 'not-allowed' : 'pointer', 
            border: 'none' 
          }}
        >
          {isLoaded && count >= 2 ? "Hakkın Bitti ❌" : "Boost My Career 🚀"}
        </button>
        
        {result && (
          <div style={{ marginTop: '25px', padding: '20px', backgroundColor: '#1a1a1a', borderRadius: '12px', borderLeft: '4px solid #fff' }}>
            <p style={{ fontWeight: '500' }}>{result}</p>
          </div>
        )}
      </div>

      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <button 
          onClick={() => alert("Ödeme Sistemi Yükleniyor... TBD Touch Kalitesiyle!")}
          style={{ background: 'none', border: 'none', color: '#f39c12', textDecoration: 'underline', cursor: 'pointer' }}
        >
          Upgrade to Pro for $9/mo
        </button>
      </div>
    </div>
  );
}
