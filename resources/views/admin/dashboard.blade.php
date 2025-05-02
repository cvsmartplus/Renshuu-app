@extends('admin.layout.layoutAdmin')

@section('content')
      <div class="container">
        <div class="row">
          <div class="col-xl-4 col-lg-4">
              <x-dashboard-card 
                  title="Total Anggota" 
                  value="{{ $users }}" 
                  growth="{{ $growth }}" 
                  bg-gradient="#e0f7fa, #ffffff" 
                  icon="fas fa-users" 
                  icon-bg="#003366" />
          </div>
          <div class="col-xl-4 col-lg-4">
              <x-dashboard-card 
                  title="Total Kursus" 
                  value="{{ $courses }}" 
                  growth="{{ $coursesGrowth }}" 
                  bg-gradient="#e0fae9, #ffffff" 
                  icon="fas fa-graduation-cap" 
                  icon-bg="#00662a" />
          </div>
          <div class="col-xl-4 col-lg-4">
              <x-dashboard-card 
                  title="Total Artikel" 
                  value="{{ $articles }}" 
                  growth="{{ $articlesGrowth }}" 
                  bg-gradient="#f8fae0, #ffffff" 
                  icon="fas fa-newspaper" 
                  icon-bg="#5e6600" />
          </div>
      </div>
      <div class="mt-3">
        <h2>Hai {{ auth()->user()->name }}!</h2>
        <p>Selamat datang di halaman dashboard admin, berikut adalah beberapa informasi penting:</p>
      </div>
    </div>
@endsection