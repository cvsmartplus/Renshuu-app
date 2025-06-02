@extends('admin.layout.layoutAdmin')

@section('title', 'Manajemen Artikel | Admin')

@section('content')
<div class="container mt-4">
    <h2>Manajemen Artikel</h2>

    <div class="mb-3 text-end">
        <a href="{{ route('admin.articles.create') }}" class="btn-brand-950">+ Tambah Artikel</a>
    </div>

    <div class="table-responsive">
        <table class="table table-striped table-bordered align-middle user-datatable">
            <thead class="table-light">
                <tr>
                    <th>ID</th>
                    <th>Judul</th>
                    <th>Penulis</th>
                    <th>Kategori</th>
                    <th>Status</th>
                    <th>Tanggal Publish</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                @forelse($article as $item)
                <tr>
                    <td>{{ $item->id }}</td>
                    <td>{{ $item->title }}</td>
                    <td>{{ $item->author->name ?? 'Admin' }}</td>
                    <td>{{ $item->category->name ?? '-' }}</td>
                    <td>
                        @if($item->status === 'published')
                            <span class="badge bg-success">Published</span>
                        @else
                            <span class="badge bg-secondary">Draft</span>
                        @endif
                    </td>
                    <td>{{ $item->published_at ? \Carbon\Carbon::parse($item->published_at)->format('d-m-Y') : '-' }}</td>
                    <td>
                        <a href="#" class="btn btn-sm btn-info">Lihat</a>
                        <a href="#" class="btn btn-sm btn-warning">Edit</a>
                        <form action="#" method="POST" style="display:inline-block" onsubmit="return confirm('Yakin ingin menghapus artikel ini?')">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-sm btn-danger">Hapus</button>
                        </form>
                    </td>
                </tr>
                @empty
                <tr><td colspan="7" class="text-center">Tidak ada artikel.</td></tr>
                @endforelse
            </tbody>
        </table>
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
            responsive: true,
            layout: {
                topStart: ['search', 'buttons'],
                topEnd: null
            },
            buttons: ['excel', 'csvHtml5', 'print'],
            initComplete: function () {
                var btns = $('.dt-button');
                btns.addClass('btn-brand-950 btn-sm');
                btns.removeClass('dt-button');
            }
        });
    });
</script>
@endpush