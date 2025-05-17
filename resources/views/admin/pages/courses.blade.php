@extends('admin.layout.layoutAdmin')

@section('title', 'Manajemen Kursus | Admin')

@section('content')
    <div class="container">
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
        <div>
            <p>
                {{ $coursesList }}
            </p>
        </div>
    </div>
@endsection

@push('scripts')
    <script>
        const labels = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
        const courseData = @json($courseData);
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
</script>
@endpush