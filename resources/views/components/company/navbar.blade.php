<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <button id="sidebarToggle" class="btn btn-outline-secondary me-3" type="button">
            <i class="fas fa-bars"></i>
        </button>

        <div class="d-flex align-items-center ms-auto">
            <div class="dropdown me-3">
                <button class="btn btn-light position-relative" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-regular fa-bell"></i>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        5
                    </span>
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li class="dropdown-header">Notifications</li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">No new notifications</a></li>
                </ul>
            </div>

            <div class="dropdown">
                <button class="btn btn-light dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="{{ Auth::user()->profile->avatar ?? asset('images/placeholder/default-profile.jpg') }}" class="rounded-circle me-2" width="40" height="40"/>
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li class="dropdown-header">
                        <strong>Shaidul Islam</strong><br>
                        <small>Admin</small>
                    </li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#"><i class="fa-regular fa-user"></i> My Profile</a></li>
                    <li><a class="dropdown-item" href="#"><i class="fa-regular fa-envelope"></i> Inbox</a></li>
                    <li><a class="dropdown-item" href="#"><i class="fas fa-cog"></i> Settings</a></li>
                    <li>
                        <form method="POST" action="{{ route('logout') }}">
                            @csrf
                            <button type="submit" class="dropdown-item text-danger">
                                <i class="fas fa-power-off"></i> Log Out
                            </button>
                        </form>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</nav>
