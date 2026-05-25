import { useState } from "react";
import { useNavigate } from 'react-router-dom'

import morningYogaImg from '../assets/images/featureBg.png'
import featureBg2 from '../assets/images/featured-card-2.png'





// Example: alternate data to pass into BestPicks
  const  gyms = [
    {
      id: 101,
      name: 'Morning Yoga',
      location: 'Abdali, Amman',
      badge: 'PREMIUM',
      badgeColor: '#000',
      badgeBg: '#fff',
      image: morningYogaImg,
    },
    {
      id: 102,
      name: 'HIIT Blast',
      location: 'Sweifieh, Amman',
      badge: 'RECOMMENDED',
      badgeColor: '#000',
      badgeBg: '#fff',
      image: featureBg2,
    },
    {
      id: 103,
      name: 'Pilates Flow',
      location: 'Jabal Amman',
      badge: 'NEW',
      badgeColor: '#000',
      badgeBg: '#fff',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80',
    },
  ]


const HeartIcon = ({ filled }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill={filled ? "#ef4444" : "none"} stroke={filled ? "#ef4444" : "white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const PinIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);



export default function BestPicks({ data, items, navigateTo = '/classDetails' }) {
  const navigate = useNavigate()
  const [likedIds, setLikedIds] = useState([]);

  const toggleLike = (id, e) => {
    e.stopPropagation();
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div style={{
      fontFamily: "'Inter', sans-serif",
      
      
      padding: "0",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
    }}>
      <div style={{
        width: "100%",
        maxWidth: "430px",
        
        
        padding: "28px 0 40px",
      }}>
        {/* Header */}
        <div style={{
          
        }}>
          <p style={{
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            color: "#9ca3af",
            margin: "0 0 4px",
            textTransform: "uppercase",
          }}>
            CURATED SELECTION
          </p>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
            <h2 style={{
              fontSize: "26px",
              fontWeight: 800,
              color: "#0f0f0f",
              margin: 0,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}>
              Best Picks for You
            </h2>
            <button style={{
              background: "none",
              border: "none",
              fontSize: "11px",
              fontWeight: 700,
              color: "#0f0f0f",
              letterSpacing: "0.08em",
              cursor: "pointer",
              padding: "4px 0",
              textTransform: "uppercase",
              textDecoration: "none",
              borderBottom: "1.5px solid #0f0f0f",
            }}>
              VIEW ALL
            </button>
          </div>
        </div>

        {/* Horizontal scroll cards */}
        <div className="mt-4 h-[360px]" style={{
          display: "flex",
          gap: "14px",
          overflowX: "auto",
          
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}>
          {(data || items || gyms).map((gym, i) => (
            <GymCard
              key={gym.id}
              gym={gym}
              liked={likedIds.includes(gym.id)}
              onLike={(e) => toggleLike(gym.id, e)}
              index={i}
              navigateTo={navigateTo}
            />
          ))}
        </div>
      </div>

      <style>{`
        div::-webkit-scrollbar { display: none; }
        .gym-card { cursor: pointer; transition: transform 0.2s ease; }
        .gym-card:hover { transform: translateY(-3px); }
        .like-btn { transition: transform 0.15s ease; }
        .like-btn:hover { transform: scale(1.2); }
        .like-btn:active { transform: scale(0.9); }
      `}</style>
    </div>
  );
}

function GymCard({ gym, liked, onLike, index, navigateTo = '/classDetails' }) {
  const navigate = useNavigate()
  return (
    <div
      className="gym-card h-[360px]"
      onClick={() => navigate(navigateTo)}
      style={{
        minWidth: "230px",
        borderRadius: "16px",
        overflow: "hidden",
        background: "#fff",
        boxShadow: "0 2px 16px rgba(0,0,0,0.10)",
        flexShrink: 0,
        animation: `fadeSlideIn 0.4s ease both`,
        animationDelay: `${index * 0.08}s`,
      }}
    >
      {/* Full background image card */}
      <div style={{ position: "relative", height: "360px", overflow: "hidden", width: "280px" }}>
        <img
          src={gym.image}
          alt={gym.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            filter: "grayscale(20%) brightness(0.88)",
            transition: "transform 0.4s ease",
          }}
          onMouseEnter={e => e.target.style.transform = "scale(1.04)"}
          onMouseLeave={e => e.target.style.transform = "scale(1)"}
        />

        {/* Gradient overlay — stronger at bottom */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 35%, rgba(0,0,0,0.75) 100%)",
        }} />

        {/* Heart — top right */}
        <button
          className="like-btn"
          onClick={onLike}
          style={{
            position: "absolute",
            top: "10px",
            right: "12px",
            
            border: "none",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            
          }}
        >
          <HeartIcon filled={liked} />
        </button>

        {/* Bottom info + badge */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "12px 14px 14px",
        }}>
          {/* Badge */}
          <div style={{
            display: "inline-block",
            background: gym.badgeBg,
            color: gym.badgeColor,
            fontSize: "9px",
            fontWeight: 800,
            letterSpacing: "0.1em",
            padding: "4px 8px",
            borderRadius: "5px",
            textTransform: "uppercase",
            marginBottom: "6px",
          }}>
            {gym.badge}
          </div>

          <h3 style={{
            fontSize: "20px",
            fontWeight: 800,
            color: "#fff",
            margin: "0 0 4px",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
          }}>
            {gym.name}
          </h3>

          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            color: "rgba(255,255,255,0.8)",
          }}>
            <PinIcon />
            <span style={{ fontSize: "12px", fontWeight: 500 }}>{gym.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
