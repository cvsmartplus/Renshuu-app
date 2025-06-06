<div class="table-responsive">
    <table class="table table-striped table-bordered align-middle user-datatable">
        <thead class="table-light">
            <tr>
                <th>ID</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Email Terverifikasi</th>
                <th>Dibuat Pada</th>
                <th>Terakhir Diupdate</th>
            </tr>
        </thead>
        <tbody>
            @forelse ($users as $u)
            <tr>
                <td>{{ str_pad($loop->iteration, 2, '0', STR_PAD_LEFT) }}</td>
                <td><a href="{{ route('admin.users.detail', $u->id) }}" class="text-decoration-none text-black">{{ $u->name }}</a></td>
                <td>{{ $u->email }}</td>
                <td>
                    @if ($u->email_verified_at)
                        {{ \Carbon\Carbon::parse($u->email_verified_at)->format('d-m-Y H:i') }}
                    @else
                        <span class="text-danger">Belum Verifikasi</span>
                    @endif
                </td>
                <td>{{ \Carbon\Carbon::parse($u->created_at)->format('d-m-Y H:i') }}</td>
                <td>{{ $u->updated_at ? \Carbon\Carbon::parse($u->updated_at)->format('d-m-Y H:i') : '-' }}</td>
            </tr>
            @empty
            <tr><td colspan="8" class="text-center">Tidak ada data.</td></tr>
            @endforelse
        </tbody>
    </table>
</div>
