<div class="card" style="background: linear-gradient(135deg, {{ $bgGradient }}); border-radius: 12px;">
  <div class="card-body p-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div>
        <h5 class="card-title mb-0 text-muted">
          <a href="{{ $route }}" class="text-decoration-none text-black">{{ $title }}</a>
        </h5>
        <h2 class="mb-0 fw-bold">{{ $value }}</h2>
        <small class="{{ $growth >= 0 ? 'text-success' : 'text-danger' }}">
          {{ $growth >= 0 ? '+' : '' }}{{ $growth }} dibandingkan bulan lalu
        </small>
      </div>

      <div class="card-icon d-flex justify-content-center align-items-center"
           style="background-color: {{ $iconBg }}; width: 50px; height: 50px; border-radius: 50%;">
        <iconify-icon icon="{{ $icon }}" class="text-white" width="28" height="28"></iconify-icon>
      </div>
    </div>
  </div>
</div>
