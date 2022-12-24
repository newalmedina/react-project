<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\PermissionsTree;
use App\Models\Role;
use Illuminate\Support\Str;

class AdminUserProfilePermissionSeeder  extends BaseSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->createPermission('users', 'Usuarios - Perfil ( ver y actualizar)', 'profile');
    }

    private function createPermission($slug, $name, $type)
    {
        $permissions = [
            [
                'display_name'  => "$name - $type",
                'name'          => Str::slug("admin-$slug-$type"),
                'description'   => "$name - $type",
            ]
        ];

        $permission_id = Permission::where('name', "admin-$slug")->first()->id;
        $root = PermissionsTree::where('permissions_id', $permission_id)->first();

        $MenuChild = $this->insertPermissions($permissions, $root, $this->a_permission_admin);
        $roleAdmin = Role::where("name", "=", Str::slug('admin'))->first();
        if (!empty($this->a_permission_admin)) {
            $roleAdmin->attachPermissions($this->a_permission_admin);
        }
    }
}
