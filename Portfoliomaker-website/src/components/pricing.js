import '../stylesheets/pricing.css';

const Pricing=()=>{
    return(
<div class="grid grid--plans">
        <section class="card tier1" id="pricing">
          <header>
            <h3 class="badge">Starter</h3>
            <p class="bold-price">$5
              <small>/month</small>
            </p>
            <p>Great to start and to solve first issues on any kind of project!</p>
          </header>
          <ul>
            <li>Accessibility Statement creation</li>
            <li>Monthly call to align and discuss</li>
            <li>Basic Instant Fixes: 10 out of 50</li>
            <li>Private Dashboard</li>
            <li>Email for Support</li>
          </ul>
          <footer>
            <p>
              <a href="https://app.netlify.com/signup" class="button">Get started</a>
            </p>
          </footer>
        </section>
        <section class="card tier2">
          <header>
            <h3 class="badge">Pro</h3>
            <p class="bold-price">$10
              <small>/month</small>
            </p>
            <p>Get examples and more calls! Starter features plus...</p>
          </header>
          <ul>
            <li>Library of Accessible Components</li>
            <li>Weekly call to align and discuss</li>
            <li>Complete Instant Fixes: 50 out of 50</li>
            <li>Multiple roles</li>
            <li>Slack private chat for Support</li>
          </ul>
          <footer>
            <p>
              <a href="https://app.netlify.com/signup" class="button">Get started</a>
            </p>
          </footer>
        </section>
        <section class="card tier3">
          <header>
            <h3 class="badge">Business</h3>
            <p class="bold-price">$30+
              <small>/month</small>
            </p>
            <p>Custom solution designed for the needs of your company. Pro features plus...</p>
          </header>
          <ul>
            <li>Dedicated Server for testing</li>
            <li>24x7x365 premium support options</li>
            <li>Custom high-performance components</li>
            <li>Enterprise pipeline integration</li>
            <li>No Branding</li>
          </ul>
          <footer>
            <p>
              <a href="/enterprise" class="button">Contact sales</a>
            </p>
          </footer>
        </section>
      </div>
    )
}
export default Pricing;