<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Support\Str;

class AdminProductsPremissionSeeder  extends BaseSeeder
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
        $permExists = Permission::where('name', Str::slug('admin-products'))->first();
        if (!empty($permExists)) {
            return;
        }

        // Módulo de products
        $permissions = [
            [
                'display_name' => 'Productos',
                'name' => Str::slug('admin-products'),
                'description' => 'Productos - Módulo'
            ],
            [
                'display_name' => 'Productos - listado',
                'name' => Str::slug('admin-products-list'),
                'description' => 'Productos - lista'
            ],
            [
                'display_name' => 'Productos - crear',
                'name' => Str::slug('admin-products-create'),
                'description' => 'Productos - crear'
            ],
            [
                'display_name' => 'Productos - actualizar',
                'name' => Str::slug('admin-products-update'),
                'description' => 'Productos - actualizar'
            ],
            [
                'display_name' => 'Productos - borrar',
                'name' => Str::slug('admin-products-delete'),
                'description' => 'Productos - borrar'
            ],
            [
                'display_name' => 'Productos - ver',
                'name' => Str::slug('admin-products-read'),
                'description' => 'Productos - ver'
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
