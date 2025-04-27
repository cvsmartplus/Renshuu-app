<script>
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const overlay = document.getElementById('overlay');
    const body = document.body;

    sidebarToggle.addEventListener('click', function () {
        if (window.innerWidth > 768) {
            sidebar.classList.toggle('collapsed');
            body.classList.toggle('sidebar-collapsed');
        } else {
            sidebar.classList.toggle('show');
            overlay.classList.toggle('d-none');
        }
    });

    overlay.addEventListener('click', function () {
        sidebar.classList.remove('show');
        overlay.classList.add('d-none');
    });
</script>
