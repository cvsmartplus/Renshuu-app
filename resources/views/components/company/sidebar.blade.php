<aside class="sidebar">
    <button type="button" class="sidebar-close-btn">
        <iconify-icon icon="radix-icons:cross-2"></iconify-icon>
    </button>
    <div>
        <a href="#" class="sidebar-logo">
            <img src="{{ asset('images/renshuu-logo.png') }}" alt="site logo" class="light-logo">
        </a>
    </div>
    <div class="sidebar-menu-area">
        <ul class="sidebar-menu text-decoration-none" id="sidebar-menu">
            <li>
                <a href="#" class="text-decoration-none">
                    <iconify-icon icon="solar:home-smile-angle-outline" class="menu-icon"></iconify-icon>
                    <span>Beranda</span>
                </a>
            </li>
            <li>
                <a href="#" class="text-decoration-none">
                    <iconify-icon icon="tabler:briefcase" class="menu-icon"></iconify-icon>
                    <span>Kelola Pekerjaan</span>
                </a>
            </li>
            <li>
                <a href="#" class="text-decoration-none">
                    <iconify-icon icon="bi-people" class="menu-icon"></iconify-icon>
                    <span>Kelola Pelamar</span>
                </a>
            </li>
            <li>
                <a href="#" class="text-decoration-none">
                    <iconify-icon icon="tabler:settings" class="menu-icon"></iconify-icon>
                    <span>Pengaturan Akun</span>
                </a>
            </li>
        </ul>
    </div>
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll(".dropdown > a").forEach(function (dropdownToggle) {
                dropdownToggle.addEventListener("click", function (e) {
                    e.preventDefault();
                    let submenu = this.nextElementSibling;
        
                    submenu.classList.toggle("open");
        
                    this.parentElement.classList.toggle("active");
                });
            });
        });
        </script>
        
</aside>