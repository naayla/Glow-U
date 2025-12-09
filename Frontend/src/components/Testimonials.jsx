import { useEffect, useRef, useState } from "react";
import "../styles/testimonials.css";
import defaultTestimonials from "../data/testimonials";
import ReviewModal from "./ReviewModal";
import axios from "axios";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [liked, setLiked] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardsRef = useRef([]);

  const userSession = JSON.parse(localStorage.getItem("user_session"));

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/reviews`);

        const dbReviews = res.data.map((r) => ({
          id: r.id,
          name: r.name,
          role: "Glow Bestie",
          text: r.comment,
          rating: r.rating,
          isUser: true,
          avatar: `https://api.dicebear.com/9.x/micah/svg?seed=${r.name}&backgroundColor=ffdfbf,ffd5dc,c0aede,b6e3f4&radius=50`,
        }));

        setReviews([...dbReviews, ...defaultTestimonials]);
      } catch (err) {
        console.error(err);
        setReviews([...defaultTestimonials]);
      }
    };
    fetchReviews();
  }, []);

  const handleAddReview = async (newData) => {
    if (!userSession) return alert("Login dulu ya bestie!");

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/reviews`, {
        user_id: userSession.id,
        rating: newData.rating,
        comment: newData.text,
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
      alert("Gagal kirim review :( Coba lagi nanti.");
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    setTimeout(() => {
      const cards = document.querySelectorAll(".test-card");
      cards.forEach((c) => observer.observe(c));
    }, 100);
    return () => observer.disconnect();
  }, [reviews]);

  const handleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="test-header">
        <span className="test-tag">REAL STORIES</span>
        <h2 className="test-title">Voices From Glow Girls</h2>
        <p className="test-sub">
          Pendapat jujur dari para bestie{" "}
          <strong className="brand-highlight">Glow•U</strong>...
        </p>

        <button
          className="write-review-btn"
          onClick={() => setIsModalOpen(true)}
        >
          Tulis Pengalamanmu
        </button>
      </div>

      <div className="test-grid">
        {reviews.map((t, i) => (
          <article
            key={t.id}
            className={`test-card ${t.isUser ? "user-review" : ""}`}
            ref={(el) => (cardsRef.current[i] = el)}
            style={{ transitionDelay: `${(i % 4) * 150}ms` }}
          >
            <div className="quote-icon">❝</div>
            <p className="test-text">"{t.text}"</p>

            <div className="test-rating">{"⭐".repeat(t.rating || 5)}</div>

            <div className="test-profile">
              <img className="test-avatar" src={t.avatar} alt={t.name} />
              <div className="test-info">
                <div className="test-name">{t.name}</div>
                <div className="test-role">{t.role}</div>
              </div>
              <button
                className={`like-btn ${liked[t.id] ? "active" : ""}`}
                onClick={() => handleLike(t.id)}
              >
                {liked[t.id] ? "❤️" : "🤍"}
              </button>
            </div>
          </article>
        ))}
      </div>

      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddReview}
      />
    </section>
  );
}