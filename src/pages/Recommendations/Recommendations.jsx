import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { getRecommendation } from "../../services/recommendationService";

import "./Recommendations.css";

function Recommendations() {
  const location = useLocation();
  const navigate = useNavigate();

  const budget = location.state?.budget;

  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!budget) {
      navigate("/budget");
      return;
    }

    const fetchRecommendations = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getRecommendation(
          "fam-0001",
          budget
        );

        setResult(data);
      } catch (err) {
        console.error(err);

        setError(
          "دریافت پیشنهادها با خطا مواجه شد."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [budget, navigate]);

  if (loading) {
    return (
      <main
        className="recommendations-page"
        dir="rtl"
      >
        <div className="recommendations-loading">
          <div className="loading-icon">
            ✨
          </div>

          <h1>
            NOVA در حال بررسی است...
          </h1>

          <p>
            در حال پیدا کردن بهترین پیشنهادها
            متناسب با بودجه شما هستیم.
          </p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main
        className="recommendations-page"
        dir="rtl"
      >
        <div className="recommendations-error">
          <div>⚠️</div>

          <h1>
            مشکلی پیش آمد
          </h1>

          <p>{error}</p>

          <button
            onClick={() => navigate("/budget")}
          >
            بازگشت به بودجه
          </button>
        </div>
      </main>
    );
  }

  return (
    <main
      className="recommendations-page"
      dir="rtl"
    >
      <div className="recommendations-container">

        <section className="recommendations-header">

          <div>
            <span className="section-label">
              پیشنهاد هوشمند NOVA
            </span>

            <h1>
              انتخاب‌های مناسب شما 🌱
            </h1>

            <p>
              بر اساس بودجه شما، این محصولات
              برای خرید پیشنهاد شده‌اند.
            </p>
          </div>

          <button
            className="change-budget-button"
            onClick={() => navigate("/budget")}
          >
            تغییر بودجه
          </button>

        </section>

        <section className="budget-summary">

          <div className="summary-card">
            <span>بودجه شما</span>
            <strong>
              {result.budget.toLocaleString()}
            </strong>
            <small>تومان</small>
          </div>

          <div className="summary-card">
            <span>هزینه خرید</span>
            <strong>
              {result.total_cost.toLocaleString()}
            </strong>
            <small>تومان</small>
          </div>

          <div className="summary-card remaining">
            <span>بودجه باقی‌مانده</span>
            <strong>
              {result.remaining_budget.toLocaleString()}
            </strong>
            <small>تومان</small>
          </div>

        </section>

        <section className="products-section">

          <div className="products-title">
            <div>
              <h2>
                محصولات پیشنهادی
              </h2>

              <p>
                انتخاب شده بر اساس بودجه و
                پیشنهاد هوشمند NOVA
              </p>
            </div>

            <span>
              {result.items.length} محصول
            </span>
          </div>

          {result.items.length === 0 ? (
            <div className="empty-recommendations">
              <div>🛒</div>

              <h3>
                محصول مناسبی پیدا نشد
              </h3>

              <p>
                با افزایش بودجه دوباره امتحان کنید.
              </p>
            </div>
          ) : (
            <div className="recommendation-grid">

              {result.items.map((item) => (
                <article
                  className="recommendation-card"
                  key={item.product_id}
                >
                  <div className="product-placeholder">
                    🛍️
                  </div>

                  <div className="product-info">

                    <span className="product-id">
                      {item.product_id}
                    </span>

                    <h3>
                      {item.name}
                    </h3>

                    <div className="product-bottom">

                      <strong>
                        {item.price.toLocaleString()}
                        <small> تومان</small>
                      </strong>

                      <span>
                        تعداد {item.quantity}
                      </span>

                    </div>

                  </div>
                </article>
              ))}

            </div>
          )}

        </section>

        <section className="recommendations-footer">

          <div>
            <span>💚</span>

            <div>
              <strong>
                خرید هوشمند با NOVA
              </strong>

              <p>
                انتخاب بهتر، کنترل بودجه و
                خرید مناسب‌تر برای خانواده
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate("/")}
          >
            بازگشت به صفحه اصلی
          </button>

        </section>

      </div>
    </main>
  );
}

export default Recommendations;