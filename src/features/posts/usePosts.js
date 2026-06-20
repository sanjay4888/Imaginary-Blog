import { useState } from 'react'

const IMAGINARY_POSTS = [
  {id: 1, title: "Cyber Dragon v3.0", caption: "Breathes encrypted fire. VPN wings included.", tags: ["Dragon", "Tech"], image: "/images/1.jpg", likes: 42, likedByMe: false, comments: []},
  {id: 2, title: "Quantum Dinosaur", caption: "Exists in 7 timelines. Never goes extinct.", tags: ["Dinosaur", "Physics"], image: "/images/2.jpg", likes: 89, likedByMe: true, comments: []},
  {id: 3, title: "Hover Phoenix", caption: "Respawns with better battery life each time.", tags: ["Phoenix", "Gadget"], image: "/images/3.jpg", likes: 156, likedByMe: false, comments: []},
  {id: 4, title: "AI Unicorn", caption: "Predicts your dreams. Runs on moonlight.", tags: ["Unicorn", "AI"], image: "/images/4.jpg", likes: 203, likedByMe: true, comments: []},
  {id: 5, title: "Stealth Kraken", caption: "Invisible tentacles. Hacks submarines.", tags: ["Kraken", "Spy"], image: "/images/5.jpg", likes: 77, likedByMe: false, comments: []},
  {id: 6, title: "Time-Travel Griffin", caption: "Delivers your past mistakes as NFTs.", tags: ["Griffin", "Crypto"], image: "/images/6.jpg", likes: 91, likedByMe: false, comments: []},
  {id: 7, title: "Holographic Yeti", caption: "Only visible in metaverse. Leaves digital footprints.", tags: ["Yeti", "VR"], image: "/images/7.jpg", likes: 64, likedByMe: false, comments: []},
  {id: 8, title: "Solar Mermaid", caption: "Charges your phone via photosynthesis.", tags: ["Mermaid", "Green"], image: "/images/8.jpg", likes: 134, likedByMe: true, comments: []},
  {id: 9, title: "Drone Centaur", caption: "Half human, half delivery service.", tags: ["Centaur", "Logistics"], image: "/images/9.jpg", likes: 52, likedByMe: false, comments: []},
  {id: 10, title: "Nanobot Sphinx", caption: "Asks riddles. Answers in code.", tags: ["Sphinx", "Nano"], image: "/images/10.jpg", likes: 118, likedByMe: false, comments: []},
  {id: 11, title: "Cloud Hydra", caption: "Each head is a separate server.", tags: ["Hydra", "Cloud"], image: "/images/11.jpg", likes: 145, likedByMe: true, comments: []},
  {id: 12, title: "Bioluminescent Minotaur", caption: "Labyrinth comes with smart lighting.", tags: ["Minotaur", "IoT"], image: "/images/12.jpg", likes: 73, likedByMe: false, comments: []},
  {id: 13, title: "Anti-Gravity Pegasus", caption: "Commute above traffic. Runs on dreams.", tags: ["Pegasus", "Transport"], image: "/images/13.jpg", likes: 189, likedByMe: true, comments: []},
  {id: 14, title: "Neural Werewolf", caption: "Transforms when WiFi drops.", tags: ["Werewolf", "5G"], image: "/images/14.jpg", likes: 67, likedByMe: false, comments: []},
  {id: 15, title: "Blockchain Basilisk", caption: "Turns scammers to stone. Ledger eyes.", tags: ["Basilisk", "Web3"], image: "/images/15.jpg", likes: 221, likedByMe: false, comments: []},
  {id: 16, title: "Robotic Cyclops", caption: "Single eye = 8K camera. 360° vision DLC.", tags: ["Cyclops", "Robot"], image: "/images/16.jpg", likes: 98, likedByMe: true, comments: []},
  {id: 17, title: "Teleporting Golem", caption: "Made of pure cache memory.", tags: ["Golem", "Speed"], image: "/images/17.jpg", likes: 84, likedByMe: false, comments: []},
  {id: 18, title: "Fusion Chimera", caption: "Lion + Eagle + React Hooks.", tags: ["Chimera", "Code"], image: "/images/18.jpg", likes: 167, likedByMe: false, comments: []},
  {id: 19, title: "Dark Matter Leviathan", caption: "Invisible. Sinks data centers.", tags: ["Leviathan", "Space"], image: "/images/19.jpg", likes: 112, likedByMe: true, comments: []},
  {id: 20, title: "Smart Contract Fairy", caption: "Grants wishes. Terms & conditions apply.", tags: ["Fairy", "Legal"], image: "/images/20.jpg", likes: 76, likedByMe: false, comments: []},
  {id: 21, title: "Plasma Salamander", caption: "Cold fusion pet. Powers your house.", tags: ["Salamander", "Energy"], image: "/images/21.jpg", likes: 194, likedByMe: false, comments: []},
  {id: 22, title: "Void Kraken Pro", caption: "Consumes bugs. Deploys to production.", tags: ["Kraken", "DevOps"], image: "/images/22.jpg", likes: 143, likedByMe: true, comments: []},
  {id: 23, title: "Sentient Spaceship", caption: "FSD Level 5. Flies itself to Mars.", tags: ["Spaceship", "Tesla"], image: "/images/23.jpg", likes: 256, likedByMe: false, comments: []},
  {id: 24, title: "Infinite Library Owl", caption: "Knows every Stack Overflow answer.", tags: ["Owl", "Wisdom"], image: "/images/24.jpg", likes: 301, likedByMe: true, comments: []}
]

export function usePosts() {
  const [posts, setPosts] = useState(IMAGINARY_POSTS)
  const [ui, setUi] = useState({
    currentPage: 'list',
    selectedPostId: null,
    page: 1,
    searchQuery: '' // ONLY use searchQuery, not search
  })
  
  const POSTS_PER_PAGE = 6
  
  // FIXED: Changed from ui.search to ui.searchQuery
  const searchTerm = (ui.searchQuery || '').toLowerCase()
  
  const filteredPosts = posts.filter(post => {
    const title = (post.title || '').toLowerCase()
    const caption = (post.caption || '').toLowerCase()
    const tags = (post.tags || []).join(' ').toLowerCase() // ADDED: search tags too
    return title.includes(searchTerm) || caption.includes(searchTerm) || tags.includes(searchTerm)
  })
  
  const paginatedPosts = filteredPosts.slice(
    (ui.page - 1) * POSTS_PER_PAGE,
    ui.page * POSTS_PER_PAGE
  )
  
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const selectedPost = posts.find(p => p.id === ui.selectedPostId)
  
  const likePost = (id) => {
    setPosts(posts.map(post => {
      if (post.id !== id) return post
      const alreadyLiked = post.likedByMe
      return {
       ...post,
        likedByMe: !alreadyLiked,
        likes: alreadyLiked ? post.likes - 1 : post.likes + 1
      }
    }))
  }
  
  // FIXED: Accepts object from PostForm
  const addPost = (newPostData) => {
    const newPost = {
      id: Date.now(),
      title: newPostData.title,
      caption: newPostData.caption,
      tags: newPostData.tags.split(',').map(t => t.trim()).filter(t => t),
      image: newPostData.image || '/images/default.jpg',
      likes: 0,
      likedByMe: false,
      comments: []
    }
    setPosts(prev => [newPost, ...prev])
    setUi(prev => ({...prev, currentPage: 'list', page: 1, searchQuery: ''}))
  }
  
  const addComment = (postId, text) => {
    const newComment = {
      id: Date.now(),
      text: text.trim(),
      author: "You",
      createdAt: new Date().toISOString(),
      replies: []
    }
    setPosts(posts.map(post => {
      if (post.id !== postId) return post
      return {...post, comments: [newComment, ...post.comments] }
    }))
  }
  
  const setPage = (page) => setUi({...ui, page})
  // DELETED: setSearch - we use setUi directly in App.jsx
  
  return { 
    posts: paginatedPosts, 
    allPosts: posts,
    ui, 
    setUi, 
    selectedPost, 
    likePost, 
    addPost, 
    addComment,
    totalPages,
    setPage
  }
}