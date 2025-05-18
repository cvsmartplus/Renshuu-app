@extends('admin.layout.layoutAdmin')

@section('title', 'Manajemen Pengguna | Admin')

@section('content')
<div class="container">
    <h2>Daftar Pengguna</h2>

    <div class="row g-2 mb-5 mt-3">
        <div class="col-xl-4 col-lg-4">
            <x-dashboard-card 
                title="Total Pengguna" 
                value="{{ $user->count() }}" 
                growth="{{ $userGrowth }}" 
                bg-gradient="#e0f7fa, #ffffff" 
                icon="gridicons:multiple-users" 
                icon-bg="#003366" 
                route="#"/>
        </div>
        <div class="col-xl-4 col-lg-4">
            <x-dashboard-card 
                title="Pengguna Terverifikasi" 
                value="{{ $user->whereNotNull('email_verified_at')->count() }}" 
                growth="{{ $userVerifiedGrowth - $user->count() }}" 
                bg-gradient="#e0fae9, #ffffff" 
                icon="material-symbols:verified-outline-rounded" 
                icon-bg="#00662a" 
                route="#"/>
        </div>
    </div>

    <div>
        <ul class="nav nav-tabs mb-3" id="userTabs" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="pengguna-tab" data-bs-toggle="tab" data-bs-target="#pengguna" type="button" role="tab">Pengguna</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="perusahaan-tab" data-bs-toggle="tab" data-bs-target="#perusahaan" type="button" role="tab">Perusahaan</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="admin-tab" data-bs-toggle="tab" data-bs-target="#admin" type="button" role="tab">Admin</button>
            </li>
        </ul>

        <div class="tab-content" id="userTabsContent">
            <div class="tab-pane fade show active" id="pengguna" role="tabpanel">
                @include('admin.partials.user-table', ['users' => $user->where('role', 'user')])
            </div>

            <div class="tab-pane fade" id="perusahaan" role="tabpanel">
                @include('admin.partials.user-table', ['users' => $user->where('role', 'company')])
            </div>
        
            <div class="tab-pane fade" id="admin" role="tabpanel">
                @include('admin.partials.user-table', ['users' => $user->where('role', 'admin')])
            </div>
        </div>
    </div>
    <div>
        <h3>dokumen pengguna belum terverfikasi</h3>
    </div>
</div>
@endsection

@push('scripts')
<script>
    $(document).ready(function () {
        $('.user-datatable').DataTable({
            paging: true,
            autoWidth: true,
            fixedHeader: false,

            buttons: ['excel', 'csvHtml5', 'print', ],
            initComplete: function () {
                var btns = $('.dt-button');
                btns.addClass('btn-darkblue btn-sm');
                btns.removeClass('dt-button');

            },
            layout: {
                topStart:
                    ['search', 'buttons']
                ,
                topEnd: null
            },
            responsive: true
        });
    });
</script>
@endpush
