import { useState } from 'react'

export default function CommentSection({ postId, comments, addComment }) {
  const [text, setText] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    addComment(postId, text)
    setText('')
  }
  
  return (
    <div style={{marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '30px'}}>
      <h3 style={{fontSize: '1.5rem', marginBottom: '20px'}}>Comments ({comments.length})</h3>
      <form onSubmit={handleSubmit} style={{marginBottom: '25px', display: 'flex', gap: '10px'}}>
        <input
          placeholder="Add a comment..."
          value={text}
          onChange={e => setText(e.target.value)}
          style={{
            flex: 1,
            padding: '12px 16px',
            border: '2px solid #e0e0e0',
            borderRadius: '12px',
            fontSize: '15px'
          }}
        />
        <button type="submit" className="btn btn-primary">Post</button>
      </form>
      
      {comments.map(comment => (
        <div key={comment.id} style={{
          background: '#f8f8f8',
          padding: '15px',
          borderRadius: '12px',
          marginBottom: '12px'
        }}>
          <strong style={{color: '#667eea'}}>{comment.author}</strong>
          <p style={{marginTop: '5px', color: '#333'}}>{comment.text}</p>
        </div>
      ))}
    </div>
  )
}