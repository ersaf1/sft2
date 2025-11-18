import AnimatedIn from '../components/AnimatedIn'

const About = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            {/* Header */}
            <AnimatedIn>
              <div className="text-center mb-12">
                  <h1 className="text-5xl font-bold mb-4">Tentang <span className="gradient-text">ESEFTWO</span></h1>
                  <div className="divider max-w-xs mx-auto"></div>
                  <p className="text-xl text-gray-600">PPLG 2 - Pengembangan Perangkat Lunak dan Gim</p>
              </div>
            </AnimatedIn>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <AnimatedIn>
                  <div className="card bg-light shadow-xl">
                      <div className="card-body">
                          <h2 className="card-title text-2xl gradient-text">Visi Kami</h2>
                          <p className="text-lg text-dark">
                              Menjadi kelas yang cerdas, kreatif, dan solid dalam mewujudkan generasi muda yang berkompeten di bidang pengembangan perangkat lunak dan gim. Melalui semangat kebersamaan, kedisiplinan, serta rasa tanggung jawab, kami bertekad untuk terus berinovasi, meningkatkan prestasi akademik maupun nonakademik, dan menumbuhkan karakter positif demi meraih masa depan yang gemilang di era digital.
                          </p>
                      </div>
                  </div>
                </AnimatedIn>

                <AnimatedIn>
                  <div className="card bg-light shadow-xl">
                      <div className="card-body">
                          <h2 className="card-title text-2xl gradient-text">Misi Kami</h2>
                          <ul className="list-disc list-inside space-y-2">
                              <li>Menumbuhkan sikap disiplin, tanggung jawab, dan semangat kerja sama dalam setiap kegiatan belajar maupun proyek kelas.</li>
                              <li>Meningkatkan kemampuan berpikir kreatif, kritis, dan inovatif dalam bidang pengembangan perangkat lunak dan gim.</li>
                              <li>Mendorong seluruh siswa untuk aktif berprestasi di bidang akademik maupun nonakademik.</li>
                              <li>Mewujudkan lingkungan kelas yang nyaman, harmonis, dan saling menghargai.</li>
                              <li>Menanamkan jiwa profesional dan karakter positif sebagai bekal menghadapi tantangan dunia teknologi di masa depan.</li>
                              <li>Mengoptimalkan penggunaan teknologi digital secara bijak untuk mendukung proses pembelajaran dan pengembangan diri.</li>
                          </ul>
                      </div>
                  </div>
                </AnimatedIn>
            </div>

            {/* Timeline */}
                        <AnimatedIn>
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-center mb-8">Perjalanan Kami</h2>
                                <ul className="timeline timeline-vertical">
                                        <li>
            {/* PERBAIKAN: Tambahkan kelas text-white di sini */}
            <div className="timeline-start timeline-box bg-dark text-dark">
                <div className="font-bold">Tahun Pertama</div>
                Di tahun dasar ini, siswa akan mempelajari fondasi utama dalam dunia komputasi dan pemrograman, berfokus pada memahami logika algoritma, struktur data dasar, dan etika digital sebagai developer. Siswa akan mulai mengenal dan mempraktikkan bahasa markup (HTML) dan styling (CSS) untuk membangun kerangka web statis, sekaligus mengkonseptualisasikan fungsi dasar sistem manajemen database (SQL) sebagai persiapan untuk materi lanjutan.
            </div>
            <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
            </div>
            <hr className="bg-primary" />
        </li>
        <li>
            <hr className="bg-primary" />
            <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
            </div>
            {/* PERBAIKAN: Tambahkan kelas text-white di sini */}
            <div className="timeline-end timeline-box bg-dark text-dark">
                <div className="font-bold">Tahun Kedua</div>
                Memasuki level spesialisasi, siswa akan menguasai integrasi frontend dan backend dengan mengaplikasikan framework Bootstrap untuk desain web responsif, dan mendalami pemrograman berbasis objek (OOP) melalui Java. Selain itu, siswa akan merancang dan mengelola database yang kompleks, mengembangkan antarmuka mobile melalui Flutter, dan memahami prinsip desain aset digital (UI/UX) dengan Corel, yang semuanya bertujuan untuk mewujudkan aplikasi yang fungsional dan terintegrasi.
            </div>
            <hr className="bg-primary" />
        </li>
        <li>
            
            {/* PERBAIKAN: Tambahkan kelas text-white di sini */}
            <div className="timeline-start timeline-box bg-dark text-dark">
                <div className="font-bold">Tahun Ketiga</div>
                Tahun akhir ini adalah panggung profesionalisme di mana siswa akan mengimplementasikan seluruh pengetahuan dengan mengembangkan solusi web full-stack tingkat lanjut menggunakan framework industri. Fokus juga diarahkan untuk menciptakan pengalaman game yang imersif dengan menganalisis logika dan mekanika game engine. Puncaknya, siswa akan menyusun portofolio proyek live dan mempersiapkan diri secara mental dan teknis untuk Uji Kompetensi Keahlian, menunjukkan kesiapan untuk memasuki dunia kerja sebagai developer junior.
            </div>
            <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
            </div>
                                        </li>
                                </ul>
                            </div>
                        </AnimatedIn>

                        {/* Values */}
                        <AnimatedIn>
                            <section className="mb-12">
                                    <h2 className="text-3xl font-bold text-center mb-6">Nilai-Nilai Kami</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6" role="list">
                                            {[
                                                { id: 'creativity', title: 'Kreativitas', desc: 'Berpikir out of the box dalam setiap proyek' },
                                                { id: 'collaboration', title: 'Kolaborasi', desc: 'Bekerja sama untuk hasil terbaik' },
                                                { id: 'innovation', title: 'Inovasi', desc: 'Selalu mencari solusi baru' },
                                                { id: 'dedication', title: 'Dedikasi', desc: 'Komitmen penuh dalam belajar' },
                                            ].map((v, i) => (
                                                <AnimatedIn key={v.id} index={Math.min(i, 8)} stagger={0.04}>
                                                    <article role="listitem" className="card bg-primary text-white shadow-xl hover:shadow-2xl transform-gpu transition-all duration-250 hover:scale-[1.02] flex flex-col h-full rounded-2xl overflow-hidden">
                                                        <div className="card-body items-center text-center p-6 flex-1 flex flex-col justify-center">
                                                            <h3 className="card-title text-xl font-semibold mb-2">{v.title}</h3>
                                                            <p className="text-base mt-1 text-white/90">{v.desc}</p>
                                                        </div>
                                                    </article>
                                                </AnimatedIn>
                                            ))}
                                    </div>
                            </section>
                        </AnimatedIn>

            {/* Tech Stack */}
            <AnimatedIn>
              <div className="card bg-base-200 shadow-xl">
                  <div className="card-body">
                      <h2 className="card-title text-3xl mb-6 justify-center">Tech Stack yang Kami Gunakan</h2>
                      <div className="flex flex-wrap gap-3 justify-center">
                          <div className="badge badge-primary badge-lg">HTML/CSS</div>
                          <div className="badge badge-primary badge-lg">JavaScript</div>
                          <div className="badge badge-primary badge-lg">TypeScript</div>
                          <div className="badge badge-primary badge-lg">React</div>
                          <div className="badge badge-primary badge-lg">Python</div>
                          <div className="badge badge-primary badge-lg">Java</div>
                          <div className="badge badge-primary badge-lg">Kotlin</div>
                          <div className="badge badge-primary badge-lg">Flutter</div>
                          <div className="badge badge-primary badge-lg">Unity</div>
                          <div className="badge badge-primary badge-lg">Node.js</div>
                          <div className="badge badge-primary badge-lg">Mysql</div>
                          <div className="badge badge-primary badge-lg">Git</div>
                          <div className="badge badge-primary badge-lg">Figma</div>
                      </div>
                  </div>
              </div>
            </AnimatedIn>
        </div>
    )
}

export default About
