# eseftwo - Website PPLG 2

Website resmi kelas PPLG 2 (Pengembangan Perangkat Lunak dan Gim) dibuat dengan React, TypeScript, dan DaisyUI.

## 🚀 Fitur

- **Home Page** - Landing page dengan hero section dan overview kelas
- **About Page** - Informasi tentang visi, misi, dan perjalanan kelas
- **Members Page** - Daftar anggota kelas dengan skill dan role masing-masing
- **Projects Page** - Showcase proyek-proyek yang telah dikerjakan
- **Gallery Page** - Dokumentasi kegiatan dan pencapaian kelas
- **Responsive Design** - Tampilan yang optimal di semua device
- **Dark Mode** - Support untuk dark theme
- **Modern UI** - Menggunakan DaisyUI untuk komponen yang cantik

## 🛠️ Tech Stack

- **React** - Library JavaScript untuk UI
- **TypeScript** - Superset JavaScript dengan type safety
- **Vite** - Build tool yang cepat
- **React Router** - Routing untuk SPA
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library untuk Tailwind CSS

## 📦 Instalasi

1. Clone repository ini
```bash
git clone <repository-url>
cd sft2
```

2. Install dependencies
```bash
npm install
```

3. Jalankan development server
```bash
npm run dev
```

4. Build untuk production
```bash
npm run build
```

5. Preview production build
```bash
npm run preview
```

## 📁 Struktur Project

```
sft2/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── pages/         # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Members.tsx
│   │   ├── Projects.tsx
│   │   └── Gallery.tsx
│   ├── App.tsx        # Main app component
│   ├── main.tsx       # Entry point
│   └── index.css      # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Customization

### Mengubah Warna Tema

Edit file `tailwind.config.js` untuk mengubah warna tema:

```javascript
daisyui: {
  themes: [
    {
      eseftwo: {
        "primary": "#6366f1",    // Ubah warna primary
        "secondary": "#8b5cf6",  // Ubah warna secondary
        // ... warna lainnya
      },
    },
  ],
}
```

### Menambah Data Anggota

Edit file `src/pages/Members.tsx` dan tambahkan data di array `members`.

### Menambah Proyek

Edit file `src/pages/Projects.tsx` dan tambahkan data di array `projects`.

## 📝 To-Do

- [ ] Tambahkan backend untuk manajemen data dinamis
- [ ] Integrasi dengan database
- [ ] Tambahkan fitur login/register
- [ ] Upload foto ke gallery
- [ ] Tambahkan blog/artikel
- [ ] Integrasi dengan social media

## 👥 Tim Pengembang

Website ini dibuat oleh dan untuk kelas PPLG 2 - eseftwo

## 📄 License

MIT License - Copyright (c) 2024 eseftwo PPLG 2

## 🤝 Kontribusi

Kontribusi selalu welcome! Silakan fork repository ini dan ajukan pull request.

---

**eseftwo** - Pengembangan Perangkat Lunak dan Gim 🚀
