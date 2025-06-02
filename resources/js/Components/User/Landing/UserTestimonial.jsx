import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Andi Pratama',
    position: 'Web Developer',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    message: 'Platform ini sangat membantu saya mendapatkan pekerjaan impian saya hanya dalam waktu 2 minggu!',
  },
  {
    id: 2,
    name: 'Siti Rahma',
    position: 'UI/UX Designer',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    message: 'Desain yang ramah pengguna dan fitur pencariannya sangat membantu saya menemukan lowongan yang sesuai.',
  },
  {
    id: 3,
    name: 'Raka Firmansyah',
    position: 'Digital Marketer',
    image: 'https://randomuser.me/api/portraits/men/77.jpg',
    message: 'Saya suka dengan sistem notifikasi yang selalu update ketika ada lowongan baru. Recommended banget!',
  },
];

export default function UserTestimonial() {
  return (
    <section
      className="p-5"
      style={{
        background: 'linear-gradient(to right, #1c488c, #082f49)',
        color: '#fff',
      }}
    >
      <div className="container">
        <div
          className="p-4 text-center mb-4"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(12px)',
            borderRadius: '20px',
          }}
        >
          <h2 className="fw-bold">Apa Kata Mereka?</h2>
          <p className="mb-0">Beberapa pengguna kami yang telah berhasil mendapatkan pekerjaan impiannya</p>
        </div>

        <div className="row justify-content-center g-4">
          {testimonials.map((t) => (
            <div className="col-md-4" key={t.id}>
              <div
                className="p-4 h-100 rounded text-center shadow"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  transition: '0.3s',
                  borderRadius: '16px',
                }}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="rounded-circle mb-3"
                  width="80"
                  height="80"
                  style={{ objectFit: 'cover', border: '3px solid #fff' }}
                />
                <h5 className="fw-bold">{t.name}</h5>
                <p className="fst-italic mb-2 text-light">{t.position}</p>
                <p className="text-white-50" style={{ fontSize: '15px' }}>{`“${t.message}”`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
