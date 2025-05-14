<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <button id="sidebarToggle" class="btn me-3" type="button">
            <iconify-icon icon="solar:hamburger-menu-outline" width="28" height="28"></iconify-icon>
        </button>

        <div class="d-flex align-items-center ms-auto">
            <div class="dropdown me-3">
                <button class="btn btn-light position-relative bg-neutral-200 rounded-circle d-flex justify-content-center align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false" style="width: 45px; height: 45px;">
                    <iconify-icon icon="iconoir:bell" width="22" height="22"></iconify-icon>
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
                        <strong>{{ Auth::user()->name }}</strong><br>
                        <small>{{ Auth::user()->role }}</small>
                    </li>
                    <li><hr class="dropdown-divider"></li>
                    <li>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                            <iconify-icon icon="solar:user-circle-outline" class="me-2" width="20" height="20"></iconify-icon>
                            <span>My Profile</span>
                        </a>
                    </li>
                    <li>
                        <form method="POST" action="{{ route('logout') }}">
                            @csrf
                            <button type="submit" class="dropdown-item text-danger d-flex align-items-center">
                                <iconify-icon icon="solar:power-outline" class="me-2" width="20" height="20"></iconify-icon>
                                <span>Log Out</span>
                            </button>
                        </form>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</nav>