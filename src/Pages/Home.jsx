// Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import axios from 'axios';

function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const session = localStorage.getItem('session');
    if (session) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await axios.get('https://sew-smooth.com/api/featured-products');
        if (response.status === 200) {
          setFeaturedProducts(response.data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchFeaturedProducts();
  }, []);

  const categories = [
    { id: 'all', name: 'All Projects', icon: '🧵' },
    { id: 'quilting', name: 'Quilting', icon: '🧶' },
    { id: 'garments', name: 'Garments', icon: '👚' },
    { id: 'accessories', name: 'Accessories', icon: '👜' },
    { id: 'embroidery', name: 'Embroidery', icon: '✨' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? featuredProducts 
    : featuredProducts.filter(product => product.category === activeCategory);

  return (
    <div className="sewing-home">
      {/* Hero Section */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Craft Your Imagination with Sew Smooth</h1>
          <p>Discover patterns, fabrics, and inspiration for your next sewing project</p>
          <div className="hero-buttons">
            <Link to="/shop" className="btn btn-primary">Explore Patterns</Link>
            <Link to="/tutorials" className="btn btn-secondary">Learn Techniques</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/sewing-hero.jpg" alt="Sewing materials arranged beautifully" />
        </div>
      </section>

      {/* Category Navigation */}
      <section className="category-nav">
        <h2>Find Your Next Project</h2>
        <div className="category-buttons">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="featured-projects">
        <h2>Featured Creations</h2>
        <div className="projects-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="project-card">
              <div className="project-image">
                <img src={product.image} alt={product.name} />
                <div className="project-overlay">
                  <Link to={`/project/${product.id}`} className="view-project">View Project</Link>
                </div>
              </div>
              <div className="project-info">
                <h3>{product.name}</h3>
                <p className="project-difficulty">Difficulty: {product.difficulty}</p>
                <p className="project-time">
                  <span className="time-icon">⏱</span> 
                  {product.timeRequired}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section className="community-section">
        <div className="community-content">
          <div className="community-text">
            <h2>Join Our Stitching Community</h2>
            <p>Share your projects, get feedback, and connect with fellow sewing enthusiasts from around the world.</p>
            <div className="community-stats">
              <div className="stat">
                <span className="stat-number">5,000+</span>
                <span className="stat-label">Active Members</span>
              </div>
              <div className="stat">
                <span className="stat-number">12,000+</span>
                <span className="stat-label">Projects Shared</span>
              </div>
              <div className="stat">
                <span className="stat-number">200+</span>
                <span className="stat-label">Free Patterns</span>
              </div>
            </div>
            {isLoggedIn ? (
              <Link to="/community" className="btn btn-primary">Visit Community</Link>
            ) : (
              <Link to="/signup" className="btn btn-primary">Join Now</Link>
            )}
          </div>
          <div className="community-showcase">
            <div className="showcase-grid">
              <div className="showcase-item">
                <img src="/images/community-1.jpg" alt="Community project 1" />
              </div>
              <div className="showcase-item">
                <img src="/images/community-2.jpg" alt="Community project 2" />
              </div>
              <div className="showcase-item">
                <img src="/images/community-3.jpg" alt="Community project 3" />
              </div>
              <div className="showcase-item">
                <img src="/images/community-4.jpg" alt="Community project 4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorial Spotlight */}
      <section className="tutorial-spotlight">
        <h2>Weekly Tutorial Spotlight</h2>
        <div className="tutorial-content">
          <div className="tutorial-video">
            <div className="video-container">
              <video controls poster="/images/tutorial-thumbnail.jpg">
                <source src="/video/beginner-quilt-tutorial.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="tutorial-info">
            <h3>Beginner-Friendly Quilted Table Runner</h3>
            <p className="tutorial-description">
              Learn how to create a beautiful quilted table runner with our step-by-step guide. 
              Perfect for beginners looking to practice straight line quilting and binding techniques.
            </p>
            <div className="tutorial-meta">
              <div className="meta-item">
                <span className="meta-icon">⏱</span>
                <span>45 minutes</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">📏</span>
                <span>Intermediate</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">🧵</span>
                <span>Quilting Cotton</span>
              </div>
            </div>
            <Link to="/tutorials/beginner-quilt" className="btn btn-secondary">
              Watch Full Tutorial
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-signup">
        <div className="newsletter-content">
          <h2>Get Inspired Monthly</h2>
          <p>Join our newsletter for free patterns, exclusive tutorials, and early access to new fabric collections.</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="email-input"
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
          <p className="newsletter-note">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;