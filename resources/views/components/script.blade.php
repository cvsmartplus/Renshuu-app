    <!-- jQuery library js -->
    <script src="{{ asset('assets/js/lib/jquery-3.7.1.min.js') }}"></script>
    <!-- Bootstrap js -->
    <script src="{{ asset('assets/js/lib/bootstrap.bundle.min.js') }}"></script>

    <script src="{{ asset('assets/js/lib/iconify-icon.min.js') }}"></script>

    <?php echo (isset($script) ? $script   : '')?>