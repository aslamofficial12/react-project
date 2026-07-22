import "./SubscribeForm.css";

export default function SubscribeForm() {
  return (
    <section className="subscribe-section">

      <div className="warning-text">

        <p>
          Always follow the directions for use.
          <a href="#"> Read the warnings </a>
          before purchase. Finger pricks are required if your glucose
          readings and alarms do not match symptoms or expectations.
        </p>

      </div>

      <div className="subscribe-container">

        <h2>Stay in Touch</h2>

        <p className="subtitle">
          Subscribe now to hear the latest FreeStyle Libre news first.
        </p>

        {/* First Row */}

        <div className="row">

          <div className="field">
            <label>
              Name <span>*</span>
            </label>

            <input
              type="text"
              placeholder="Name"
            />
          </div>

          <div className="field">
            <label>
              Email Address <span>*</span>
            </label>

            <input
              type="email"
              placeholder="Email Address"
            />
          </div>

        </div>

        {/* Dropdown */}

        <div className="field">

          <label>
            Diabetes Type <span>*</span>
          </label>

          <select>

            <option>Please Select</option>

            <option>Type 1</option>

            <option>Type 2</option>

            <option>Gestational Diabetes</option>

            <option>Other Diabetes</option>

            <option>Caregiver</option>

            <option>Healthcare Professional</option>

          </select>

        </div>

        {/* Checkbox */}

        <div className="checkbox-row">

          <input type="checkbox" />

          <p>
            I wish to opt in to FreeStyle Libre marketing
            communications, including product support and
            education, special offers and product updates and
            alerts. I have read and agree to the
            <a href="#"> Terms of Use </a>
            and
            <a href="#"> Privacy Policy</a>.
          </p>

        </div>

        <button className="subscribe-btn">
          Subscribe
        </button>

      </div>

    </section>
  );
}