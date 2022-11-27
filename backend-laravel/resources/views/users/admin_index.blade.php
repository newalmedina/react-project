@extends('layouts.admin.default')
@section('title')
    @parent {{ $pageTitle }}
@stop
@section('head_page')

  <!-- DataTables -->
  <link href="{{ asset('/assets/admin/vendor/datatables.net/css/dataTables.bootstrap4.min.css') }}" rel="stylesheet"
  type="text/css" />
<link href="{{ asset('/assets/admin/vendor/datatables.net/css/responsive.bootstrap4.min.css') }}" rel="stylesheet"
  type="text/css" />

@stop

@section('breadcrumb')
<li><span>{{ $title }}</span></li>
@stop

@section('content')
<section role="main" class="content-body card-margin">
    <div class="mt-2">
        @include('layouts.admin.includes.modals')
        @include('layouts.admin.includes.success')
        @include('layouts.admin.includes.errors')        
    </div>
    <!-- start: page -->
   
        <div class="row">
            <div class="col">
                <section class="card">
                    <header class="card-header">
                        <div class="card-actions">
                            <a href="#" class="card-action card-action-toggle" data-card-toggle=""></a>
                            <a href="#" class="card-action card-action-dismiss" data-card-dismiss=""></a>
                        </div>

                        <h2 class="card-title">{{ $title }}</h2>
                    </header>
                    <div class="card-body">  
                        <div class="text-end">
                            @if(Auth::user()->isAbleTo("admin-users-create"))
                              <a href="{{ url('admin/users/create') }}" class="btn btn-outline-success">
                                {{ trans('users/admin_lang.new') }}
                              </a>
                            @endif
                          </div>
                    </div>

                    <div class="card-body">  
                        <div class="row">
                            <div class="col-12">
                                <table id="table_users" class="table table-bordered table-striped" aria-hidden="true">
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                            <th scope="col">
                                            <th scope="col">
                                            <th scope="col">
                                            <th scope="col">
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th scope="col">
                                            <th scope="col">
                                            <th scope="col">
                                            <th scope="col">
                                            <th scope="col">
                                        </tr>                               
                                    </tfoot>
                                </table>
                            </div>
                        </div>                       
                    </div>
                </section>
            </div>
        </div>
    <!-- end: page -->
</section>   
@endsection
@section('foot_page')
<!-- DataTables -->
<script src="{{ asset('/assets/admin/vendor/datatables.net/js/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('/assets/admin/vendor/datatables.net/js/dataTables.bootstrap4.min.js') }}"></script>
    <script src="{{ asset('/assets/admin/vendor/datatables.net/js/dataTables.responsive.min.js') }}"></script>
    <script src="{{ asset('/assets/admin/vendor/datatables.net/js/responsive.bootstrap4.min.js') }}"></script>

<script>

    var oTable = '';
        
    $(function() {
        oTable = $('#table_users').DataTable({
            "stateSave": true,
            "stateDuration": 60,
            "processing": true,
            "serverSide": true,
            "pageLength": 50,
            ajax: {
                "headers": {
                    "X-CSRF-TOKEN": "{{ csrf_token() }}"
                },
                url: "{{ url('admin/users/list') }}",
                type: "POST"
            },
           /* order: [
                [2, "asc"]
            ],*/
            columns: [
                {
                    "title": "{!! trans('general/admin_lang.active') !!}",
                    orderable: true,
                    searchable: true,
                    data: 'active',
                    name: 'active',
                    sWidth: '80px'
                },
                {
                    "title": "{!! trans('users/admin_lang.fields.first_name') !!}",
                    orderable: true,
                    searchable: true,
                    data: 'first_name',
                    name: 'user_profiles.first_name',
                    sWidth: ''
                },
                {
                    "title": "{!! trans('users/admin_lang.fields.last_name') !!}",
                    orderable: true,
                    searchable: true,
                    data: 'last_name',
                    name: 'user_profiles.last_name',
                    sWidth: ''
                },
                {
                    "title": "{!! trans('users/admin_lang.fields.email') !!}",
                    orderable: true,
                    searchable: true,
                    data: 'email',
                    name: 'users.email',
                    sWidth: ''
                },
                {
                    "title": "{!! trans('general/admin_lang.actions') !!}",
                    orderable: false,
                    searchable: false,
                    sWidth: '100px',
                    data: 'actions'
                }

            ],
            "fnDrawCallback": function(oSettings) {
                $('[data-bs-toggle="popover"]').mouseover(function() {
                    $(this).popover("show");
                });

                $('[data-bs-toggle="popover"]').mouseout(function() {
                    $(this).popover("hide");
                });
            },
            oLanguage: {!! json_encode(trans('datatable/lang')) !!}

        });

        var state = oTable.state.loaded();
        $('tfoot th', $('#table_users')).each(function(colIdx) {
            var title = $('tfoot th', $('#table_users')).eq($(this).index()).text();
            if (oTable.settings()[0]['aoColumns'][$(this).index()]['bSearchable']) {
                var defecto = "";
                if (state) defecto = state.columns[colIdx].search.search;

                $(this).html(
                    '<input type="text" class="form-control input-small input-inline" placeholder="' +
                    oTable.context[0].aoColumns[colIdx].title + ' ' + title + '" value="' +
                    defecto + '" />');
            }
        });

        $('#table_users').on('keyup change', 'tfoot input', function(e) {
            oTable
                .column($(this).parent().index() + ':visible')
                .search(this.value)
                .draw();
        });

    });

    function changeState(id){
        $.ajax({
            url     : "{{ url('admin/users/change-state/') }}/"+id,
            type    : 'GET',
            success : function(data) {
                console.log("estado actalizado");           
            },
            error : function(data) {
                console.log("Error al actualizar "+error);           
            }
        });
    }

    function deleteElement(url) {
        var strBtn = "";

        $("#confirmModalLabel").html("{{ trans('general/admin_lang.delete') }}");
        $("#confirmModalBody").html("<div class='d-flex align-items-center'><i class='fas fa-question-circle text-success' style='font-size: 64px; float: left; margin-right:15px;'></i><label style='font-size: 18px'>{{ trans('general/admin_lang.delete_question') }}</label></div>");
        strBtn+= '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ trans('general/admin_lang.close') }}</button>';
        strBtn+= '<button type="button" class="btn btn-primary" onclick="javascript:deleteinfo(\''+url+'\');">{{ trans('general/admin_lang.yes_delete') }}</button>';
        $("#confirmModalFooter").html(strBtn);
        $('#modal_confirm').modal('toggle');
    }

    function deleteinfo(url) {
        $.ajax({
            url     : url,
            type    : 'POST',
            "headers": {"X-CSRF-TOKEN": "{{ csrf_token() }}"},
            data: {_method: 'delete'},
            success : function(data) {
                $('#modal_confirm').modal('hide');
                if(data) {
                    $("#modal_alert").addClass('modal-success');
                    $("#alertModalHeader").html("{{ trans('general/admin_lang.warning') }}");
                    $("#alertModalBody").html("<div class='d-flex align-items-center'><i class='fas fa-check-circle text-success' style='font-size: 64px; float: left; margin-right:15px;'></i> <label style='font-size: 18px'>" + data.msg+"</label></div>");
                    $("#modal_alert").modal('toggle');
                    oTable.ajax.reload(null, false);
                } else {
                    $("#modal_alert").addClass('modal-danger');
                    $("#alertModalBody").html("<i class='fas fa-bug text-danger' style='font-size: 64px; float: left; margin-right:15px;'></i> {{ trans('general/admin_lang.errorajax') }}");
                    $("#modal_alert").modal('toggle');
                }
                return false;
            }

        });
        return false;
    }
</script>
@stop