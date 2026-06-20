import LikeButton from '../likes/LikeButton'

export default function PostsList({ posts, ui, setUi, likePost }) {
  // SAFETY: Default to empty string if searchQuery is undefined
  const query = (ui.searchQuery || '').toLowerCase()
  
  const filteredPosts = posts.filter(post => {
    // SAFETY: Check if fields exist before calling toLowerCase
    const title = post.title?.toLowerCase() || ''
    const caption = post.caption?.toLowerCase() || ''
    const tags = post.tags || []
    
    return title.includes(query) ||
           caption.includes(query) ||
           tags.some(tag => (tag || '').toLowerCase().includes(query))
  })

  if (filteredPosts.length === 0) {
    return (
      <div style={{textAlign: 'center', padding: '40px', color: 'white'}}>
        <h2>No creatures found</h2>
        <p>Try searching for something else or create a new creature</p>
      </div>
    )
  }

  return (
    <div className="posts-grid">
      {filteredPosts.map(post => (
        <div 
          key={post.id} 
          className="post-card"
          onClick={() => setUi({...ui, currentPage: 'detail', selectedPostId: post.id})}
        >
          <div className="post-image">
            <img src={post.image} alt={post.title || 'Creature'} />
          </div>
          
          <h3 className="post-title">{post.title || 'Untitled'}</h3>
          <p className="post-caption">{post.caption || 'No description'}</p>
          
          <div className="tags-container">
            {(post.tags || []).map((tag, index) => (
              <span key={`${tag}-${index}`} className="tag">{tag}</span>
            ))}
          </div>
          
          <div onClick={(e) => e.stopPropagation()}>
            <LikeButton 
              likedByMe={post.likedByMe || false}
              likes={post.likes || 0}
              onLike={() => likePost(post.id)}
            />
          </div>
        </div>
      ))}
    </div>
  )
}