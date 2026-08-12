import { useState } from "react";
import { getRecommendation } from "../../services/recommendationService";

function Recommendations() {
  const [budget, setBudget] = useState(3000000);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleRecommendation = async () => {
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
      setError("دریافت پیشنهادها با خطا مواجه شد.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div dir="rtl">
      <h1>پیشنهاد هوشمند NOVA</h1>

      <input
        type="number"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />

      <button onClick={handleRecommendation}>
        {loading ? "در حال بررسی..." : "دریافت پیشنهاد"}
      </button>

      {error && <p>{error}</p>}

      {result && (
        <div>
          <h2>نتیجه پیشنهاد</h2>

          <p>
            بودجه: {result.budget}
          </p>

          <p>
            هزینه کل: {result.total_cost}
          </p>

          <p>
            باقی‌مانده: {result.remaining_budget}
          </p>

          <h3>محصولات پیشنهادی</h3>

          {result.items.map((item) => (
            <div key={item.product_id}>
              <strong>{item.name}</strong>

              <p>
                قیمت: {item.price}
              </p>

              <p>
                تعداد: {item.quantity}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Recommendations;
