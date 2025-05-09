<aside id="sidebar" class="sidebar bg-light border-end vh-100 position-fixed">
    <div class="text-center py-3">
        <a href="#" class="sidebar-logo d-flex justify-content-center text-black text-decoration-none font-weight-bold">
            <img src="{{ asset('images/Renshuu.png') }}" alt="Logo" class="img-fluid" style="max-width:30px; margin-right:10px;">
            <div class="text-start">
                <div class="sidebar-text fw-bold" style="font-size: 1rem;">RENSHUU ADMIN</div>
                <div class="sidebar-text" style="font-size: 0.75rem;">Admin Panel</div>
            </div>
        </a>
    </div>

    <nav class="flex-grow-1 overflow-auto pt-4">
        <ul class="nav flex-column px-3">
            <li class="nav-item mb-3">
                <a href="{{ route('admin.dashboard') }}"
                   class="nav-bluelink {{ request()->routeIs('admin.dashboard') ? 'active' : '' }}">
                    <i class="fas fa-home me-3"></i>
                    <span class="sidebar-text">Beranda</span>
                </a>
            </li>
            <li class="nav-item mb-3">
                <a href="{{ route('admin.courses')}}"
                   class="nav-bluelink {{ request()->routeIs('admin.courses') ? 'active' : '' }}">
                    <i class="fas fa-book me-3"></i>
                    <span class="sidebar-text">Kursus</span>
                </a>
            </li>
            <li class="nav-item mb-3">
                <a href="{{route('admin.jobs')}}"
                   class="nav-bluelink {{ request()->routeIs('admin.jobs') ? 'active' : '' }}">
                    <i class="fas fa-briefcase me-3"></i>
                    <span class="sidebar-text">Pekerjaan</span>
                </a>
            </li>
            <li class="nav-item mb-3">
                <a href="{{route('admin.articles')}}"
                   class="nav-bluelink {{ request()->routeIs('admin.articles') ? 'active' : '' }}">
                    <i class="fas fa-book me-3"></i>
                    <span class="sidebar-text">Artikel</span>
                </a>
            </li>
            <li class="nav-item mb-3">
                <a href="#"
                   class="nav-bluelink {{ request()->routeIs('admin.company') ? 'active' : '' }}">
                        <i class="fa-solid fa-building me-3"></i>
                    <span class="sidebar-text">Perusahaan</span>
                </a>
            </li>
            <li class="nav-item mb-3">
                <a href="#"
                   class="nav-bluelink {{ request()->routeIs('admin.user') ? 'active' : '' }}">
                        <i class="fa-solid fa-building me-3"></i>
                    <span class="sidebar-text">Pengguna</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="#"
                   class="nav-bluelink {{ request()->routeIs('admin.settings') ? 'active' : '' }}">
                    <i class="fas fa-cog me-3"></i>
                    <span class="sidebar-text">Pengaturan</span>
                </a>
            </li>
        </ul>
    </nav>
</aside>

<div id="overlay" class="d-none"></div>

<style>
    #sidebar {
        width: 250px;
        transition: all 0.3s ease;
        z-index: 1040;
    }

    #sidebar.collapsed {
        width: 70px;
    }

    #sidebar.collapsed .sidebar-text {
        display: none;
    }

    #sidebar.collapsed ul.nav {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    #sidebar.collapsed .nav-bluelink {
        justify-content: center;
        padding: 0.5rem;
        margin: 0;
    }

    #sidebar.collapsed .nav-bluelink i {
        margin-right: 0 !important;
    }

    #overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 1030;
    }

    body:not(.sidebar-collapsed) .navbar,
    body:not(.sidebar-collapsed) #main-content {
        margin-left: 250px;
    }

    body.sidebar-collapsed .navbar,
    body.sidebar-collapsed #main-content {
        margin-left: 70px;
    }

    @media (max-width: 768px) {
        #sidebar {
            left: -250px;
        }
        #sidebar.show {
            left: 0;
        }
        .navbar, #main-content {
            margin-left: 0 !important;
        }
    }
</style>
