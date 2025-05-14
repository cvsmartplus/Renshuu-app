@extends('admin.layout.layoutAdmin')

@section('content')
      <div class="container">
        <div class="mt-3">
            <h2>Hai {{ auth()->user()->name }}!</h2>
            <p>Selamat datang di halaman dashboard admin, berikut adalah beberapa informasi penting:</p>
      </div>
    <div class="row g-2 mt-3">
          <div class="col-xl-4 col-lg-4">
              <x-dashboard-card 
                  title="Total Anggota" 
                  value="{{ $users }}" 
                  growth="{{ $growth }}" 
                  bg-gradient="#e0f7fa, #ffffff" 
                  icon="gridicons:multiple-users" 
                  icon-bg="#003366" 
                  route="{{ route('admin.dashboard') }}"/>
          </div>
          <div class="col-xl-4 col-lg-4">
              <x-dashboard-card 
                  title="Total Kursus" 
                  value="{{ $courses }}" 
                  growth="{{ $coursesGrowth }}" 
                  bg-gradient="#e0fae9, #ffffff" 
                  icon="material-symbols:menu-book-outline-rounded" 
                  icon-bg="#00662a" 
                  route="{{ route('admin.courses') }}"/>
          </div>
          <div class="col-xl-4 col-lg-4">
              <x-dashboard-card 
                  title="Total Artikel" 
                  value="{{ $articles }}" 
                  growth="{{ $articlesGrowth }}" 
                  bg-gradient="#f8fae0, #ffffff" 
                  icon="material-symbols:article-outline" 
                  icon-bg="#5e6600" 
                  route="{{ route('admin.articles') }}"/>
          </div>
          <div class="col-xl-4 col-lg-4">
            <x-dashboard-card 
                title="Total Lowongan" 
                value="{{ $jobs }}" 
                growth="{{ $jobsGrowth }}" 
                bg-gradient="#f0e0fa, #ffffff" 
                icon="mdi:briefcase-outline" 
                icon-bg="#5b0080" 
                route="{{ route('admin.jobs') }}"/>
        </div>
        <div class="col-xl-4 col-lg-4">
            <x-dashboard-card 
                title="Perusahaan Terverifikasi" 
                value="{{ $companies }}" 
                growth="{{ $companiesGrowth }}" 
                bg-gradient="#e0ecfa, #ffffff" 
                icon="iconoir:building" 
                icon-bg="#004080" 
                route="#"/>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <x-chart-box id="ChartUser" title="Perkembangan Anggota" subtitle="Berdasarkan bulan lalu" />
        </div>
        <div class="col-lg-6">
          <x-chart-box id="ChartCourse" title="Perkembangan Kursus" subtitle="Berdasarkan bulan lalu" />
        </div>
        <div class="col-lg-6">
          <x-chart-box id="ChartArticle" title="Artikel Terunggah" subtitle="Berdasarkan bulan lalu" />
        </div>
      </div>
    </div>
@endsection

@push('scripts')
<script>
    const labels = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];

    const userData = @json($userData);
    const courseData = @json($courseData);
    const articleData = @json($articleData);
    
    

  new Chart(document.getElementById('ChartUser'), {
      type: 'line',
      data: {
          labels: labels,
          datasets: [{
              label: 'User',
              data: userData,
              borderColor: 'blue',
              backgroundColor: 'rgba(0,0,255,0.1)',
              tension: 0.4
          }]
      },
      options: {
        scales: {
            y: {
                ticks: {
                    callback: function(value) {
                        return Number.isInteger(value) ? value : '';
                    },
                    stepSize: 1
                },
                beginAtZero: true
            }
        }
    }
  });

  new Chart(document.getElementById('ChartCourse'), {
      type: 'line',
      data: {
          labels: labels,
          datasets: [{
              label: 'Kursus',
              data: courseData,
              borderColor: 'green',
              backgroundColor: 'rgba(0,255,0,0.1)',
              tension: 0.4
          }]
      },
      options: {
        scales: {
            y: {
                ticks: {
                    callback: function(value) {
                        return Number.isInteger(value) ? value : '';
                    },
                    stepSize: 1
                },
                beginAtZero: true
            }
        }
    }
  });

  new Chart(document.getElementById('ChartArticle'), {
      type: 'bar',
      data: {
          labels: labels,
          datasets: [{
              label: 'Artikel',
              data: articleData,
              backgroundColor: 'orange'
          }]
      },
      options: {
        scales: {
            y: {
                ticks: {
                    callback: function(value) {
                        return Number.isInteger(value) ? value : '';
                    },
                    stepSize: 1
                },
                beginAtZero: true
            }
        }
    }
  });
</script>
@endpush