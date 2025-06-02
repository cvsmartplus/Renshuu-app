@extends('admin.layout.layoutAdmin')

@section('content')
<div class="container mt-4">

    <h2 class="mb-4">Detail Pengguna: {{ $user->name }}</h2>

    @php
        $avatarUrl = optional($user->profile)->avatar ? asset('storage/' . $user->profile->avatar) : asset('images/placeholder/default-profile.jpg');

        $cropX = optional($user->profile)->avatar_crop_x;
        $cropY = optional($user->profile)->avatar_crop_y;
        $cropW = optional($user->profile)->avatar_crop_width;
        $cropH = optional($user->profile)->avatar_crop_height;
        $originalW = optional($user->profile)->avatar_image_width;
        $originalH = optional($user->profile)->avatar_image_height;

        $hasCrop = $cropX !== null && $cropY !== null && $cropW && $cropH && $originalW && $originalH;

        $style = "width: 120px; height: 120px; border-radius: 50%; background-color: #ddd; background-repeat: no-repeat; background-size: cover; background-position: center;";
        if ($avatarUrl) {
            $style .= "background-image: url('$avatarUrl');";
            if ($hasCrop) {
                $scaleX = 120 / $cropW;
                $scaleY = 120 / $cropH;

                $bgSize = ($originalW * $scaleX) . "px " . ($originalH * $scaleY) . "px";
                $bgPos = "-" . ($cropX * $scaleX) . "px -" . ($cropY * $scaleY) . "px";

                $style .= "background-size: $bgSize; background-position: $bgPos;";
            }
        }
    @endphp

    <div class="card mb-4">
        <div class="card-header">Informasi Umum</div>
        <div class="card-body d-flex align-items-center justify-content-between">
            <div>
                <p><strong>Nama:</strong> {{ $user->name }}</p>
                <p><strong>Email:</strong> {{ $user->email }}</p>
                <p><strong>Role:</strong> {{ ucfirst($user->role) }}</p>
                <p><strong>Email Terverifikasi:</strong> {{ $user->email_verified_at ? 'Ya' : 'Belum' }}</p>
                <p><strong>Terdaftar Sejak:</strong> {{ $user->created_at->format('d M Y') }}</p>
            </div>
            <div class="me-4" style="{{ $style }}"></div>
        </div>
    </div>

    @if($user->profile)
    <div class="card mb-4">
        <div class="card-header">Profil</div>
        <div class="card-body">
            <p><strong>Tagline:</strong> {{ $user->profile->tagline ?? '-' }}</p>
            <p><strong>Bio:</strong><br>{{ $user->profile->bio ?? '-' }}</p>
            <p><strong>No HP:</strong> {{ $user->profile->phone ?? '-' }}</p>
            <p><strong>Jenis Kelamin:</strong> {{ ucfirst($user->profile->gender ?? '-') }}</p>
            <p><strong>Status Pernikahan:</strong> {{ ucfirst($user->profile->marital_status ?? '-') }}</p>
            <p><strong>Tanggal Lahir:</strong> {{ optional($user->profile->birth_date)->translatedFormat('d F Y') ?? '-' }}</p>
            <p><strong>Usia:</strong> {{ $user->profile->age ? $user->profile->age . ' tahun' : '-' }}</p>
            <p><strong>Alamat Lengkap:</strong>
                {{ $user->profile->address_detail }},
                {{ $user->profile->village }},
                {{ $user->profile->district }},
                {{ $user->profile->city }},
                {{ $user->profile->province }}
            </p>
            <p><strong>Website:</strong>
                @if($user->profile->website)
                    <a href="{{ $user->profile->website }}" target="_blank">{{ $user->profile->website }}</a>
                @else
                    -
                @endif
            </p>
            <p><strong>Social Links:</strong><br>
                @foreach((array)($user->profile->social_links ?? []) as $platform => $url)
                    @if($url)
                        <a href="{{ $url }}" target="_blank">{{ ucfirst($platform) }}</a><br>
                    @endif
                @endforeach
            </p>
        </div>
    </div>
    @endif

    <div class="card mb-4">
        <div class="card-header">Pengalaman</div>
        <div class="card-body">
            @if($user->experiences && $user->experiences->count())
                <ul class="list-group">
                    @foreach($user->experiences as $exp)
                    <li class="list-group-item">
                        <strong>{{ $exp->title }}</strong> di {{ $exp->company }} ({{ $exp->job_type }})<br>
                        <small>
                            {{ \Carbon\Carbon::parse($exp->start_date)->format('M Y') }}
                            -
                            {{ $exp->end_date ? \Carbon\Carbon::parse($exp->end_date)->format('M Y') : 'Sekarang' }}
                        </small><br>
                        <em>{{ $exp->location }}</em><br>
                        <p>{{ $exp->description }}</p>
                    </li>
                    @endforeach
                </ul>
            @else
                <p class="text-muted">Tidak ada data pengalaman kerja.</p>
            @endif
        </div>
    </div>

    <div class="card mb-4">
        <div class="card-header">Pendidikan</div>
        <div class="card-body">
            @if($user->educations && $user->educations->count())
                <ul class="list-group">
                    @foreach($user->educations as $edu)
                    <li class="list-group-item">
                        <strong>{{ $edu->degree }}</strong> - {{ $edu->institution }}<br>
                        <small>{{ \Carbon\Carbon::parse($edu->start_date)->format('Y') }} - {{ $edu->end_date ? \Carbon\Carbon::parse($edu->end_date)->format('Y') : 'Sekarang' }}</small><br>
                        <em>{{ $edu->field_of_study }}</em><br>
                        <p>{{ $edu->description }}</p>
                    </li>
                    @endforeach
                </ul>
            @else
                <p class="text-muted">Tidak ada data pendidikan.</p>
            @endif
        </div>
    </div>

    {{-- Keahlian --}}
    <div class="card mb-4">
        <div class="card-header">Keahlian</div>
        <div class="card-body">
            @if($user->userSkills && $user->userSkills->count())
                <div class="d-flex flex-wrap">
                    @foreach($user->userSkills as $skill)
                        <span class="badge bg-brand-950 m-1 p-2">{{ $skill->name }}</span>
                    @endforeach
                </div>
            @else
                <p class="text-muted">Tidak ada data keahlian.</p>
            @endif
        </div>
    </div>

    {{-- Dokumen --}}
    <div class="card mb-4">
        <div class="card-header fw-bold">Dokumen Pengguna</div>
        <div class="card-body">
            @if($user->documents && $user->documents->count())
                <div class="row g-4">
                    @foreach($user->documents as $doc)
                        @php
                            $path = asset('storage/' . $doc->document_path);
                            $ext = strtolower(pathinfo($path, PATHINFO_EXTENSION));
                            $modalId = 'modalVerifyDoc' . $doc->id;
                        @endphp

                        <div class="col-md-6">
                            <div class="card shadow-sm h-100 border">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-start">
                                        <div>
                                            <h6 class="fw-semibold">{{ strtoupper($doc->document_type) }}
                                                <span class="badge 
                                                    @if($doc->status === 'verified') bg-success
                                                    @elseif($doc->status === 'rejected') bg-danger
                                                    @else bg-warning text-dark
                                                    @endif">
                                                    {{ ucfirst($doc->status) }}
                                                </span>
                                            </h6>
                                        </div>
                                    </div>

                                    <div class="mt-3">
                                        @if (in_array($ext, ['jpg', 'jpeg', 'png', 'webp']))
                                            <img src="{{ $path }}" alt="Dokumen" class="img-fluid rounded border" style="max-height: 250px; object-fit: contain;">
                                        @elseif ($ext === 'pdf')
                                            <embed src="{{ $path }}" type="application/pdf" width="100%" height="250px" class="rounded shadow-sm" />
                                        @else
                                            <p class="text-muted">Tidak dapat menampilkan pratinjau untuk file .{{ $ext }}</p>
                                            <a href="{{ $path }}" target="_blank" class="btn btn-sm btn-outline-primary">Lihat / Unduh</a>
                                        @endif
                                    </div>

                                    @if ($doc->status === 'pending')
                                        <button class="btn-outline-brand-950 mt-3 w-100" data-bs-toggle="modal" data-bs-target="#{{ $modalId }}">
                                            Verifikasi / Tolak Dokumen
                                        </button>
                                    @elseif($doc->status === 'rejected' && $doc->rejected_reason)
                                        <div class="mt-2 text-danger">
                                            <strong>Alasan Penolakan:</strong>
                                            <p class="mb-0">{{ $doc->rejected_reason }}</p>
                                        </div>
                                    @endif
                                </div>
                            </div>
                        </div>

                        <div class="modal fade" id="{{ $modalId }}" tabindex="-1" aria-labelledby="{{ $modalId }}Label" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <form action="{{ route('admin.users.documents.verify', [$user->id, $doc->id]) }}" method="POST">
                                    @csrf
                                    @method('PATCH')

                                        <div class="modal-header">
                                            <h5 class="modal-title" id="{{ $modalId }}Label">Verifikasi Dokumen</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Tutup"></button>
                                        </div>
                                        
                                        <div class="modal-body">
                                            <p>Apakah Anda ingin <strong>verifikasi</strong> atau <strong>tolak</strong> dokumen <em>{{ strtoupper($doc->document_type) }}</em>?</p>
                                            
                                            <div class="mb-3">
                                                <label for="rejected_reason_{{ $doc->id }}" class="form-label">Alasan Penolakan (opsional)</label>
                                                <textarea name="rejected_reason" id="rejected_reason_{{ $doc->id }}" class="form-control" rows="2" placeholder="Isi jika ingin menolak"></textarea>
                                            </div>
                                        </div>

                                        <div class="modal-footer d-flex justify-content-between">
                                            <button type="submit" name="action" value="reject" class="btn btn-danger">Tolak</button>
                                            <button type="submit" name="action" value="verify" class="btn btn-success">Verifikasi</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    @endforeach
                </div>
            @else
                <p class="text-muted">Tidak ada dokumen yang diunggah.</p>
            @endif
        </div>
    </div>

</div>
@endsection