import { useState } from 'react'

export default function PostForm({ addPost, setUi, ui }) {
  const [form, setForm] = useState({
    title: '',
    caption: '',
    tags: '',
    image: '/images/default.jpg'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.title || !form.caption) return
    addPost(form)
  }

  return (
    <div className="detail-container">
      <button 
        className="btn btn-ghost" 
        onClick={() => setUi({...ui, currentPage: 'list'})}
        style={{marginBottom: '20px'}}
      >
        ← Cancel
      </button>
      
      <h1 style={{textAlign: 'center', marginBottom: '30px'}}>Create New Creature</h1>
      
      <form onSubmit={handleSubmit} style={{maxWidth: '600px', margin: '0 auto'}}>
        <div className="form-group">
          <label>Creature Name</label>
          <input 
            className="form-input"
            value={form.title}
            onChange={e => setForm({...form, title: e.target.value})}
            placeholder="Quantum Llama"
            required
          />
        </div>
        
        <div className="form-group">
          <label>Description</label>
          <textarea 
            className="form-input"
            value={form.caption}
            onChange={e => setForm({...form, caption: e.target.value})}
            placeholder="Spits code. Debugs by staring at bugs."
            rows="3"
            required
          />
        </div>
        
        <div className="form-group">
          <label>Tags - comma separated</label>
          <input 
            className="form-input"
            value={form.tags}
            onChange={e => setForm({...form, tags: e.target.value})}
            placeholder="Llama, Quantum, Dev"
          />
        </div>
        
        <div className="form-group">
          <label>Image Path</label>
          <input 
            className="form-input"
            value={form.image}
            onChange={e => setForm({...form, image: e.target.value})}
            placeholder="/images/25.jpg"
          />
          <small style={{color: '#666'}}>Upload image to public/images/ first</small>
        </div>
        
        <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
          Create Creature
        </button>
      </form>
    </div>
  )
}