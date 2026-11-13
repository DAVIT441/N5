import React from 'react';

function MovieCard({
  title,
  year,
  genre,
  rating,
  director = 'უცნობი',
  duration = 'N/A',
  posterUrl = 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400',
  onAddToWatchlist,
  isInWatchlist = false
}) {
  return (
    <div 
      className="movie-card"
      style={{
        border: '1px solid #334155',
        borderRadius: '12px',
        backgroundColor: '#1e293b',
        color: '#f8fafc',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(56, 189, 248, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.4)';
      }}
    >
      <div style={{ position: 'relative', width: '100%', height: '220px', backgroundColor: '#0f172a' }}>
        <img
          src={posterUrl}
          alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <span style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          backgroundColor: 'rgba(15, 23, 42, 0.85)',
          color: '#fbbf24',
          padding: '4px 8px',
          borderRadius: '6px',
          fontSize: '12px',
          fontWeight: 'bold',
          border: '1px solid #d97706',
          backdropFilter: 'blur(4px)'
        }}>
          რეიტინგი: {rating}
        </span>
      </div>

      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{
              fontSize: '11px',
              backgroundColor: '#0284c7',
              color: '#ffffff',
              padding: '2px 8px',
              borderRadius: '10px',
              fontWeight: 'bold',
              letterSpacing: '0.5px'
            }}>
              {genre}
            </span>
            <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '500' }}>
              ხანგრძლივობა: {duration} | წელი: {year}
            </span>
          </div>

          <h3 style={{ margin: '8px 0 6px 0', fontSize: '18px', color: '#f1f5f9', fontWeight: 'bold' }}>
            {title}
          </h3>

          <p style={{ margin: '0 0 14px 0', fontSize: '12px', color: '#94a3b8' }}>
            რეჟისორი: <span style={{ color: '#cbd5e1' }}>{director}</span>
          </p>
        </div>

        <button
          onClick={onAddToWatchlist}
          disabled={isInWatchlist}
          style={{
            width: '100%',
            backgroundColor: isInWatchlist ? '#334155' : '#0284c7',
            color: isInWatchlist ? '#94a3b8' : '#ffffff',
            border: 'none',
            padding: '10px',
            borderRadius: '8px',
            cursor: isInWatchlist ? 'default' : 'pointer',
            fontWeight: 'bold',
            fontSize: '13px',
            transition: 'background-color 0.2s',
            boxShadow: isInWatchlist ? 'none' : '0 2px 4px rgba(2, 132, 199, 0.4)'
          }}
        >
          {isInWatchlist ? 'დამატებულია' : '+ Watchlist-ში დამატება'}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
