<div class="card h-100 shadow-sm p-2">
    <img src="{{ $media_path }} class="card-img-top" style="height: 200px; object-fit: cover;" alt="...">
    <div class="card-body d-flex flex-column text-start">
        <h5 class="card-title fs-5 text-start">{{  $title }}</h5>
        <p class="card-text flex-grow-1 text-start">{{ $excerpt }}</p>
        <a href="{{ route('#', $slug) }}" class="text-darkblue text-decoration-none">Selengkapnya</a>
    </div>
</div>