import React from 'react';

function BuggyNotification({ message, type }) {
  return (
    <div style={{ backgroundColor: '#fef3c7', padding: '10px 14px', borderRadius: '6px', borderLeft: '4px solid #f59e0b' }}>
      <strong style={{ color: '#92400e' }}>შეტყობინება: </strong>
      <span>{message}</span>
    </div>
  );
}

export default BuggyNotification;
