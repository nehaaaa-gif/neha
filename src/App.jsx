import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2>DevOps Dashboard</h2>
        <span className="status">
          <span className="dot"></span>
          Online
        </span>
      </nav>

      <main className="container">
        <section className="hero">
          <p className="tag">MY FIRST EC2 DEPLOYMENT</p>
          <h1>React App is Running 🚀</h1>
          <p>
            This is a simple React application deployed using AWS EC2.
          </p>
        </section>

        <section className="cards">
          <div className="card">
            <div className="icon">⚛️</div>
            <h3>React</h3>
            <p>Frontend application built with React.</p>
            <span className="badge green">Running</span>
          </div>

          <div className="card">
            <div className="icon">☁️</div>
            <h3>AWS EC2</h3>
            <p>Application is hosted on an EC2 server.</p>
            <span className="badge blue">Connected</span>
          </div>

          <div className="card">
            <div className="icon">🚀</div>
            <h3>Deployment</h3>
            <p>Learning how to deploy applications with DevOps.</p>
            <span className="badge purple">Learning</span>
          </div>
        </section>

        <section className="server">
          <h2>Server Information</h2>

          <div className="info">
            <div>
              <span>Server</span>
              <strong>AWS EC2</strong>
            </div>

            <div>
              <span>Application</span>
              <strong>React</strong>
            </div>

            <div>
              <span>Status</span>
              <strong className="online">● Online</strong>
            </div>
          </div>
        </section>

        <section className="learning">
          <h2>DevOps Journey</h2>
          <p>
            React → GitHub → AWS EC2 → Nginx → Production 🚀
          </p>
        </section>
      </main>

      <footer>
        <p>My First DevOps Project • Built with React</p>
      </footer>
    </div>
  );
}

export default App;
