import { useState } from 'react'

export default function CreatePost({ addPost, setUi, ui = {} }) { // Add = {} fallback
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  
  const handleBack = () => {
    if (setUi) {
      setUi({...ui, currentPage: 'list', selectedPostId: null})
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !addPost) return
    addPost(title, content)
    setTitle('')
    setContent('')
  }
  
  return (
    <div className="detail-container">
      <button 
        className="btn btn-ghost"
        onClick={handleBack}
        style={{marginBottom: '20px'}}
      >
        ← Cancel
      </button>
      
      <h2 style={{fontSize: '2rem', marginBottom: '20px'}}>Create New Creature</h2>
      
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Creature name... e.g. Laser Shark"
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={{
            display: 'block', 
            width: '100%', 
            padding: '15px', 
            marginBottom: '15px',
            border: '2px solid #e0e0e0',
            borderRadius: '12px',
            fontSize: '16px',
            boxSizing: 'border-box'
          }}
        />
        <textarea 
          placeholder="Description... e.g. Shoots lasers. Lives in cloud."
          value={content}
          onChange={e => setContent(e.target.value)}
          rows={6}
          style={{
            display: 'block', 
            width: '100%', 
            padding: '15px', 
            marginBottom: '15px',
            border: '2px solid #e0e0e0',
            borderRadius: '12px',
            fontSize: '16px',
            fontFamily: 'inherit',
            boxSizing: 'border-box',
            resize: 'vertical'
          }}
        />
        <button 
  className="btn btn-ghost"
  onClick={() => setUi({...ui, currentPage: 'list', selectedPostId: null, page: 1, search: ''})}
  style={{marginBottom: '20px'}}
>
  ← Cancel
</button>
      </form>
    </div>
  )
}