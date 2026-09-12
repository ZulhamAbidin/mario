/*

  PANDUAN SINGKAT UNTUK MENAMBAH DATA (CARI DATA SETELAH TANDA "START")
  -----------------------------------
  1. File ini adalah satu-satunya tempat untuk menambah data website.
  2. Ganti isi teks di dalam tanda kutip, lalu simpan file ini.
  3. upload gambar anda di folder  "upload".
     Contoh path gambar: 'upload/nama-file.jpg'
  4. nama file tersebut dapat dipakai atau dipanggil di berbagai halaman, jika link vidio anda cukup menempelkan saja.

  PENANDA =
                 "TAMBAH DATA DI ATAS SINI".

   #anda dapat mememanfaatkan fitur cari dengan keyword "tambah data" untuk menemukan bagian yang ingin diubah.
   */


const testimonialData = [];
const behindLensImages = [];
const creativeImages = [];
const serviceData = [
  {
    title: 'Editing',
    description: 'Motion Graphics, VFX, Speedramp, Dokumenter, Style, Reels Content Instagram, Real Estate promotion.',
    imageUrl: 'upload/editing.png',
    slug: 'video-editing'
  },
  {
    title: 'Videography Projects',
    description: 'Dari konsep hingga eksekusi visual, kami siap mewujudkan visi kreatifmu.',
    imageUrl: 'upload/jumbotron2.jpg',
    slug: 'videography-projects'
  },
  {
    title: 'Photography Sessions',
    description: 'Wisuda, Wedding, Event, Family Gathering, Real estate.',
    imageUrl: 'upload/fotography.jpg',
    slug: 'photography-sessions'
  }
];

const videoEditingData = [];
const videographyData = [];
const photoData = [];

function addTestimonial(initials, name, role, quote) {
  testimonialData.push({ initials, name, role, quote });
}

function addBehindLensImage(source, alt) {
  behindLensImages.push({ source, alt });
}

function addCreativeImage(source, alt) {
  creativeImages.push({ source, alt });
}

function addVideo(target, title, link, description = '') {
  target.push({ title, link, description });
}

function addPhoto(title, source, alt, description = '') {
  photoData.push({ title, source, alt, description });
}


// START
// UNTUK MEMOFIDIFIKASI HALAMAN, SILAHKAN TAMBAH DATA DI BAGIAN DIBAWAH SESUAI DENGAN PETUNJUK DI ATAS. JANGAN MENGUBAH BAGIAN LAINNYA.



// ====================================================DIBAWAH INI ADALAH BEHIND THE LENS===================================================================

/* A. GAMBAR CAROUSEL BEHIND THE LENS DI HALAMAN UTAMA*/

addBehindLensImage('upload/jumbotron2.jpg', 'Pengalaman proyek visual Mario');
addBehindLensImage('upload/jumbotron2.jpg', 'Dokumentasi proyek fotografi Mario');
addBehindLensImage('upload/jumbotron2.jpg', 'Karya visual Mario');
addBehindLensImage("upload/contoh-data-wisuda3.jfif", "Karya visual Mario");

// TAMBAH DATA DI ATAS SINI - BEHIND THE LENS








// ====================================================DIBAWAH INI ADALAH TESTIMONIAL===================================================================

/* B. TESTIMONIAL / KOMENTAR KLIEN*/

addTestimonial('AR', 'Andi Ramadhan', 'Koordinator Event Kampus',
  'Dokumentasi acara dies natalis kami terasa hidup. Momen penting dan suasana acaranya berhasil ditangkap dengan baik.');
addTestimonial('NS', 'Nisa Safitri', 'Pemilik Brand Kuliner',
  'Foto produk yang dibuat terlihat lebih menggugah dan membantu kami menyiapkan konten promosi untuk media sosial.');
addTestimonial('FA', 'Fajar Akbar', 'Ketua Panitia Seminar',
  'Proses koordinasinya mudah dan hasil video after movie kami selesai sesuai jadwal dengan alur cerita yang jelas.');
addTestimonial('RM', 'Rina Maharani', 'Marketing UMKM',
  'Mario memahami kebutuhan brand kami dan memberikan arahan saat proses pengambilan gambar sehingga hasilnya lebih terarah.');

addTestimonial('JL', 'ZULHAM ABIDIN', 'Anggota Komunitas Fotografi',
  'Proses koordinasinya mudah dan hasil video after movie kami selesai sesuai jadwal');



// TAMBAH DATA DI ATAS SINI - TESTIMONIAL









// =========================================================DIBAWAH INI ADALAH Ready to bring your vision to life?==============================================================

/* C. GAMBAR CREATIVE STORIES DI HALAMAN UTAMA (Ready to bring your vision to life)*/

    addCreativeImage('upload/jumbotron3.jpg', 'Dokumentasi proyek videografi Mario');

    addCreativeImage('upload/contoh-data-wisuda1.jfif', 'Dokumentasi proyek videografi Mario');

    addCreativeImage('upload/contoh-data-wisuda2.jfif', 'Dokumentasi proyek videografi Mario');

// TAMBAH DATA DI ATAS SINI - CREATIVE STORIES










// ===========================================================DIBAWAH INI ADALAH HALAMAN VIDEO EDITING============================================================

/* D. VIDEO PADA HALAMAN VIDEO EDITING*/

    addVideo(
      videoEditingData,
      "TES1",
      "https://youtu.be/mfipVL1n2HQ?si=Y3_6_hUrQTueJDvC",
      "AASDASD.",
    );

    addVideo(
      videoEditingData,
      "TES2",
      "https://youtu.be/_D4aRNrmbug?si=9R3i3oj7n3BfIbMi",
      "DASDAD.",
    );


// TAMBAH DATA DI ATAS SINI - VIDEO EDITING










// ========================================================DIBAWAH INI ADALAH HALAMAN VIDEOGRAPHY PROJECTS===============================================================

/* E. VIDEO PADA HALAMAN VIDEOGRAPHY PROJECTS*/

    addVideo(videographyData, 'Dokumentasi Proyek Videografi', 'https://youtu.be/Zwv0TZwuv4I?si=kxeXGlYRw73bvOCM',
    'Contoh video dokumentasi untuk menampilkan alur cerita dan hasil visual proyek videografi.');
    addVideo(videographyData, 'Dokumentasi Proyek Videografi', 'https://youtu.be/Zwv0TZwuv4I?si=kxeXGlYRw73bvOCM',
    'Contoh video dokumentasi untuk menampilkan alur cerita dan hasil visual proyek videografi.');

    addVideo(
      videographyData,
      "cONTOOH3",
      "https://youtu.be/F2i9xDEx13M?si=MCJatRvL3T6nCyRF",
      "ASDASDAS.",
    );



// TAMBAH DATA DI ATAS SINI - VIDEOGRAPHY PROJECTS










// ===============================================DIBAWAH INI ADALAH HALAMAN PHOTOGRAPHY SESSIONS========================================================================

    /* F. FOTO PADA HALAMAN PHOTOGRAPHY SESSIONS*/
    addPhoto(
    'Photography Session Showcase',
    'upload/fotography.jpg',
    'Contoh hasil photography session Mario',
    'Contoh hasil pemotretan untuk kebutuhan portrait, event, dan branding.'
    );


    addPhoto(
      "Photography Session Showcase",
      "upload/contoh-data-wisuda1.jfif",
      "Contoh hasil photography session Mario",
      "Contoh hasil pemotretan untuk kebutuhan portrait, event, dan branding.",
    );

    addPhoto(
      "Photography Session Showcase",
      "upload/contoh-data-wisuda2.jfif",
      "Contoh hasil photography session Mario",
      "Contoh hasil pemotretan untuk kebutuhan portrait, event, dan branding.",
    );

    addPhoto(
      "Photography Session Showcase",
      "upload/contoh-data-wisuda3.jfif",
      "Contoh hasil photography session Mario",
      "Contoh hasil pemotretan untuk kebutuhan portrait, event, dan branding.",
    );


    


// TAMBAH DATA DI ATAS SINI - PHOTOGRAPHY SESSIONS
