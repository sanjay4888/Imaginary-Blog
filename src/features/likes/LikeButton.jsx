export default function LikeButton({ likedByMe, likes, onLike }) {
  return (
    <button 
      onClick={onLike}
      style={{
        background: likedByMe ? '#ff4757' : 'rgba(102, 126, 234, 0.1)',
        color: likedByMe ? 'white' : '#667eea',
        border: '2px solid',
        borderColor: likedByMe ? '#ff4757' : '#667eea',
        borderRadius: '25px',
        padding: '10px 20px',
        fontSize: '1rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.2s',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px'
      }}
      onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
      onMouseLeave={e => e.target.style.transform = 'scale(1)'}
    >
      {likedByMe ? '❤️' : '🤍'} {likedByMe ? 'Liked' : 'Like'} {likes}
    </button>
  )
}