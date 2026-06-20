import LikeButton from '../likes/LikeButton'
import CommentSection from '../comments/CommentSection'

export default function PostDetail({ selectedPost, setUi, likePost, addComment, ui }) {
  if (!selectedPost) {
    return (
      <div className="detail-container">
        <button 
          className="btn btn-ghost" 
          onClick={() => setUi({...ui, currentPage: 'list', selectedPostId: null})}
        >
          ← Back
        </button>
        <p>Post not found</p>
      </div>
    )
  }
  
  return (
    <div className="detail-container">
      <button 
        className="btn btn-primary" 
        onClick={() => setUi({...ui, currentPage: 'list', selectedPostId: null})}
        style={{
          marginBottom: '30px',
          position: 'relative',
          zIndex: 50
        }}
      >
        ← Back to List
      </button>
      
      <div className="post-image" style={{height: '400px', margin: '0 0 30px 0'}}>
        <img src={selectedPost.image} alt={selectedPost.title} />
      </div>
      
      <h1 style={{
        fontSize: '2.5rem', 
        marginBottom: '15px', 
        textAlign: 'center',
        lineHeight: '1.2'
      }}>
        {selectedPost.title}
      </h1>
      
      <p style={{
        fontSize: '1.2rem', 
        color: '#666', 
        marginBottom: '25px', 
        textAlign: 'center',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        {selectedPost.caption}
      </p>
      
      <div style={{marginBottom: '30px', textAlign: 'center'}}>
        {selectedPost.tags.map(tag => (
          <span key={tag} className="tag" style={{margin: '0 5px'}}>{tag}</span>
        ))}
      </div>
      
      <div style={{textAlign: 'center', marginBottom: '30px'}}>
        <LikeButton 
          likedByMe={selectedPost.likedByMe}
          likes={selectedPost.likes}
          onLike={() => likePost(selectedPost.id)}
        />
      </div>
      
      <CommentSection 
        postId={selectedPost.id}
        comments={selectedPost.comments}
        addComment={addComment}
      />
    </div>
  )
}