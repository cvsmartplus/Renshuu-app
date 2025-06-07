# Panduan Kontribusi untuk Renshuu

Terima kasih atas minat Anda terhadap proyek **Renshuu** — sebuah platform pencarian kerja berbasis Laravel 11 yang dikembangkan oleh **CV SmartPlus Indonesia**.

> ⚠️ **Penting:** Hanya anggota tim pengembang resmi atau pihak yang telah diberi **kewenangan resmi** oleh tim pengelola yang dapat berkontribusi pada proyek ini. Proyek ini menggunakan file `.env` yang berisi konfigurasi sensitif dan hanya diberikan kepada pengembang resmi yang telah diverifikasi.

## Daftar Isi

* Pendahuluan
* Kode Etik
* Siapa yang Boleh Berkontribusi
* Persiapan Pengembangan
* Cara Berkontribusi
* Standar Commit dan Penamaan Branch
* Pedoman Penulisan Kode
* Proses Review Pull Request
* Pelaporan Bug
* Pengajuan Permintaan Fitur
* Kontak

---

## Pendahuluan

Proyek ini bertujuan untuk memberikan kemudahan dalam mencari pekerjaan bagi masyarakat Indonesia melalui teknologi modern. Agar pengembangan tetap konsisten dan berkualitas tinggi, kami menerapkan prosedur dan aturan kolaborasi yang ketat.

---

## Kode Etik

Setiap kontributor diharapkan untuk:

* Menjaga komunikasi yang profesional dan sopan.
* Menghargai setiap anggota tim tanpa diskriminasi.
* Memberikan umpan balik yang konstruktif.
* Mengikuti standar penulisan kode dan dokumentasi yang telah ditentukan.

---

## Siapa yang Boleh Berkontribusi

Renshuu **tidak terbuka untuk kontribusi publik**. Hanya individu yang:

* Merupakan bagian dari tim internal pengembang CV SmartPlus Indonesia.
* Telah diberi akses ke file `.env` dan konfigurasi sistem.
* Telah memahami alur kerja proyek secara menyeluruh.

... yang diperbolehkan untuk melakukan perubahan atau penambahan pada kode sumber.

Jika Anda bukan bagian dari tim resmi, silakan hubungi kami terlebih dahulu melalui email di [renshuu74@gmail.com](mailto:renshuu74@gmail.com).

---

## Persiapan Pengembangan

Pastikan Anda telah membaca dan mengikuti **README.md** untuk setup lokal. Beberapa hal penting yang harus dipastikan:

* Laravel, Node.js, MySQL, Composer dan npm telah terinstal dengan benar.
* Konfigurasi `.env` telah disesuaikan dengan database lokal Anda.
* Dependensi backend dan frontend telah diinstal (`composer install` dan `npm install`).

---

## Cara Berkontribusi

### 1. Fork dan Clone Repositori

```bash
git clone https://github.com/your-username/renshuu.git
cd renshuu
```

### 2. Buat Branch Baru

Gunakan nama branch yang **deskriptif dan sesuai standar industri global**.

**Contoh penamaan branch:**

| Tipe          | Format Branch                 | Contoh                         |
| ------------- | ----------------------------- | ------------------------------ |
| Fitur Baru    | `feat/nama-fitur`             | `feat/job-filter`              |
| Perbaikan Bug | `fix/nama-perbaikan`          | `fix/login-validation-error`   |
| Refactor      | `refactor/nama-bagian`        | `refactor/profile-component`   |
| Penghapusan   | `remove/nama-file-atau-fitur` | `remove/deprecated-api-method` |

```bash
git checkout -b feat/job-filter
```

---

## Standar Commit Message

Gunakan format commit yang konsisten agar histori Git mudah dibaca dan ditelusuri.

**Format commit message:**

```
<type>: <deskripsi singkat>
```

**Jenis-jenis commit yang digunakan:**

| Tipe Commit | Keterangan                               | Contoh                                   |
| ----------- | ---------------------------------------- | ---------------------------------------- |
| feat        | Menambahkan fitur baru                   | `feat: implement job recommendation`     |
| fix         | Memperbaiki bug                          | `fix: resolve 500 error on login`        |
| refactor    | Refactor kode tanpa mengubah fungsi      | `refactor: simplify profile logic`       |
| docs        | Perubahan dokumentasi                    | `docs: update README installation steps` |
| style       | Perubahan terkait style (indentasi, dll) | `style: reformat job card spacing`       |
| test        | Menambahkan atau memperbaiki test        | `test: add test for job filter`          |
| chore       | Tugas teknis tidak terkait fitur         | `chore: update dependencies`             |
| remove      | Menghapus file atau fitur                | `remove: delete unused profile image`    |

---

## Pedoman Penulisan Kode

### Gaya Penulisan

* **PHP:** Gunakan standar PSR-12. Format otomatis dengan **Laravel Pint**.
* **JavaScript/React:** Ikuti panduan **Airbnb JavaScript Style Guide** menggunakan **ESLint**.
* **CSS/Bootstrap:** Gunakan kelas Bootstrap standar sebisa mungkin. Hindari custom CSS jika tidak diperlukan.

### Struktur dan Penamaan

* PHP: Gunakan `CamelCase` untuk class dan `snake_case` untuk file.
* JS/React: Gunakan `PascalCase` untuk komponen dan `kebab-case` untuk file biasa.
* Tempatkan file pada direktori yang sesuai.

### Testing

* Gunakan `PHPUnit` untuk pengujian backend.
* Gunakan `React Testing Library` untuk frontend.
* Jalankan test sebelum membuat pull request:

```bash
php artisan test
npm run test
```

---

## Proses Review Pull Request

1. **Buat Pull Request ke branch `main`**.
2. **Isi deskripsi PR** secara lengkap dan jelas.
3. **Referensikan issue terkait** jika ada (contoh: `Fixes #12`).
4. Pull Request akan direview oleh maintainer dalam 3–5 hari kerja.
5. Anda diminta memperbaiki jika ada masukan sebelum bisa digabungkan (merge).

---

## Pelaporan Bug

Jika Anda adalah bagian dari tim pengembang dan menemukan bug:

1. Buka **Issue** baru di GitHub.
2. Gunakan judul yang jelas seperti `Bug: Error saat login`.
3. Jelaskan langkah reproduksi, hasil yang diharapkan vs yang terjadi, serta lampirkan log jika ada.

---

## Pengajuan Fitur Baru

1. Buka **Issue** dengan judul diawali `[Feature Request]`.
2. Jelaskan fitur, manfaatnya, serta rencana implementasi secara ringkas.

---

## Kontak

Untuk pertanyaan atau klarifikasi kontribusi, hubungi:

* Email: [support@renshuu.id](mailto:support@renshuu.id)
* GitHub Issues: [https://github.com/CVSmartPlusIndonesia/renshuu/issues](https://github.com/CVSmartPlusIndonesia/renshuu/issues)

---

## Penutup

Renshuu adalah proyek internal dan strategis. Kami berkomitmen menjaga kualitas kode dan proses pengembangannya. Terima kasih atas kontribusi Anda yang telah diberi wewenang. Tetap semangat membangun platform yang berdampak bagi pencari kerja Indonesia.