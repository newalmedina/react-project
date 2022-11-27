<html class="fixed js flexbox flexboxlegacy no-touch csstransforms csstransforms3d no-overflowscrolling gecko win js no-mobile-device custom-scroll" style=""><head>

    <!-- Basic -->
    <meta charset="UTF-8">

    <title>
        @section('title')
            {{ config('app.name', '') }} ::
        @show
    </title>
    <meta name="keywords" content="HTML5 Admin Template">
    <meta name="description" content="Porto Admin - Responsive HTML5 Template">
    <meta name="author" content="okler.net">

    <!-- Mobile Metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

    <!-- Web Fonts  -->
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800|Shadows+Into+Light" rel="stylesheet" type="text/css">

    <!-- Vendor CSS -->
    <link rel="stylesheet" href="{{ asset('assets/admin/vendor/bootstrap/css/bootstrap.css')}}">
    <link rel="stylesheet" href="{{ asset('assets/admin/vendor/animate/animate.compat.css')}}">
    <link rel="stylesheet" href="{{ asset('assets/admin/vendor/font-awesome/css/all.min.css')}}">
    <link rel="stylesheet" href="{{ asset('assets/admin/vendor/boxicons/css/boxicons.min.css')}}">
    <link rel="stylesheet" href="{{ asset('assets/admin/vendor/magnific-popup/magnific-popup.css')}}">
    <link rel="stylesheet" href="{{ asset('assets/admin/vendor/bootstrap-datepicker/css/bootstrap-datepicker3.css')}}">
    <link rel="stylesheet" href="{{ asset('assets/admin/vendor/bootstrap-fileupload/bootstrap-fileupload.min.css')}}">

    <!-- Theme CSS -->
    <link rel="stylesheet" href="{{ asset('assets/admin/css/theme.css')}}">

    <!-- Skin CSS -->
    <link rel="stylesheet" href="{{ asset('assets/admin/css/skins/default.css')}}">

    <!-- Theme Custom CSS -->
    <link rel="stylesheet" href="{{ asset('assets/admin/css/custom.css')}}">

    <!-- Head Libs -->
    <script src="{{ asset('assets/admin/vendor/modernizr/modernizr.js')}}"></script>
    <style>
        .dataTables_filter{
            margin-right: 54px !important;
            margin-bottom: 30px !important;
        }
    </style>
    @livewireStyles
    
    @yield('head_page')

</head>
<body>
    <section class="body">

     @include('layouts.admin.header')
     
     <div class="inner-wrapper">
            @include('layouts.admin.sidebar')
           
            <header class="page-header">
                <h2>{{ $pageTitle  ?? "Page Title"}}</h2>
        
                <div class="right-wrapper text-end">
                    <ol class="breadcrumbs">
                        <li>
                        
                            <a href="{{ url('front/dashboard') }}">
                                <i class="bx bx-home-alt"></i>
                            </a>
                        </li>
                        @section('breadcrumb')
                        @show
                    </ol>
        
                    <a class="sidebar-right-toggle" ></a>
                </div>
            </header>
            @yield('content')
           
        </div>

    </section>

    @livewireScripts
    
    <!-- Vendor -->
    <script src="{{ asset('assets/admin/vendor/jquery/jquery.js')}}"></script>
    <script src="{{ asset('assets/admin/vendor/jquery-browser-mobile/jquery.browser.mobile.js')}}"></script>
    <script src="{{ asset('assets/admin/vendor/popper/umd/popper.min.js')}}"></script>
    <script src="{{ asset('assets/admin/vendor/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
    <script src="{{ asset('assets/admin/vendor/bootstrap-datepicker/js/bootstrap-datepicker.js')}}"></script>
    <script src="{{ asset('assets/admin/vendor/common/common.js')}}"></script>
    <script src="{{ asset('assets/admin/vendor/nanoscroller/nanoscroller.js')}}"></script>
    <script src="{{ asset('assets/admin/vendor/magnific-popup/jquery.magnific-popup.js')}}"></script>
    <script src="{{ asset('assets/admin/vendor/jquery-placeholder/jquery.placeholder.js')}}"></script>

    <!-- Specific Page Vendor -->
    <script src="{{ asset('assets/admin/vendor/autosize/autosize.js')}}"></script>
    <script src="{{ asset('assets/admin/vendor/bootstrap-fileupload/bootstrap-fileupload.min.js')}}"></script>

    <!-- Theme Base, Components and Settings -->
    <script src="{{ asset('assets/admin/js/theme.js')}}"></script>

    <!-- Theme Custom -->
    <script src="{{ asset('assets/admin/js/custom.js')}}"></script>

    <!-- Theme Initialization Files -->
    <script src="{{ asset('assets/admin/js/theme.init.js')}}"></script><a class="scroll-to-top hidden-mobile" href="#"><i class="fas fa-chevron-up"></i></a>

    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    
    @yield('foot_page')
</body></html>