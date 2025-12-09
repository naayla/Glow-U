import React, { useState, useEffect } from "react";
import { useLocation, Link, Navigate } from "react-router-dom";
import routineData from "../data/routineData";
import RoutineStep from "../components/RoutineStep";
import "../styles/routine.css";


const CelebrationModal = ({ onClose, timeMode}) => (
  <div className="celebration-overlay" onClick={onClose}>
    <div className="celebration-card" onClick={(e) => e.stopPropagation()}>
      <div className="confetti-icon">{timeMode === 'am' ? '☀️' : '🌙'}</div>
      <h2>{timeMode === 'am' ? 'Morning Glow Unlocked!' : 'Sweet Dreams, Bestie!'}</h2>
      <p>
        {timeMode === 'am' 
          ? "Kulitmu sudah siap menghadapi hari. Jangan lupa re-apply sunscreen ya!" 
          : "Skincare sudah lengkap. Sekarang saatnya kulitmu beristirahat dan regenerasi."}
      </p>
      <button className="celebration-btn" onClick={onClose}>Yay, I'm Ready!</button>
    </div>
  </div>
);

export default function RoutinePage() {
  const location = useLocation();
  const { brandName, skinType } = location.state || {}; 

  const todayIndex = new Date().getDay(); 
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [selectedDay, setSelectedDay] = useState(days[todayIndex]);
  const [timeMode, setTimeMode] = useState("am");
  
  const fullDaysName = {
    "Sun": "Sunday",
    "Mon": "Monday",
    "Tue": "Tuesday",
    "Wed": "Wednesday",
    "Thu": "Thursday",
    "Fri": "Friday",
    "Sat": "Saturday"
  };
  
  const [completedSteps, setCompletedSteps] = useState([]);
  const [showCelebration, setShowCelebration] = useState(false);

  if (!brandName) return <Navigate to="/recommendations" replace />;

  const brandRoutine = routineData[brandName] || routineData["default"];  
  const dailySteps = brandRoutine[timeMode] || []; 
  const weeklyTreatments = brandRoutine.weekly || [];
  const todaysSpecial = weeklyTreatments.find(t => t.day && t.day.includes(selectedDay));

  const storageKey = `glowu_${brandName}_${selectedDay}_${timeMode}`;

  useEffect(() => {
    const savedData = localStorage.getItem(storageKey);
    if(savedData)
    {
      try {
        const parsed = JSON.parse(savedData);
        if (Array.isArray(parsed))
        {
          setCompletedSteps(parsed);
        }
        else
        {
          setCompletedSteps([]);
        }
      } catch (e) {
        console.error("Error parsing saved routine data:", e);
        setCompletedSteps([]);
      }
    }
    else
    {
      setCompletedSteps([]);
    }
    setShowCelebration(false);
  }, [brandName, selectedDay, timeMode, storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(completedSteps));
  }, [completedSteps, storageKey]);
  
  const totalSteps = dailySteps.length + (todaysSpecial && timeMode === "pm" ? 1 : 0);
  const progress = totalSteps > 0 ? (completedSteps.length / totalSteps) * 100 : 0;

  useEffect(() => {
    if (progress === 100 && totalSteps > 0)
    {
      const timeout = setTimeout(() => setShowCelebration(true), 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, totalSteps]);

  const toggleCheck = (index) => {
    if (completedSteps.includes(index)) {
      setCompletedSteps(completedSteps.filter((i) => i !== index));
    } else {
      setCompletedSteps([...completedSteps, index]);
    }
  };


  return (
    <section className={`routine-page ${timeMode}`}>
      <div className="routine-header">
        <Link to="/recommendations" className="back-btn">← Back</Link>
        <span className="routine-tag">DERMATOLOGY PLAN</span>
        <h1 className="routine-title">
          Your <span className="highlight">{brandName}</span> Schedule
        </h1>
        <p className="routine-sub">
          Panduan langkah demi langkah untuk kulit <strong>{skinType}</strong> kamu.
        </p>
      </div>
      
      <div className="day-selector-container">
        <div className="day-selector">
            {days.map((day) => (
                <button 
                    key={day}
                    className={`day-btn ${selectedDay === day ? "active" : ""}`}
                    onClick={() => { setSelectedDay(day); setCompletedSteps([]); }}
                >
                    <span className="day-name">{day}</span>
                    {weeklyTreatments.find(t => t.day && t.day.includes(day)) && <span className="day-dot"></span>}
                </button>
            ))}
        </div>
      </div>
      {/* Time Switcher */}
      <div className="time-switcher">
        <button 
          className={`time-btn ${timeMode === "am" ? "active" : ""}`}
          onClick={() => { setTimeMode("am"); setCompletedSteps([]); }} // Reset checklist saat ganti waktu
        >
          ☀️ Morning Glow (07:00)
        </button>
        <button 
          className={`time-btn ${timeMode === "pm" ? "active" : ""}`}
          onClick={() => { setTimeMode("pm"); setCompletedSteps([]); }}
        >
          🌙 Night Repair (19:00)
        </button>
      </div>

      <div className="progress-container">
        <div className="progress-label">
          <span>{fullDaysName[selectedDay]}'s Goals</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      {todaysSpecial && timeMode === "pm" && (
         <div className="special-card">
            <div className="special-icon">{todaysSpecial.icon}</div>
            <div className="special-content">
                <h4>{todaysSpecial.day} Special Treatment</h4>
                <h3>{todaysSpecial.type}</h3>
                <p>{todaysSpecial.desc}</p>
            </div>
            <div className="special-check">
                <input 
                    type="checkbox" 
                    onChange={() => toggleCheck(99)}
                    checked={completedSteps.includes(99)}
                />
            </div>
         </div>
      )}

      <div className="routine-list">
        {dailySteps.map((step, index) => (
          <RoutineStep
            key={index}
            stepData={step}
            isCompleted={completedSteps.includes(index)}
            onCheck={() => toggleCheck(index)}
          />
        ))}
      </div>

      <div className="tips-trigger-card">
        <div className="trigger-icon">🎓</div>
        <div className="trigger-content">
          <h3>Bingung Cara Pakainya?</h3>
          <p>Cek panduan lengkap takaran sunscreen, urutan layering, dan tips ahli lainnya di sini.</p>
        </div>
        <Link to="/tips" className="trigger-btn">Baca Tips &rarr;</Link>
      </div>

      {showCelebration && (
        <CelebrationModal
          onClose={() => setShowCelebration(false)}
          timeMode={timeMode}
        />
      )}
    </section>
  );
}