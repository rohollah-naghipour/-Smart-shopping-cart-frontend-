import "./Home.css";
import basketImage from "../../assets/basket.png";

function Home() {
  return (
    <main className="home" dir="rtl">

      {/* Hero */}
      <section className="hero">

        <div className="hero-content">

          <span className="hero-badge">
            🌿 خرید هوشمند برای خانواده‌های ایرانی
          </span>

          <h1>
            خرید هوشمند.
            <br />
            <span>زندگی بهتر.</span>
          </h1>

          <p>
            نوا به خانواده‌ها کمک می‌کند با توجه به بودجه،
            سلیقه و نیازهایشان بهترین محصولات را انتخاب کنند
            و یک خرید هوشمند و به‌صرفه داشته باشند.
          </p>

          <div className="hero-buttons">
            <button className="primary-button">
              شروع کنید ←
            </button>

            <button className="secondary-button">
              بیشتر درباره نوا
            </button>
          </div>

          <div className="hero-features">

            <div>
              <span>💡</span>
              <strong>پیشنهادهای شخصی‌سازی‌شده</strong>
            </div>

            <div>
              <span>💰</span>
              <strong>کنترل بودجه</strong>
            </div>

            <div>
              <span>♡</span>
              <strong>انتخاب‌های سالم‌تر</strong>
            </div>

            <div>
              <span>👨‍👩‍👧</span>
              <strong>مناسب برای تمام خانواده‌ها</strong>
            </div>

          </div>

        </div>

        {/* Basket */}
        <div className="hero-image">

          <div className="basket-glow"></div>

          <img
            src={basketImage}
            alt="سبد خرید هوشمند نوا"
          />

          <div className="basket-message">
            <span>با نوا،</span>
            <strong>انتخاب بهتر، خرید راحت‌تر</strong>
            <small>برای خانواده شما ❤️</small>
          </div>

        </div>

      </section>


      {/* Features */}
      <section className="home-features">

        <div className="feature-card">
          <div className="feature-icon">💡</div>
          <h3>پیشنهادهای شخصی‌سازی‌شده</h3>
          <p>
            پیشنهادهایی متناسب با نیاز و بودجه شما
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">💰</div>
          <h3>کنترل بودجه</h3>
          <p>
            بهترین انتخاب‌ها را متناسب با بودجه خود پیدا کنید
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">♡</div>
          <h3>انتخاب‌های سالم‌تر</h3>
          <p>
            انتخاب هوشمندانه‌تر برای زندگی بهتر
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">👨‍👩‍👧</div>
          <h3>مناسب برای تمام خانواده‌ها</h3>
          <p>
            طراحی‌شده برای نیازهای واقعی خانواده‌ها
          </p>
        </div>

      </section>

    </main>
  );
}

export default Home;
