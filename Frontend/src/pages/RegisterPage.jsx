import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthModal from "../components/AuthModal";
import "../styles/auth.css";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  
  const [modal, setModal] = useState({ isOpen: false, type: "success", title: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password.length < 6) {
       setModal({
        isOpen: true,
        type: "error",
        title: "Password Lemah",
        message: "Password minimal 6 karakter biar akun kamu aman ya!",
        action: null
      });
      return;
    }

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/register`, formData);
      
      setModal({
        isOpen: true,
        type: "success",
        title: "Officially a Glow Girl!",
        message: "Akun berhasil dibuat. Yuk login dan mulai glowing bareng kita!",
        action: () => navigate("/login")
      });

    } catch (err) {
      setModal({
        isOpen: true,
        type: "error",
        title: "Oops!",
        message: err.response?.data?.message || "Gagal mendaftar.",
        action: () => setModal({ ...modal, isOpen: false })
      });
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-banner">
        <div className="banner-logo">GLOW•U</div>
        
        <div className="banner-content">
          <p>
            Join thousands of Glow Girls and discover your <span className="highlight-text">Perfect routine</span> today!
          </p>
        </div>
      </div>

      <div className="auth-form-container">
        <div className="auth-card">
          <div className="auth-header">
            <h2>Create Account</h2>
            <p>Isi data diri kamu untuk mulai bergabung.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nama Lengkap</label>
              <input 
                type="text" 
                placeholder="Nama panggilanmu"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required 
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                placeholder="email@kamu.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required 
              />
            </div>
            
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                placeholder="Buat password yang kuat"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required 
              />
            </div>

            <button type="submit" className="auth-btn">Register</button>
          </form>

          <div className="auth-footer">
            <p>Sudah punya akun? <Link to="/login" className="auth-link">Login di sini</Link></p>
          </div>
        </div>
      </div>

       <AuthModal 
        isOpen={modal.isOpen}
        type={modal.type}
        title={modal.title}
        message={modal.message}
        onClose={() => {
          setModal({ ...modal, isOpen: false });
          if (modal.type === "success" && modal.action) modal.action();
        }}
      />
    </div>
  );
}