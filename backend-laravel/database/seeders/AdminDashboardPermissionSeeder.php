<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Support\Str;

class AdminDashboardPermissionSeeder extends BaseSeeder
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

        // Módulo de categories
        $permissions = [
            [
                'display_name' => 'Admin Dashboard',
                'name' => Str::slug('admin-dashboard'),
                'description' => 'Admin Dashboard - Módulo'
            ],

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
