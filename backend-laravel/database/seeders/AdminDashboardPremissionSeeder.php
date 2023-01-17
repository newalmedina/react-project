<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Support\Str;

class AdminDashboardPremissionSeeder  extends BaseSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->init();

        // Si los permisos los hemos creados volvemos
        $permExists = Permission::where('name', Str::slug('admin-dashboard'))->first();
        if (!empty($permExists)) {
            return;
        }

        // Módulo de dashboard
        $permissions = [
            [
                'display_name' => 'Dashboard',
                'name' => Str::slug('admin-dashboard'),
                'description' => 'Dashboard - Módulo'
            ],
            [
                'display_name' => 'Dashboard - listado',
                'name' => Str::slug('admin-dashboard-list'),
                'description' => 'Dashboard - lista'
            ],
            [
                'display_name' => 'Dashboard - crear',
                'name' => Str::slug('admin-dashboard-create'),
                'description' => 'Dashboard - crear'
            ],
            [
                'display_name' => 'Dashboard - actualizar',
                'name' => Str::slug('admin-dashboard-update'),
                'description' => 'Dashboard - actualizar'
            ],
            [
                'display_name' => 'Dashboard - borrar',
                'name' => Str::slug('admin-dashboard-delete'),
                'description' => 'Dashboard - borrar'
            ],
            [
                'display_name' => 'Dashboard - ver',
                'name' => Str::slug('admin-dashboard-read'),
                'description' => 'Dashboard - ver'
            ]
        ];

        $MenuChild = $this->insertPermissions($permissions, $this->childAdmin, $this->a_permission_admin);

        // Rol de administrador
        $roleAdmin = Role::where("name", "=", Str::slug('admin'))->first();
        if (!empty($this->a_permission_admin)) {
            $roleAdmin->attachPermissions($this->a_permission_admin);
        }
        $roleUser = Role::where("name", "=", Str::slug('usuario-front'))->first();
        if (!empty($this->a_permission_front)) {
            $roleUser->attachPermissions($this->a_permission_front);
        }
    }
}
