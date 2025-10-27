# Panduan Pengembangan Website eseftwo

## 🎯 Quick Start

### Menjalankan Development Server
```bash
npm run dev
```
Buka browser di `http://localhost:5173`

### Build untuk Production
```bash
npm run build
```
Hasil build akan ada di folder `dist/`

### Preview Production Build
```bash
npm run preview
```

## 📝 Cara Mengubah Konten

### 1. Mengubah Data Anggota Kelas

Buka file `src/pages/Members.tsx` dan edit array `members`:

```typescript
const members: Member[] = [
  {
    id: 1,
    name: "Nama Lengkap",
    role: "Web Developer", // atau Mobile Developer, Game Developer, dll
    expertise: ["React", "Node.js", "MongoDB"], // skill yang dikuasai
    github: "username-github", // opsional
    instagram: "username-ig" // opsional
  },
  // tambahkan anggota lainnya...
]
```

### 2. Menambah/Edit Proyek

Buka file `src/pages/Projects.tsx` dan edit array `projects`:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: "Nama Proyek",
    description: "Deskripsi proyek secara singkat",
    category: "web", // pilih: web, mobile, game, atau desktop
    tech: ["React", "TypeScript", "TailwindCSS"], // teknologi yang digunakan
    status: "completed", // pilih: completed, ongoing, atau planned
    team: ["Nama1", "Nama2", "Nama3"] // anggota tim
  },
  // tambahkan proyek lainnya...
]
```

### 3. Mengubah Informasi About

Edit file `src/pages/About.tsx` untuk mengubah:
- Visi dan Misi
- Timeline perjalanan kelas
- Nilai-nilai kelas
- Tech stack yang digunakan

### 4. Menambah Kegiatan di Gallery

Edit file `src/pages/Gallery.tsx`:

```typescript
const activities = [
  {
    id: 1,
    title: "Nama Kegiatan",
    description: "Deskripsi kegiatan",
    date: "15 Maret 2024",
    category: "Kompetisi" // pilih: Kompetisi, Workshop, Event, atau Kunjungan
  },
  // tambahkan kegiatan lainnya...
]
```

## 🎨 Kustomisasi Tampilan

### Mengubah Warna Tema

Edit `tailwind.config.js`:

```javascript
eseftwo: {
  "primary": "#6366f1",    // Warna utama
  "secondary": "#8b5cf6",  // Warna sekunder
  "accent": "#f59e0b",     // Warna aksen
  "neutral": "#1f2937",    // Warna netral
  "base-100": "#ffffff",   // Warna background
  // ... dll
}
```

### Menambah Font Custom

1. Download font ke folder `public/fonts/`
2. Tambahkan di `src/index.css`:

```css
@font-face {
  font-family: 'NamaFont';
  src: url('/fonts/namafont.woff2') format('woff2');
}
```

3. Update `tailwind.config.js`:

```javascript
theme: {
  extend: {
    fontFamily: {
      custom: ['NamaFont', 'sans-serif']
    }
  }
}
```

## 🔧 Tips & Tricks

### Hot Module Replacement (HMR)
Setiap perubahan yang Anda buat akan langsung terlihat di browser tanpa perlu refresh!

### Component Reusability
Jika ada elemen yang digunakan berulang kali, buat component terpisah di folder `src/components/`

### Responsive Design
Gunakan prefix Tailwind untuk responsive:
- `sm:` - Small screens (640px+)
- `md:` - Medium screens (768px+)
- `lg:` - Large screens (1024px+)
- `xl:` - Extra large screens (1280px+)

Contoh:
```tsx
<div className="text-sm md:text-lg lg:text-xl">
  Responsive Text
</div>
```

### DaisyUI Components
Lihat dokumentasi lengkap di: https://daisyui.com/components/

## 🚀 Deployment

### Vercel (Recommended)
1. Push code ke GitHub
2. Import project di vercel.com
3. Deploy otomatis!

### Netlify
1. Build project: `npm run build`
2. Upload folder `dist/` ke Netlify
3. Done!

### GitHub Pages
1. Install gh-pages: `npm install -D gh-pages`
2. Tambahkan di `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```
3. Run: `npm run deploy`

## 📚 Resources

- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [DaisyUI](https://daisyui.com/)
- [Vite Guide](https://vitejs.dev/guide/)

## 💡 Ideas untuk Pengembangan Selanjutnya

- [ ] Tambahkan animasi yang lebih menarik
- [ ] Implementasi dark mode toggle yang persistent
- [ ] Tambahkan form contact
- [ ] Integrasi dengan API untuk data dinamis
- [ ] Tambahkan blog/artikel section
- [ ] Implementasi search functionality
- [ ] Tambahkan filter dan sort di members & projects
- [ ] Upload dan display real photos di gallery
- [ ] Tambahkan testimonial section
- [ ] Integrasi dengan Google Analytics

Happy Coding! 🎉
