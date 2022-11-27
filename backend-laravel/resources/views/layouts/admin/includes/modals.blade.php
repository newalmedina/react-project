<div class="modal fade" id="modal_confirm" tabindex="-1" role="dialog" aria-labelledby="confirmModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="confirmModalLabel"></h4>
            </div>
            <div id="confirmModalBody" class="modal-body"></div>
            <div id="confirmModalFooter" class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">{{ trans('general/admin_lang.close') }}</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="modal_alert" tabindex="-1" role="dialog" aria-labelledby="confirmModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">

                <h4 class="modal-title" id="alertModalHeader"></h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

            </div>
            <div id="alertModalBody" class="modal-body" style="min-height: 100px">
            </div>
            <div id="alertModalFooter" class="modal-footer">
                <button type="button" class=" btn  btn-default pull-right" data-bs-dismiss="modal" aria-label="Close">{{ trans('general/admin_lang.close') }}</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->

