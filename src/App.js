import React, { useState } from 'react';
import './App.css';

function App() {
  const [postType, setPostType] = useState('question'); 
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [abstract, setAbstract] = useState(''); 
  const [isPosting, setIsPosting] = useState(false); 

  const handlePostTypeChange = (event) => {
    setPostType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setIsPosting(true);

    setTimeout(() => {
      setIsPosting(false);
      setTitle('');
      setDescription('');
      setTags('');
      setAbstract('');
      alert('Post submitted!');
    }, 2000); 
  };

  return (
    <div className="App">
      <h1>New Post</h1>

      <form onSubmit={handleSubmit}>
        <div className="post-type">
          <label>Select Post Type: </label>
          <div className="post-type-options">
            <input
              type="radio"
              value="question"
              checked={postType === 'question'}
              onChange={handlePostTypeChange}
            />
            <label>Question</label>

            <input
              type="radio"
              value="article"
              checked={postType === 'article'}
              onChange={handlePostTypeChange}
            />
            <label>Article</label>
          </div>
        </div>

        {postType === 'question' ? (
          <>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                placeholder="Start your question with how, what, why, etc."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                placeholder="Describe your problem"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
          </>
        ) : (
          <>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                placeholder="Enter a descriptive title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Abstract</label>
              <textarea
                placeholder="Enter a 1-paragraph abstract"
                value={abstract}
                onChange={(e) => setAbstract(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Article Text</label>
              <textarea
                placeholder="Enter the article text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
          </>
        )}

        <div className="form-group">
          <label>Tags</label>
          <input
            type="text"
            placeholder="Please add up to 3 tags to describe what your post is about"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={isPosting}>
          {isPosting ? 'Posting...' : 'Post'}
        </button>
      </form>
    </div>
  );
}

export default App;
