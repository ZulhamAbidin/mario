# Panduan Menambah Data Melalui GitHub

Panduan ini dibuat untuk pengguna yang belum terbiasa dengan coding. Ikuti langkahnya satu per satu dan ubah hanya bagian yang dijelaskan.

## Yang Akan Dilakukan

Untuk menambah konten website, ada dua langkah utama:

1. Upload gambar ke folder `upload` di GitHub.
2. Edit file `tambah-data.js` untuk mendaftarkan gambar, video, testimonial, atau layanan.

Jangan mengubah file HTML jika hanya ingin menambah data.

## Sebelum Mulai

Siapkan:

- Akun GitHub dengan akses ke repository.
- Gambar yang ingin ditampilkan.
- Judul gambar atau video.
- Deskripsi singkat.
- Link YouTube jika ingin menambah video.

## Bagian A sampai F

Di file `tambah-data.js`, area input data dibagi menjadi beberapa bagian:

- **A**: Gambar carousel Behind the lens di halaman utama.
- **B**: Testimonial atau komentar klien.
- **C**: Gambar Creative Stories di halaman utama.
- **D**: Video Editing.
- **E**: Videography Projects.
- **F**: Photography Sessions.

Gunakan fitur pencarian GitHub dengan kata kunci berikut untuk menemukan lokasi penambahan:

```text
TAMBAH DATA DI ATAS SINI
```

Tambahkan baris data baru tepat di atas penanda yang sesuai.

## Langkah 1: Buka Repository

1. Buka repository GitHub project.
2. Masuk ke folder `upload`.
3. Pastikan kamu berada di branch yang benar, biasanya `master`.

## Langkah 2: Upload Gambar

1. Buka folder `upload`.
2. Klik tombol **Add file**.
3. Pilih **Upload files**.
4. Pilih gambar dari komputer.
5. Tunggu sampai nama file muncul di halaman.
6. Scroll ke bagian bawah.
7. Isi pesan commit, misalnya:

```text
Tambah foto wisuda
```

8. Klik **Commit changes**.

### Aturan Nama File

Gunakan nama file yang sederhana:

- Gunakan huruf kecil.
- Gunakan angka jika perlu.
- Gunakan tanda `-` untuk spasi.
- Hindari spasi.
- Hindari karakter khusus.

Contoh nama yang baik:

```text
foto-wisuda-01.jpg
foto-brand-2026.jpg
video-event-kampus.jpg
```

Contoh nama yang sebaiknya dihindari:

```text
Foto Wisuda Terbaru!!.jpg
foto#baru.jpg
```

Catat nama file dan ekstensi persis seperti yang terlihat di GitHub. `foto.jpg` dan `foto.JPG` dianggap berbeda.

## Langkah 3: Buka File Data

1. Kembali ke halaman utama repository.
2. Klik file `tambah-data.js`.
3. Klik ikon pensil **Edit this file**.
4. Cari bagian yang sesuai dengan jenis data.
5. Tambahkan data baru di atas penanda `TAMBAH DATA DI ATAS SINI`.
6. Scroll ke bawah.
7. Isi pesan commit, misalnya:

```text
Tambah data foto wisuda
```

8. Klik **Commit changes**.

## A. Menambah Gambar Behind the Lens

Gunakan bagian A untuk gambar carousel di homepage.

Format:

```javascript
addBehindLensImage(
  'upload/nama-file.jpg',
  'Deskripsi gambar'
);
```

Contoh:

```javascript
addBehindLensImage(
  'upload/foto-wisuda-01.jpg',
  'Dokumentasi sesi foto wisuda'
);
```

Letakkan baris tersebut di atas:

```javascript
// TAMBAH DATA DI ATAS SINI - BEHIND THE LENS
```

## B. Menambah Testimonial

Gunakan bagian B untuk komentar klien.

Format:

```javascript
addTestimonial(
  'AB',
  'Nama Klien',
  'Kegiatan atau pekerjaan',
  'Komentar dari klien.'
);
```

Contoh:

```javascript
addTestimonial(
  'DS',
  'Dina Sari',
  'Pemilik Brand Fashion',
  'Hasil fotonya sangat membantu kebutuhan promosi brand kami.'
);
```

Letakkan di atas:

```javascript
// TAMBAH DATA DI ATAS SINI - TESTIMONIAL
```

## C. Menambah Gambar Creative Stories

Gunakan bagian C untuk gambar pada carousel Creative Stories di homepage.

Format:

```javascript
addCreativeImage(
  'upload/nama-file.jpg',
  'Deskripsi gambar'
);
```

Contoh:

```javascript
addCreativeImage(
  'upload/foto-brand-2026.jpg',
  'Dokumentasi produksi video brand'
);
```

Letakkan di atas:

```javascript
// TAMBAH DATA DI ATAS SINI - CREATIVE STORIES
```

## D. Menambah Video Editing

Gunakan bagian D untuk video yang muncul di halaman `video-editing.html`.

Format:

```javascript
addVideo(
  videoEditingData,
  'Judul video',
  'https://youtu.be/ID_VIDEO',
  'Deskripsi video.'
);
```

Contoh:

```javascript
addVideo(
  videoEditingData,
  'Video Promosi Produk',
  'https://youtu.be/abc12345678',
  'Video promosi dengan editing dinamis untuk media sosial.'
);
```

Gunakan link YouTube biasa. Sistem akan mengubahnya menjadi embed secara otomatis.

Letakkan di atas:

```javascript
// TAMBAH DATA DI ATAS SINI - VIDEO EDITING
```

## E. Menambah Videography Projects

Gunakan bagian E untuk video yang muncul di halaman `videography-projects.html`.

Format:

```javascript
addVideo(
  videographyData,
  'Judul proyek',
  'https://youtu.be/ID_VIDEO',
  'Deskripsi proyek.'
);
```

Contoh:

```javascript
addVideo(
  videographyData,
  'Dokumentasi Event Kampus',
  'https://youtu.be/abc12345678',
  'Dokumentasi kegiatan event kampus.'
);
```

Letakkan di atas:

```javascript
// TAMBAH DATA DI ATAS SINI - VIDEOGRAPHY PROJECTS
```

## F. Menambah Foto Photography Sessions

Gunakan bagian F untuk foto yang muncul di halaman `photography-sessions.html`.

Format:

```javascript
addPhoto(
  'Judul foto',
  'upload/nama-file.jpg',
  'Teks alternatif foto',
  'Deskripsi foto.'
);
```

Contoh:

```javascript
addPhoto(
  'Foto Wisuda Outdoor',
  'upload/foto-wisuda-01.jpg',
  'Sesi foto wisuda outdoor',
  'Sesi foto wisuda dengan suasana outdoor.'
);
```

Letakkan di atas:

```javascript
// TAMBAH DATA DI ATAS SINI - PHOTOGRAPHY SESSIONS
```

Foto akan tampil penuh dengan tinggi otomatis mengikuti ukuran asli gambar.

## Menambah Service Card

Daftar service card berada di bagian atas file `tambah-data.js`, pada `const serviceData`.

Tambahkan object baru sebelum tanda penutup `];`:

```javascript
{
  title: 'Nama Layanan',
  description: 'Penjelasan singkat layanan.',
  imageUrl: 'upload/nama-gambar.jpg',
  slug: 'nama-file-halaman'
}
```

Catatan: `slug` harus sesuai dengan nama file HTML. Contoh `video-editing` akan membuka `video-editing.html`.

## Checklist Setelah Commit

Periksa hal berikut:

- Gambar terlihat di folder `upload`.
- Path dimulai dengan `upload/`.
- Nama file dan ekstensi sama persis.
- Data ditambahkan di bagian yang benar.
- Tanda koma dan tanda kutip tidak terhapus.
- Link YouTube dapat dibuka.
- Website tidak menampilkan gambar rusak.
- Website tidak menampilkan error JavaScript di browser.

## Hal yang Jangan Diubah

Jangan mengubah atau menghapus:

- Nama array seperti `photoData` dan `videoEditingData`.
- Nama fungsi seperti `addPhoto` dan `addVideo`.
- ID HTML seperti `photoGallery` dan `videoGallery`.
- Folder `upload`.
- Ekstensi file gambar.

Jika terjadi kesalahan, buka tab **Actions** atau **Commits** di GitHub untuk melihat perubahan terakhir. Perubahan dapat diperiksa kembali sebelum diperbaiki pada commit berikutnya.
