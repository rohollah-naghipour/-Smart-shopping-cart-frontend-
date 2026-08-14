import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Budget.css";

function Budget() {
  const navigate = useNavigate();

  const [budget, setBudget] = useState("");
  const [rawBudget, setRawBudget] = useState("");
  const [error, setError] = useState("");

  // تابع فرمت کردن اعداد با کاما در لحظه تایپ
  const formatNumber = (value) => {
    // حذف همه کاراکترهای غیرعددی
    const clean = value.replace(/\D/g, "");
    if (!clean) return "";
    // تبدیل به عدد و اضافه کردن کاما
    return Number(clean).toLocaleString("en-US");
  };

  const handleChange = (e) => {
    const raw = e.target.value;
    // حذف همه کاراکترهای غیرعددی
    const clean = raw.replace(/\D/g, "");
    setRawBudget(clean);
    // فرمت کردن در لحظه تایپ
    setBudget(formatNumber(clean));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = Number(rawBudget);

    if (!value || value <= 0) {
      setError("لطفاً یک مبلغ معتبر وارد کنید.");
      return;
    }

    setError("");
    navigate("/recommendations", {
      state: {
        budget: value,
      },
    });
  };

  return (
    <main className="budget-page" dir="rtl">
      <div className="budget-container">

        <div className="budget-icon">
          🛒
        </div>

        <h1>بودجه خرید خود را وارد کنید</h1>

        <p className="budget-description">
          کافی است بودجه‌ای که برای خرید در نظر گرفته‌اید وارد کنید
          تا NOVA بهترین پیشنهادها را متناسب با بودجه شما پیدا کند.
        </p>

        <form onSubmit={handleSubmit} className="budget-form">

          <label htmlFor="budget">
            بودجه شما
          </label>

          <div className="budget-input-wrapper">
            <input
              id="budget"
              type="text"
              value={budget}
              onChange={handleChange}
              placeholder="مثلاً ۳,۰۰۰,۰۰۰"
              dir="ltr"
              style={{
                textAlign: "right",
                direction: "ltr",
                padding: "12px 16px",
                fontSize: "18px",
                border: "2px solid #e0e0e0",
                borderRadius: "10px",
                width: "100%",
                outline: "none"
              }}
            />
            <span>تومان</span>
          </div>

          {error && (
            <p className="budget-error">
              {error}
            </p>
          )}

          <button type="submit">
            دریافت پیشنهادهای هوشمند
            <span>←</span>
          </button>

        </form>

        <div className="budget-tips">

          <div>
            <span>💡</span>
            <p>پیشنهادها متناسب با بودجه شما هستند.</p>
          </div>

          <div>
            <span>🌱</span>
            <p>انتخاب‌های مناسب برای خانواده شما.</p>
          </div>

          <div>
            <span>✓</span>
            <p>کنترل بهتر هزینه‌های خرید.</p>
          </div>

        </div>

      </div>
    </main>
  );
}

export default Budget;