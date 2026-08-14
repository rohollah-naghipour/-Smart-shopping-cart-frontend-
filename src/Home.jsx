import "./Home.css";

function Home() {
  return (
    <main className="home" dir="rtl">

      {/* Header */}
      <header className="navbar">
        <div className="nav-logo">
          <span className="logo-leaf">◒</span>
          <strong>NOVA</strong>
        </div>

        <nav className="nav-menu">
          <a className="active" href="/">صفحه اصلی</a>
          <a href="/products">محصولات</a>
          <a href="/recommendations">پیشنهادهای من</a>
          <a href="/families">برای خانواده‌ها</a>
          <a href="/about">درباره نوا</a>
        </nav>

        <div className="nav-actions">
          <button className="login-btn">
            ورود / ثبت‌نام
            <span>♙</span>
          </button>

          <button className="cart-btn">
            🛒
            <span>۰</span>
          </button>
        </div>
      </header>


      {/* Hero */}
      <section className="hero">

        <div className="hero-image">
          <div className="basket">

            <div className="basket-products">
              <div className="product-shape tomato">🍅</div>
              <div className="product-shape milk">🥛</div>
              <div className="product-shape bread">🥖</div>
              <div className="product-shape vegetables">🥬</div>
            </div>

            <div className="basket-logo">
              <span>◒</span>
              NOVA
            </div>

          </div>
        </div>

        <div className="hero-content">

          <span className="hero-small">
            انتخاب بهتر، خرید راحت‌تر
          </span>

          <h1>
            خرید هوشمند.
            <br />
            <span>زندگی بهتر.</span>
          </h1>

          <p>
            نوا به خانواده‌ها کمک می‌کند با توجه به بودجه،
            سلیقه و نیازهایشان بهترین محصولات را انتخاب کنند
            و یک سبد خرید هوشمند و به‌صرفه داشته باشند.
          </p>

          <div className="hero-buttons">
            <a href="/recommendations" className="primary-btn">
              شروع کنید ←
            </a>

            <a href="/about" className="secondary-btn">
              بیشتر درباره نوا
            </a>
          </div>

        </div>

      </section>


      {/* Features */}
      <section className="features">

        <div className="feature">
          <span>💡</span>
          <div>
            <strong>پیشنهادهای شخصی‌سازی‌شده</strong>
            <small>انتخاب هوشمندانه‌تر</small>
          </div>
        </div>

        <div className="feature">
          <span>💳</span>
          <div>
            <strong>کنترل بودجه</strong>
            <small>بهترین انتخاب‌ها با بودجه خود پیدا کنید</small>
          </div>
        </div>

        <div className="feature">
          <span>♡</span>
          <div>
            <strong>انتخاب‌های سالم‌تر</strong>
            <small>انتخاب هوشمندانه برای زندگی بهتر</small>
          </div>
        </div>

        <div className="feature">
          <span>♧</span>
          <div>
            <strong>مناسب برای تمام خانواده‌ها</strong>
            <small>طراحی‌شده برای نیازهای واقعی خانواده‌ها</small>
          </div>
        </div>

      </section>


      {/* Recommended Products */}
      <section className="products-section">

        <div className="section-heading">

          <a href="/products">
            ← مشاهده همه محصولات
          </a>

          <div>
            <h2>پیشنهاد ویژه امروز</h2>
            <p>بر اساس نیاز خانواده شما و بودجه انتخابی</p>
          </div>

        </div>


        <div className="products-layout">

          <div className="products-grid">

            <ProductCard
              image="🍅"
              name="رب گوجه فرنگی روژیا"
              weight="۴۰۰ گرم"
              price="۹۶,۰۰۰"
            />

            <ProductCard
              image="🥛"
              name="ماست پرومـاست کاله"
              weight="۴۰۰ گرم"
              price="۳۲,۰۰۰"
            />

            <ProductCard
              image="🥛"
              name="شیر کم‌چرب کاله"
              weight="۱ لیتر"
              price="۲۸,۰۰۰"
            />

            <ProductCard
              image="🍌"
              name="موز"
              weight="۱ کیلوگرم"
              price="۴۸,۰۰۰"
              fresh
            />

          </div>


          <div className="recommendation-card">

            <div className="recommendation-icon">
              ✓
            </div>

            <h3>
              سبد خرید هوشمند خود را
              <br />
              بسازید
            </h3>

            <p>
              با چند کلیک، بهترین پیشنهادها را
              برای خانواده خود دریافت کنید.
            </p>

            <a href="/recommendations">
              دریافت پیشنهادها ←
            </a>

          </div>

        </div>

      </section>


      {/* Categories */}
      <section className="categories">

        <div className="section-heading">
          <div>
            <h2>دسته‌بندی محصولات</h2>
            <p>هرچه نیاز دارید، سریع پیدا کنید</p>
          </div>
        </div>

        <div className="categories-grid">

          <Category icon="🥛" title="لبنیات" />
          <Category icon="🍅" title="مواد غذایی" />
          <Category icon="🥬" title="میوه و سبزیجات" />
          <Category icon="🧃" title="نوشیدنی‌ها" />
          <Category icon="🍪" title="تنقلات" />
          <Category icon="🧴" title="بهداشت و خانه" />

        </div>

      </section>


      {/* Why NOVA */}
      <section className="why-section">

        <div className="section-heading centered">
          <h2>چرا نوا؟</h2>
          <p>انتخاب هوشمند برای خانواده‌های ایرانی</p>
        </div>

        <div className="why-grid">

          <WhyCard
            icon="💳"
            title="صرفه‌جویی در هزینه"
            text="بهترین قیمت‌ها با توجه به بودجه شما"
          />

          <WhyCard
            icon="💡"
            title="پیشنهاد هوشمند"
            text="بر اساس نیاز، سلیقه و رفتار خرید"
          />

          <WhyCard
            icon="♧"
            title="مناسب خانواده‌ها"
            text="طراحی‌شده برای زندگی واقعی"
          />

          <WhyCard
            icon="✓"
            title="اطلاعات شفاف"
            text="مقایسه، بررسی و انتخاب آگاهانه"
          />

        </div>

      </section>


      {/* Family Banner */}
      <section className="family-banner">

        <div className="family-placeholder">
          👨‍👩‍👧
        </div>

        <div>
          <h2>با نوا، خریدی بهتر</h2>
          <p>برای فردای بهتر خانواده‌تان</p>
        </div>

        <div className="family-logo">
          <strong>NOVA</strong>
          <span>خرید هوشمند. زندگی بهتر</span>
        </div>

      </section>


      {/* Footer */}
      <footer>

        <div className="footer-logo">
          <span>◒</span>
          <strong>NOVA</strong>
        </div>

        <div className="footer-links">
          <a href="/about">درباره ما</a>
          <a href="/contact">تماس با ما</a>
          <a href="/guide">راهنمای استفاده</a>
          <a href="/privacy">حریم خصوصی</a>
        </div>

        <p>
          © ۱۴۰۵ نوا. تمامی حقوق محفوظ است.
        </p>

      </footer>

    </main>
  );
}


function ProductCard({
  image,
  name,
  weight,
  price,
  fresh
}) {
  return (
    <article className="product-card">

      <div className="product-image">
        {image}
        {fresh && <span>تازه</span>}
      </div>

      <button className="favorite">
        ♡
      </button>

      <div className="product-info">

        <h3>{name}</h3>

        <small>{weight}</small>

        <strong>
          {price}
          <span> تومان</span>
        </strong>

      </div>

    </article>
  );
}


function Category({ icon, title }) {
  return (
    <article className="category-card">
      <div>{icon}</div>
      <strong>{title}</strong>
      <span>‹</span>
    </article>
  );
}


function WhyCard({ icon, title, text }) {
  return (
    <article className="why-card">

      <div className="why-icon">
        {icon}
      </div>

      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>

    </article>
  );
}


export default Home;
