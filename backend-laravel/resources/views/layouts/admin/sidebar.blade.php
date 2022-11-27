 <!-- start: sidebar -->
 <aside id="sidebar-left" class="sidebar-left">

    <div class="sidebar-header">
        <div class="sidebar-title">
            Navigation
        </div>
        <div class="sidebar-toggle d-none d-md-block" data-toggle-class="sidebar-left-collapsed" data-target="html" data-fire-event="sidebar-left-toggle">
            <i class="fas fa-bars" aria-label="Toggle sidebar"></i>
        </div>
    </div>

    <div class="nano has-scrollbar">
        <div class="nano-content" tabindex="0" style="right: -17px;">
            <nav id="menu" class="nav-main" role="navigation">

                <ul class="nav nav-main">
                    <li>
                        <a class="nav-link" href="layouts-default.html">
                            <i class="fas fa-home" aria-hidden="true"></i>
                            <span>Dashboard</span>
                        </a>                        
                    </li>
                    @if(Auth::user()->isAbleTo("admin-roles") || Auth::user()->isAbleTo("admin-roles") )
                        <li class="nav-parent 
                            @if (Request::is('admin/users*') ||
                                Request::is('admin/roles*')
                            ) 
                               nav-expanded
                            @endif">
                            <a class="nav-link" href="#">
                                <i class="fas fa-user" aria-hidden="true"></i>
                                <span>{{ trans('users/admin_lang.users') }}</span>
                            </a>
                            <ul class="nav nav-children" style="">
                                @if(Auth::user()->isAbleTo("admin-users"))
                                    <li  @if (Request::is('admin/users*')) class="nav-active" @endif>                       
                                        <a class="nav-link" href="{{ url('admin/users') }}">
                                            <i class="fas fa-users" aria-hidden="true"></i>
                                            <span>{{ trans('users/admin_lang.users_management') }}</span>
                                        </a>                        
                                    </li>
                                @endif
                                @if(Auth::user()->isAbleTo("admin-roles"))
                                    <li  @if (Request::is('admin/roles*')) class="nav-active" @endif>
                            
                                        <a class="nav-link" href="{{ url('admin/roles') }}">
                                            <i class="fas fa-key" aria-hidden="true"></i>
                                            <span>{{ trans('roles/admin_lang.roles') }}</span>
                                        </a>                        
                                    </li>
                                @endif
                            </ul>
                        </li>
                    @endif
                    
                    @if(Auth::user()->isAbleTo("admin-categories"))
                        <li  @if (Request::is('admin/categories*')) class=" nav-expanded nav-active" @endif>
                        
                            <a class="nav-link" href="{{ url('admin/categories') }}">
                                <i class="fas fa-list" aria-hidden="true"></i>
                                <span>{{ trans('categories/admin_lang.categories') }}</span>
                            </a>                        
                        </li>
                    @endif
                    <li >
                       
                        <a class="nav-link" href="{{ url('/') }}">
                            <i class="fas fa-globe" aria-hidden="true"></i>
                            <span>{{ trans('general/admin_lang.go_web') }}</span>
                        </a>                        
                    </li>
                </ul>
            </nav>
        </div>

        <script>
            // Maintain Scroll Position
            if (typeof localStorage !== 'undefined') {
                if (localStorage.getItem('sidebar-left-position') !== null) {
                    var initialPosition = localStorage.getItem('sidebar-left-position'),
                        sidebarLeft = document.querySelector('#sidebar-left .nano-content');

                    sidebarLeft.scrollTop = initialPosition;
                }
            }
        </script>

    <div class="nano-pane" style="opacity: 1; visibility: visible; display: none;"><div class="nano-slider" style="height: 381px; transform: translate(0px);"></div></div></div>

</aside>
<!-- end: sidebar -->