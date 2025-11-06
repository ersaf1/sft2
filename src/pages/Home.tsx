import { Link } from 'react-router-dom'

const Home = () => {
  return (
  <div className="min-h-screen hero-gradient relative overflow-hidden">
      {/* Background particles untuk light theme */}
      <div className="global-bg-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>

      {/* Hero Section */}
      <section className="hero-split grid grid-cols-1 md:grid-cols-2 items-center container mx-auto px-6 py-12 gap-10 relative z-10">
        {/* Left Column */}
        <div className="hero-left text-left animate-fade-in">
          {/* Menghapus backtick yang tidak perlu di sini */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight gradient-text">
            Welcome to ESEFTWO
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-2xl text-muted leading-relaxed">
            Di ESEFTWO, kegiatan kami meliputi sesi coding bersama, bermain bersama, dan presentasi proyek.
            Suasananya santai dan seru — banyak eksperimen, diskusi, dan momen keren saat sesuatu berhasil dibuat.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link to="/about" className="btn btn-primary btn-lg hover:scale-105 transition-transform">
              Tentang Kami
            </Link>
            <Link to="/gallery" className="btn btn-ghost btn-lg hover:scale-105 transition-transform">
              Lihat Galeri
            </Link>
          </div>
        </div>

        {/* Right Column (Robots) */}
        <div className="hero-right relative flex items-center justify-center">
          <div className="robots-wrapper">
            <img src="/robot2.png" alt="Robot front" className="robot-img robot-front" />
            <img src="/robot1.png" alt="Robot back" className="robot-img robot-back" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 -mt-10 relative z-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: '👥', value: '34', title: 'Anggota Kelas', desc: 'Developers' },
            { icon: '🏆', value: '10+', title: 'Partisipasi', desc: 'Event' },
            { icon: '⚡', value: '5+', title: 'Tech Stack', desc: 'Teknologi Modern' },
          ].map((stat, i) => (
            <div key={i} className="glass-effect simple-border rounded-2xl p-8 text-center hover:scale-105 transition-all">
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-5xl font-black mb-2 gradient-text">{stat.value}</div>
              <h3 className="text-lg font-bold gradient-text mb-2">{stat.title}</h3>
              <p className="text-muted">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
    

      {/* Technologies Section */}
     

      {/* Technologies Section */}
      <section className="container mx-auto px-4 py-20 relative z-20">
        <div className="text-center mb-12 pt-36 pb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 gradient-text leading-[1.4] pb-2"> {/* Kombinasi leading dan padding-bottom */}
            Teknologi yang Kami Kuasai
          </h2>
          <p className="text-lg text-muted">
            Stack modern untuk project masa depan
          </p>
        </div>

        {/* ... bagian kode lainnya ... */}

        {/* ... bagian kode lainnya ... */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { title: 'Web Development', desc: 'HTML, CSS, JavaScript, React, TypeScript', icon: '🌐' },
            { title: 'Mobile Development', desc: 'Android, Flutter', icon: '📱' },
            { title: 'Game Development', desc: 'Unity', icon: '🎮' },
            { title: 'Database', desc: 'MySQL', icon: '🗄️' },
            { title: 'UI/UX Design', desc: 'Figma', icon: '🎨' },
            { title: 'Backend Development', desc: 'Node.js, Laravel', icon: '⚙️' },
          ].map((tech, i) => (
            <div key={i} className="card-hover simple-border glass-effect rounded-2xl p-8 text-center hover:scale-105 transition-all">
              <div className="text-5xl mb-4">{tech.icon}</div>
              <h3 className="text-xl font-bold gradient-text mb-2">{tech.title}</h3>
              <p className="text-muted">{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 z-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto glass-effect p-10 rounded-3xl simple-border">
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 gradient-text leading-[1.4] pb-2">
              Ikuti Perjalanan Kami
             </h2>
            <p className="text-xl mb-8 text-muted">
              Mari belajar dan berkembang bersama di dunia software & game development
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/members" className="btn btn-primary btn-lg hover:scale-105 transition-all">
                👥 Lihat Anggota
              </Link>
              <Link to="/gallery" className="btn btn-ghost btn-lg hover:scale-105 transition-all">
                📸 Galeri Kami
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home