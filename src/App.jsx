import './App.css'
import { usePosts } from './features/posts/usePosts'
import PostsList from './features/posts/PostsList'
import PostDetail from './features/posts/PostDetail'
import PostForm from './features/posts/PostForm'

function App() {
  const { posts, setUi, ui, likePost, addComment, addPost, totalPages, setPage } = usePosts()
  
  const selectedPost = posts.find(p => p.id === ui.selectedPostId)
  
  return (
    <div className="app">
      <div className="blog-container">
        <h1 className="blog-title">Imaginary Blog</h1>
        <p className="blog-subtitle">Creatures & Tech That Don't Exist... Yet</p>
        
        {ui.currentPage === 'list' && (
          <>
            <div className="actions-bar">
              <button 
                className="btn btn-primary"
                onClick={() => setUi({...ui, currentPage: 'create'})}
              >
                + New Creature
              </button>
              <input 
                className="search-input"
                type="text"
                placeholder="Search dragons, AI, crypto..."
                value={ui.searchQuery}
                onChange={(e) => setUi({...ui, searchQuery: e.target.value, page: 1})}
              />
            </div>
            
            <PostsList 
              posts={posts}
              ui={ui}
              setUi={setUi}
              likePost={likePost}
            />

            {/* PAGINATION BUTTONS - THIS WAS MISSING */}
            {totalPages > 1 && (
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '10px',
                marginTop: '30px'
              }}>
                <button 
                  className="btn btn-ghost"
                  onClick={() => setPage(ui.page - 1)}
                  disabled={ui.page === 1}
                  style={{opacity: ui.page === 1 ? 0.5 : 1}}
                >
                  ← Prev
                </button>
                <span style={{
                  color: 'white',
                  alignSelf: 'center',
                  fontWeight: '600'
                }}>
                  Page {ui.page} of {totalPages}
                </span>
                <button 
                  className="btn btn-ghost"
                  onClick={() => setPage(ui.page + 1)}
                  disabled={ui.page === totalPages}
                  style={{opacity: ui.page === totalPages ? 0.5 : 1}}
                >
                  Next →
                </button>
              </div>
            )}
          </>
        )}
        
        {ui.currentPage === 'detail' && (
          <PostDetail 
            selectedPost={selectedPost}
            setUi={setUi}
            likePost={likePost}
            addComment={addComment}
            ui={ui}
          />
        )}
        
        {ui.currentPage === 'create' && (
          <PostForm 
            addPost={addPost} 
            setUi={setUi} 
            ui={ui} 
          />
        )}
      </div>
    </div>
  )
}

export default App