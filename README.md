<img src="https://github.com/user-attachments/assets/653a2601-28e4-4580-8286-17a35e828be1" alt="Renshuu Preview" />

# Renshuu - Platform Pencarian Kerja Digital

**Renshuu** adalah platform digital yang dirancang untuk mempermudah pencari kerja dalam menemukan peluang yang sesuai dengan minat, keahlian, dan tujuan karier mereka. Aplikasi ini dikembangkan sebagai bagian dari inisiatif **CV SmartPlus Indonesia**, dengan memanfaatkan teknologi modern seperti Laravel 11, Inertia.js, React, Bootstrap, Laravel Breeze, dan Laravel Sanctum.

## Latar Belakang

Di era digital saat ini, masih banyak pencari kerja menghadapi tantangan seperti:

- Informasi lowongan yang tersebar di berbagai platform dan tidak terpusat.
- Ketidaksesuaian antara keahlian individu dan kebutuhan industri.
- Proses lamaran yang panjang dan tidak efisien.

**Renshuu** hadir sebagai solusi terintegrasi untuk mengatasi permasalahan tersebut. Melalui kurasi lowongan secara cerdas dan antarmuka pengguna yang intuitif, Renshuu membantu pencari kerja menemukan peluang yang relevan dengan cara yang cepat, terpercaya, dan mudah.

## Fitur Utama

- **Pencocokan Lowongan Secara Cerdas**  
  Menyediakan rekomendasi pekerjaan berdasarkan data profil pengguna dan keahlian yang diinputkan.

- **Desain Antarmuka Modern dan Responsif**  
  Dibangun dengan React dan Bootstrap untuk pengalaman pengguna yang optimal di berbagai perangkat.

- **Autentikasi dan Keamanan**  
  Menggunakan Laravel Sanctum untuk manajemen otentikasi dan perlindungan data pengguna.

- **Dashboard Personal**  
  Menyediakan tampilan progres lamaran dan notifikasi lowongan yang sesuai secara real-time.

- **Dukungan Multi-Sektor**  
  Menjangkau berbagai bidang pekerjaan, mulai dari teknologi, industri kreatif, hingga sektor profesional lainnya.

## Teknologi yang Digunakan

- **Backend**: Laravel 11
- **Frontend**: Inertia.js, React, Bootstrap
- **Autentikasi**: Laravel Breeze & Laravel Sanctum
- **Database**: MySQL
- **Build Tools**: Composer, npm, Vite

## Panduan Instalasi

### Prasyarat

Pastikan Anda telah menginstal:

- PHP 8.2 atau lebih tinggi
- Composer
- Node.js dan npm
- MySQL
- Git

### Langkah-langkah

1. **Klon repositori**

```bash
git clone https://github.com/cvsmartplus/Renshuu-app.git
cd renshuu
````

2. **Instalasi dependensi PHP**

```bash
composer install
```

3. **Instalasi dependensi JavaScript**

```bash
npm install
```

4. **Salin dan konfigurasikan file environment**

```bash
cp .env.example .env
php artisan key:generate
```

> Konfigurasi `.env` hanya tersedia bagi pengembang resmi. Hubungi tim pengembang untuk mendapatkan akses jika Anda memiliki kewenangan.

5. **Edit kredensial database di `.env`**

```
DB_DATABASE=nama_database
DB_USERNAME=username
DB_PASSWORD=password
```

6. **Jalankan migrasi dan seeder database**

```bash
php artisan migrate --seed
```

7. **Bangun aset front-end dengan Vite**

```bash
npm run dev
```

8. **Jalankan server lokal**

```bash
php artisan serve
```

9. **Akses aplikasi**

Buka browser dan arahkan ke: [http://localhost:8000](http://localhost:8000)

## Cara Penggunaan

1. **Daftar & Masuk**
   Gunakan formulir autentikasi untuk membuat akun atau masuk ke dalam sistem.

2. **Lengkapi Profil**
   Tambahkan informasi keterampilan, minat kerja, dan preferensi Anda.

3. **Cari Lowongan**
   Telusuri atau filter lowongan berdasarkan sektor, lokasi, dan kata kunci.

4. **Lamar Pekerjaan**
   Ajukan lamaran langsung dari dashboard pengguna.

5. **Pantau Progres**
   Lacak status aplikasi dan respons dari perusahaan melalui sistem pelacakan internal.

## Struktur Proyek

```
renshuu/
├── app/                  # Logika aplikasi Laravel
├── bootstrap/            # File inisialisasi aplikasi
├── config/               # Konfigurasi sistem
├── database/             # Migrasi dan seeder
├── public/               # Aset publik (gambar, JS, dll.)
├── resources/            # Komponen React, views, dan styling
├── routes/               # Definisi rute aplikasi
├── storage/              # Penyimpanan sementara dan log
├── tests/                # Unit & feature tests
├── .env                  # Variabel environment
├── package.json          # Konfigurasi npm
├── vite.config.js        # Konfigurasi Vite
├── README.md             # Dokumentasi utama proyek
└── CONTRIBUTING.md       # Panduan kontribusi (khusus internal)
```

## Kontribusi

Pengembangan proyek **Renshuu** dilakukan secara internal oleh tim yang memiliki kewenangan resmi dari **CV SmartPlus Indonesia**.

> Untuk menjaga integritas, keamanan, dan konsistensi aplikasi, kontribusi dari pihak eksternal saat ini tidak dibuka untuk umum.

Jika Anda merupakan bagian dari tim resmi pengembang dan ingin melakukan kontribusi, silakan mengacu pada panduan internal yang tersedia di `CONTRIBUTING.md`.

## Lisensi

Proyek ini didistribusikan dengan lisensi **MIT**. Silakan lihat file `LICENSE` untuk informasi lebih lanjut.

---

**Renshuu** berkomitmen menjadi mitra terpercaya bagi pencari kerja di Indonesia dengan menghadirkan pengalaman pencarian kerja yang cepat, terkurasi, dan menyenangkan melalui teknologi yang relevan dan berkelanjutan.

Jika kamu juga ingin versi `CONTRIBUTING.md` yang sesuai dengan aturan internal (misalnya format commit, struktur folder yang boleh diubah, dll), tinggal bilang saja!
