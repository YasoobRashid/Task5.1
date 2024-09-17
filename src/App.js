import React, { useState } from 'react';
import './App.css';

function App() {
  const [postType, setPostType] = useState('question'); // State to track post type
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [abstract, setAbstract] = useState(''); // For article abstract
  const [isPosting, setIsPosting] = useState(false); // To simulate "posting"

  // Function to handle post type change
  const handlePostTypeChange = (event) => {
    setPostType(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Simulate posting action
    setIsPosting(true);

    setTimeout(() => {
      // Reset the form after 2 seconds to simulate completion
      setIsPosting(false);
      setTitle('');
      setDescription('');
      setTags('');
      setAbstract('');
      alert('Post submitted!');
    }, 2000); // Simulate 2 second delay for posting
  };

  return (
    <div className="App">
      <h1>New Post</h1>

      <form onSubmit={handleSubmit}>
        {/* Post Type Selection */}
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

        {/* Conditional Rendering Based on Post Type */}
        {postType === 'question' ? (
          <>
            {/* Question Form */}
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
            {/* Article Form */}
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

        {/* Tags Input */}
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

        {/* Submit Button */}
        <button type="submit" disabled={isPosting}>
          {isPosting ? 'Posting...' : 'Post'}
        </button>
      </form>
    </div>
  );
}

export default App;
