@extends('admin.layout.layoutAdmin')

@section('content')
<div class="container mt-4">
    <h2>Manajemen Artikel</h2>

    <div class="mb-3 text-end">
        <a href="#" class="btn btn-primary">+ Tambah Artikel</a>
    </div>

    <div class="table-responsive">
        <table class="table table-bordered table-striped">
            <thead class="table-dark">
                <tr>
                    <th>#</th>
                    <th>Judul</th>
                    <th>Penulis</th>
                    <th>Kategori</th>
                    <th>Status</th>
                    <th>Tanggal Publish</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Cara Belajar Laravel untuk Pemula</td>
                    <td>Admin</td>
                    <td>Programming</td>
                    <td><span class="badge bg-success">Published</span></td>
                    <td>16 Mei 2025</td>
                    <td>
                        <a href="#" class="btn btn-sm btn-info">Lihat</a>
                        <a href="#" class="btn btn-sm btn-warning">Edit</a>
                        <a href="#" class="btn btn-sm btn-danger">Hapus</a>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Tren Teknologi 2025</td>
                    <td>Editor</td>
                    <td>Teknologi</td>
                    <td><span class="badge bg-secondary">Draft</span></td>
                    <td>-</td>
                    <td>
                        <a href="#" class="btn btn-sm btn-info">Lihat</a>
                        <a href="#" class="btn btn-sm btn-warning">Edit</a>
                        <a href="#" class="btn btn-sm btn-danger">Hapus</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
@endsection
