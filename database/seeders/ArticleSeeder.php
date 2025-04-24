<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ArticleSeeder extends Seeder
{
    public function run()
    {
        $articles = [
            [
                "title" => "Masa Depan Pendidikan: Inovasi dan Tantangan di Era Digital",
                "content" => "
                    <h3>📌 Tren Pendidikan</h3>
                    <ul>
                        <li>Hybrid Learning semakin populer di berbagai institusi.</li>
                        <li>AI dalam pendidikan membantu personalisasi pembelajaran.</li>
                        <li>Pendidikan berbasis data meningkatkan efektivitas pengajaran.</li>
                    </ul>
                    <h3>🔍 Tantangan</h3>
                    <ol>
                        <li>Kesenjangan akses digital.</li>
                        <li>Keamanan data siswa dalam platform online.</li>
                        <li>Kesiapan tenaga pengajar menghadapi era digital.</li>
                    </ol>
                    <h3>💡 Kesimpulan</h3>
                    <p>Dengan pemanfaatan teknologi yang tepat, pendidikan bisa menjadi lebih inklusif dan efektif.</p>
                    <blockquote>Belajar adalah investasi terbaik untuk masa depan. - Anonim</blockquote>",
                "excerpt" => "Pendidikan mengalami perubahan besar di era digital. Model pembelajaran hybrid dan AI mengubah cara kita belajar.",
                "media_path" => "https://picsum.photos/600/400?random=1",
            ],
            [
                "title" => "Revolusi Kesehatan: Bagaimana Teknologi Mengubah Medis",
                "content" => "
                    <h3>🚀 Inovasi Terbaru</h3>
                    <ul>
                        <li>AI membantu dokter dalam diagnosis lebih akurat.</li>
                        <li>Telemedicine memungkinkan konsultasi jarak jauh.</li>
                        <li>Wearable devices memonitor kesehatan pengguna secara real-time.</li>
                    </ul>
                    <h3>⚠️ Tantangan</h3>
                    <ol>
                        <li>Keamanan data pasien.</li>
                        <li>Biaya tinggi dalam pengembangan teknologi medis.</li>
                        <li>Adaptasi regulasi kesehatan terhadap inovasi baru.</li>
                    </ol>
                    <h3>💡 Kesimpulan</h3>
                    <p>Teknologi medis memberikan harapan baru dalam dunia kesehatan, meningkatkan efisiensi layanan, dan menyelamatkan lebih banyak nyawa.</p>
                    <blockquote>Kesehatan adalah kekayaan terbesar. - Ralph Waldo Emerson</blockquote>",
                "excerpt" => "Dari AI hingga telemedicine, inovasi dalam teknologi kesehatan meningkatkan akses dan efisiensi layanan medis.",
                "media_path" => "https://picsum.photos/600/400?random=2",
            ],
            [
                "title" => "Dampak AI di Dunia Kerja: Peluang dan Tantangan",
                "content" => "
                    <h3>⚙️ Pengaruh AI</h3>
                    <ul>
                        <li>AI menggantikan pekerjaan rutin dan repetitif.</li>
                        <li>Perusahaan meningkatkan efisiensi dengan AI-driven analytics.</li>
                        <li>Keterampilan baru diperlukan untuk beradaptasi di era AI.</li>
                    </ul>
                    <h3>🔹 Tantangan</h3>
                    <ol>
                        <li>Perubahan struktur pekerjaan.</li>
                        <li>Ketimpangan akses terhadap teknologi AI.</li>
                        <li>Etika dalam pengambilan keputusan berbasis AI.</li>
                    </ol>
                    <h3>💡 Kesimpulan</h3>
                    <p>AI membawa peluang dan tantangan, tetapi dengan strategi yang tepat, dapat menciptakan dunia kerja yang lebih inovatif.</p>
                    <blockquote>Adaptasi terhadap perubahan adalah kunci untuk bertahan. - Charles Darwin</blockquote>",
                "excerpt" => "Artificial Intelligence mengubah industri dengan otomatisasi dan efisiensi yang lebih tinggi.",
                "media_path" => "https://picsum.photos/600/400?random=3",
            ],
            [
                "title" => "Perubahan Iklim: Apa yang Bisa Kita Lakukan?",
                "content" => "
                    <h3>🌎 Fakta Perubahan Iklim</h3>
                    <ul>
                        <li>Suhu global meningkat drastis dalam 50 tahun terakhir.</li>
                        <li>Es di kutub mencair lebih cepat dari prediksi.</li>
                        <li>Cuaca ekstrem menjadi lebih sering terjadi.</li>
                    </ul>
                    <h3>🌿 Solusi</h3>
                    <ol>
                        <li>Mengurangi emisi karbon dengan energi terbarukan.</li>
                        <li>Mengurangi konsumsi plastik sekali pakai.</li>
                        <li>Menanam lebih banyak pohon untuk menyerap CO₂.</li>
                    </ol>
                    <h3>💡 Kesimpulan</h3>
                    <p>Setiap individu dapat berkontribusi dalam menjaga bumi agar tetap layak huni bagi generasi mendatang.</p>
                    <blockquote>Kita tidak mewarisi bumi dari nenek moyang kita, kita meminjamnya dari anak cucu kita. - Peribahasa Amerika</blockquote>",
                "excerpt" => "Krisis iklim semakin nyata. Apa peran kita dalam mengurangi dampaknya?",
                "media_path" => "https://picsum.photos/600/400?random=4",
            ],
            [
                "title" => "Teknologi Blockchain: Masa Depan Keamanan Digital",
                "content" => "
                    <h3>🔗 Apa Itu Blockchain?</h3>
                    <p>Blockchain adalah teknologi yang memungkinkan pencatatan transaksi secara aman dan terdesentralisasi.</p>
                    <h3>📈 Manfaat Blockchain</h3>
                    <ul>
                        <li>Keamanan data lebih terjamin.</li>
                        <li>Transparansi dalam transaksi digital.</li>
                        <li>Mengurangi ketergantungan pada pihak ketiga.</li>
                    </ul>
                    <h3>⚠️ Tantangan</h3>
                    <ol>
                        <li>Regulasi yang belum jelas.</li>
                        <li>Adopsi yang masih terbatas.</li>
                        <li>Konsumsi energi dalam proses mining.</li>
                    </ol>
                    <h3>💡 Kesimpulan</h3>
                    <p>Blockchain memiliki potensi besar dalam berbagai sektor, dari keuangan hingga kesehatan.</p>
                    <blockquote>Teknologi harus digunakan untuk meningkatkan kehidupan manusia. - Bill Gates</blockquote>",
                "excerpt" => "Blockchain bukan hanya tentang kripto, tetapi juga masa depan transparansi dan keamanan digital.",
                "media_path" => "https://picsum.photos/600/400?random=5",
            ]
        ];

        foreach ($articles as $article) {
            $slug = Str::slug($article['title']);
            if (DB::table('articles')->where('slug', $slug)->exists()) {
                $slug .= '-' . Str::random(5);
            }
            DB::table('articles')->insert([
                'title' => $article['title'],
                'slug' => $slug,
                'content' => $article['content'],
                'excerpt' => $article['excerpt'],
                'media_path' => $article['media_path'],
                'status' => 'published',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
