import { Link } from 'react-router-dom'
import AnimatedIn from '../components/AnimatedIn'
import Icons from '../components/Icons'

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
  <section className="hero-split grid grid-cols-1 md:grid-cols-2 items-center container mx-auto px-1 py-2 gap-1 relative z-10">
        {/* Left Column */}
  <AnimatedIn className="hero-left text-left pr-6 md:pr-12 lg:pr-20">
          {/* Menghapus backtick yang tidak perlu di sini */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight gradient-text">
            <span className="theme-text">Welcome to</span> ESEFTWO
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-md text-muted leading-relaxed text-justify">
            Di ESEFTWO kegiatan kami meliputi sesi coding bersama, bermain bersama, dan presentasi proyek. Suasananya santai dan penuh semangat, diskusi, dan momen keren ketika sebuah ide berhasil diwujudkan.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link to="/about" className="btn btn-primary btn-lg hover:scale-105 transition-transform">
              Tentang Kami
            </Link>
            <Link to="/contact" className="btn btn-ghost btn-lg hover:scale-105 transition-transform">
              Kirim Pesan
            </Link>
          </div>
        </AnimatedIn>

        {/* Right Column (Hero image) */}
        <AnimatedIn className="hero-right relative flex items-center justify-center h-full">
          <div className="robots-wrapper w-full h-full flex items-center justify-center">
            {/* Single hero image: keep PNG transparency; larger on md+ screens and centered vertically */}
            <img
              loading="lazy"
              src="/hai.png"
              alt="Hai illustration"
              className="w-full max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl h-auto bg-transparent object-contain"
            />
          </div>
        </AnimatedIn>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto">
          {[
            { icon: <Icons.Users size={48} className="mx-auto" />, value: '34', title: 'Anggota Kelas', desc: 'Developers' },
            { icon: <Icons.Trophy size={48} className="mx-auto" />, value: '10+', title: 'Partisipasi', desc: 'Event' },
            { icon: <Icons.Bolt size={48} className="mx-auto" />, value: '5+', title: 'Tech Stack', desc: 'Teknologi Modern' },
          ].map((stat, i) => (
            <AnimatedIn key={i} index={i}>
              <div className="glass-effect simple-border rounded-2xl p-8 text-center hover:scale-105 transition-all">
                <div className="mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-5xl font-black mb-2 gradient-text">{stat.value}</div>
                <h3 className="text-lg font-bold gradient-text mb-2">{stat.title}</h3>
                <p className="text-muted">{stat.desc}</p>
              </div>
            </AnimatedIn>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
    

      {/* Technologies Section */}
     

      {/* Technologies Section */}
      <section className="container mx-auto px-4 py-20 relative z-20">
        <div className="text-center mb-12 pt-6 pb-20">
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
            { title: 'Web Development', desc: 'HTML, CSS, JavaScript, React, TypeScript', icon: <Icons.Globe size={48} className="mx-auto" /> },
            { title: 'Mobile Development', desc: 'Android, Flutter', icon: <Icons.Mobile size={48} className="mx-auto" /> },
            { title: 'Game Development', desc: 'Unity', icon: <Icons.Gamepad size={48} className="mx-auto" /> },
            { title: 'Database', desc: 'MySQL', icon: <Icons.Database size={48} className="mx-auto" /> },
            { title: 'UI/UX Design', desc: 'Figma', icon: <Icons.Palette size={48} className="mx-auto" /> },
            { title: 'Backend Development', desc: 'Node.js, Laravel', icon: <Icons.Cog size={48} className="mx-auto" /> },
          ].map((tech, i) => (
            <AnimatedIn key={i} index={i}>
              <div key={i} className="card-hover simple-border glass-effect rounded-2xl p-8 text-center hover:scale-105 transition-all">
                <div className="mb-4 flex justify-center">{tech.icon}</div>
                <h3 className="text-xl font-bold gradient-text mb-2">{tech.title}</h3>
                <p className="text-muted">{tech.desc}</p>
              </div>
            </AnimatedIn>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 z-20">
        <div className="container mx-auto px-4 text-center">
          <AnimatedIn>
            <div className="max-w-3xl mx-auto glass-effect p-10 rounded-3xl simple-border">
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 gradient-text leading-[1.4] pb-2">
                Ikuti Perjalanan Kami
               </h2>
              <p className="text-xl mb-8 text-muted">
                Mari belajar dan berkembang bersama di dunia software & game development
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link to="/members" className="btn btn-primary btn-lg hover:scale-105 transition-all">
                  <Icons.Users size={18} className="inline-block mr-2" /> Lihat Anggota
                </Link>
                <Link to="/gallery" className="btn btn-ghost btn-lg hover:scale-105 transition-all">
                  <Icons.Camera size={18} className="inline-block mr-2" /> Galeri Kami
                </Link>
              </div>
            </div>
          </AnimatedIn>
        </div>
      </section>
    </div>
  )
}

export default Home