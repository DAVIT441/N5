import React from 'react';

function BookCard({
  title,
  author,
  price = 0,
  rating = 5.0,
  isBestSeller = false,
  categories = []
}) {
  return (
    <div style={{
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '16px',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative'
    }}>
      {isBestSeller && (
        <span style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          backgroundColor: '#fef08a',
          color: '#854d0e',
          fontSize: '11px',
          fontWeight: 'bold',
          padding: '2px 8px',
          borderRadius: '12px',
          border: '1px solid #fde047'
        }}>
          ბესტსელერი
        </span>
      )}

      <div>
        <h3 style={{ margin: '0 0 6px 0', fontSize: '18px', color: '#1e293b', paddingRight: isBestSeller ? '90px' : '0' }}>
          {title}
        </h3>
        <p style={{ margin: '0 0 10px 0', color: '#64748b', fontSize: '14px' }}>
          ავტორი: <strong>{author}</strong>
        </p>

        {categories.length > 0 && (
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
            {categories.map((cat, index) => (
              <span
                key={`${cat}-${index}`}
                style={{
                  backgroundColor: '#f1f5f9',
                  color: '#475569',
                  fontSize: '11px',
                  padding: '2px 8px',
                  borderRadius: '4px'
                }}
              >
                #{cat}
              </span>
            ))}
          </div>
        )}
      </div>

      <div style={{
        borderTop: '1px solid #f1f5f9',
        paddingTop: '12px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{ fontSize: '13px', color: '#ea580c', fontWeight: 'bold' }}>
          რეიტინგი: {rating} / 5.0
        </span>
        <span style={{ fontSize: '17px', fontWeight: 'bold', color: '#0284c7' }}>
          {price > 0 ? `${price} GEL` : 'უფასო'}
        </span>
      </div>
    </div>
  );
}

export default BookCard;
