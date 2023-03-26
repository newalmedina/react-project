-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.0.30 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para react-backend-laravel
CREATE DATABASE IF NOT EXISTS `react-backend-laravel` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `react-backend-laravel`;

-- Volcando estructura para tabla react-backend-laravel.categories
CREATE TABLE IF NOT EXISTS `categories` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla react-backend-laravel.categories: ~3 rows (aproximadamente)
INSERT INTO `categories` (`id`, `name`, `description`, `active`, `created_at`, `updated_at`) VALUES
	(1, 'Hombre', NULL, 1, '2023-02-10 08:32:05', '2023-02-10 08:32:41'),
	(2, 'Mujer', NULL, 1, '2023-02-10 08:32:17', '2023-02-10 08:32:51'),
	(3, 'Niños', NULL, 1, '2023-02-10 08:32:28', '2023-02-10 08:33:04');

-- Volcando estructura para tabla react-backend-laravel.failed_jobs
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla react-backend-laravel.failed_jobs: ~0 rows (aproximadamente)

-- Volcando estructura para tabla react-backend-laravel.jobs
CREATE TABLE IF NOT EXISTS `jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint unsigned NOT NULL,
  `reserved_at` int unsigned DEFAULT NULL,
  `available_at` int unsigned NOT NULL,
  `created_at` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla react-backend-laravel.jobs: ~0 rows (aproximadamente)

-- Volcando estructura para tabla react-backend-laravel.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla react-backend-laravel.migrations: ~12 rows (aproximadamente)
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(1, '2014_10_12_000000_create_users_table', 1),
	(2, '2014_10_12_100000_create_password_resets_table', 1),
	(3, '2015_07_14_130551_create_user_profile', 1),
	(4, '2019_08_19_000000_create_failed_jobs_table', 1),
	(5, '2019_12_14_000001_create_personal_access_tokens_table', 1),
	(6, '2022_06_11_164257_create_categories_table', 1),
	(7, '2022_06_19_135411_laratrust_setup_tables', 1),
	(8, '2022_12_23_133503_add_forget_password_token_to_users_table', 1),
	(9, '2022_12_23_135128_create_jobs_table', 1),
	(10, '2023_01_08_165738_alter_roles_table', 1),
	(11, '2023_01_10_163349_create_products_table', 1),
	(12, '2023_01_16_201131_create_product_images_table', 1);

-- Volcando estructura para tabla react-backend-laravel.password_resets
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla react-backend-laravel.password_resets: ~0 rows (aproximadamente)

-- Volcando estructura para tabla react-backend-laravel.permissions
CREATE TABLE IF NOT EXISTS `permissions` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `permissions_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla react-backend-laravel.permissions: ~31 rows (aproximadamente)
INSERT INTO `permissions` (`id`, `name`, `display_name`, `description`, `created_at`, `updated_at`) VALUES
	(1, 'admin', 'Administración', 'Acceso a Administración', '2023-02-10 08:19:37', '2023-02-10 08:19:37'),
	(2, 'frontend', 'Web', 'Acceso a  Front End Web', '2023-02-10 08:19:37', '2023-02-10 08:19:37'),
	(3, 'api', 'API', 'Acceso a llamadas a web services y Api', '2023-02-10 08:19:37', '2023-02-10 08:19:37'),
	(4, 'admin-dashboard', 'Dashboard', 'Dashboard - Módulo', '2023-02-10 08:19:37', '2023-02-10 08:19:37'),
	(5, 'admin-dashboard-list', 'Dashboard - listado', 'Dashboard - lista', '2023-02-10 08:19:37', '2023-02-10 08:19:37'),
	(6, 'admin-dashboard-create', 'Dashboard - crear', 'Dashboard - crear', '2023-02-10 08:19:37', '2023-02-10 08:19:37'),
	(7, 'admin-dashboard-update', 'Dashboard - actualizar', 'Dashboard - actualizar', '2023-02-10 08:19:37', '2023-02-10 08:19:37'),
	(8, 'admin-dashboard-delete', 'Dashboard - borrar', 'Dashboard - borrar', '2023-02-10 08:19:38', '2023-02-10 08:19:38'),
	(9, 'admin-dashboard-read', 'Dashboard - ver', 'Dashboard - ver', '2023-02-10 08:19:38', '2023-02-10 08:19:38'),
	(10, 'admin-users', 'Usuarios', 'Usuarios - Módulo', '2023-02-10 08:19:38', '2023-02-10 08:19:38'),
	(11, 'admin-users-list', 'Usuarios - listado', 'Usuarios - lista', '2023-02-10 08:19:38', '2023-02-10 08:19:38'),
	(12, 'admin-users-create', 'Usuarios - crear', 'Usuarios - crear', '2023-02-10 08:19:38', '2023-02-10 08:19:38'),
	(13, 'admin-users-update', 'Usuarios - actualizar', 'Usuarios - actualizar', '2023-02-10 08:19:38', '2023-02-10 08:19:38'),
	(14, 'admin-users-delete', 'Usuarios - borrar', 'Usuarios - borrar', '2023-02-10 08:19:38', '2023-02-10 08:19:38'),
	(15, 'admin-users-read', 'Usuarios - ver', 'Usuarios - ver', '2023-02-10 08:19:38', '2023-02-10 08:19:38'),
	(16, 'admin-roles', 'Roles', 'Roles - Módulo', '2023-02-10 08:19:38', '2023-02-10 08:19:38'),
	(17, 'admin-roles-list', 'Roles - listado', 'Roles - lista', '2023-02-10 08:19:38', '2023-02-10 08:19:38'),
	(18, 'admin-roles-update', 'Roles - actualizar', 'Roles - actualizar', '2023-02-10 08:19:39', '2023-02-10 08:19:39'),
	(19, 'admin-categories', 'Categorías', 'Categorías - Módulo', '2023-02-10 08:19:40', '2023-02-10 08:19:40'),
	(20, 'admin-categories-list', 'Categorías - listado', 'Categorías - lista', '2023-02-10 08:19:40', '2023-02-10 08:19:40'),
	(21, 'admin-categories-create', 'Categorías - crear', 'Categorías - crear', '2023-02-10 08:19:41', '2023-02-10 08:19:41'),
	(22, 'admin-categories-update', 'Categorías - actualizar', 'Categorías - actualizar', '2023-02-10 08:19:41', '2023-02-10 08:19:41'),
	(23, 'admin-categories-delete', 'Categorías - borrar', 'Categorías - borrar', '2023-02-10 08:19:42', '2023-02-10 08:19:42'),
	(24, 'admin-categories-read', 'Categorías - ver', 'Categorías - ver', '2023-02-10 08:19:42', '2023-02-10 08:19:42'),
	(25, 'admin-products', 'Productos', 'Productos - Módulo', '2023-02-10 08:19:44', '2023-02-10 08:19:44'),
	(26, 'admin-products-list', 'Productos - listado', 'Productos - lista', '2023-02-10 08:19:44', '2023-02-10 08:19:44'),
	(27, 'admin-products-create', 'Productos - crear', 'Productos - crear', '2023-02-10 08:19:45', '2023-02-10 08:19:45'),
	(28, 'admin-products-update', 'Productos - actualizar', 'Productos - actualizar', '2023-02-10 08:19:46', '2023-02-10 08:19:46'),
	(29, 'admin-products-delete', 'Productos - borrar', 'Productos - borrar', '2023-02-10 08:19:46', '2023-02-10 08:19:46'),
	(30, 'admin-products-read', 'Productos - ver', 'Productos - ver', '2023-02-10 08:19:47', '2023-02-10 08:19:47'),
	(31, 'admin-users-profile', 'Usuarios - Perfil ( ver y actualizar) - profile', 'Usuarios - Perfil ( ver y actualizar) - profile', '2023-02-10 08:19:49', '2023-02-10 08:19:49');

-- Volcando estructura para tabla react-backend-laravel.permissions_tree
CREATE TABLE IF NOT EXISTS `permissions_tree` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `permissions_id` bigint unsigned DEFAULT NULL,
  `_lft` int unsigned NOT NULL DEFAULT '0',
  `_rgt` int unsigned NOT NULL DEFAULT '0',
  `parent_id` int unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `permissions_tree__lft__rgt_parent_id_index` (`_lft`,`_rgt`,`parent_id`),
  KEY `permissions_tree_permissions_id_foreign` (`permissions_id`),
  CONSTRAINT `permissions_tree_permissions_id_foreign` FOREIGN KEY (`permissions_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla react-backend-laravel.permissions_tree: ~32 rows (aproximadamente)
INSERT INTO `permissions_tree` (`id`, `permissions_id`, `_lft`, `_rgt`, `parent_id`, `created_at`, `updated_at`) VALUES
	(1, NULL, 1, 64, NULL, '2023-02-10 08:19:37', '2023-02-10 08:19:37'),
	(2, 1, 2, 59, 1, '2023-02-10 08:19:37', '2023-02-10 08:19:37'),
	(3, 2, 60, 61, 1, '2023-02-10 08:19:37', '2023-02-10 08:19:37'),
	(4, 3, 62, 63, 1, '2023-02-10 08:19:37', '2023-02-10 08:19:37'),
	(5, 4, 3, 14, 2, '2023-02-10 08:19:37', '2023-02-10 08:19:37'),
	(6, 5, 4, 5, 5, '2023-02-10 08:19:37', '2023-02-10 08:19:37'),
	(7, 6, 6, 7, 5, '2023-02-10 08:19:37', '2023-02-10 08:19:37'),
	(8, 7, 8, 9, 5, '2023-02-10 08:19:38', '2023-02-10 08:19:38'),
	(9, 8, 10, 11, 5, '2023-02-10 08:19:38', '2023-02-10 08:19:38'),
	(10, 9, 12, 13, 5, '2023-02-10 08:19:38', '2023-02-10 08:19:38'),
	(11, 10, 15, 28, 2, '2023-02-10 08:19:38', '2023-02-10 08:19:38'),
	(12, 11, 16, 17, 11, '2023-02-10 08:19:38', '2023-02-10 08:19:38'),
	(13, 12, 18, 19, 11, '2023-02-10 08:19:38', '2023-02-10 08:19:38'),
	(14, 13, 20, 21, 11, '2023-02-10 08:19:38', '2023-02-10 08:19:38'),
	(15, 14, 22, 23, 11, '2023-02-10 08:19:38', '2023-02-10 08:19:38'),
	(16, 15, 24, 25, 11, '2023-02-10 08:19:38', '2023-02-10 08:19:38'),
	(17, 16, 29, 34, 2, '2023-02-10 08:19:38', '2023-02-10 08:19:38'),
	(18, 17, 30, 31, 17, '2023-02-10 08:19:39', '2023-02-10 08:19:39'),
	(19, 18, 32, 33, 17, '2023-02-10 08:19:39', '2023-02-10 08:19:39'),
	(20, 19, 35, 46, 2, '2023-02-10 08:19:40', '2023-02-10 08:19:40'),
	(21, 20, 36, 37, 20, '2023-02-10 08:19:41', '2023-02-10 08:19:41'),
	(22, 21, 38, 39, 20, '2023-02-10 08:19:41', '2023-02-10 08:19:41'),
	(23, 22, 40, 41, 20, '2023-02-10 08:19:42', '2023-02-10 08:19:42'),
	(24, 23, 42, 43, 20, '2023-02-10 08:19:42', '2023-02-10 08:19:42'),
	(25, 24, 44, 45, 20, '2023-02-10 08:19:43', '2023-02-10 08:19:43'),
	(26, 25, 47, 58, 2, '2023-02-10 08:19:44', '2023-02-10 08:19:44'),
	(27, 26, 48, 49, 26, '2023-02-10 08:19:45', '2023-02-10 08:19:45'),
	(28, 27, 50, 51, 26, '2023-02-10 08:19:46', '2023-02-10 08:19:46'),
	(29, 28, 52, 53, 26, '2023-02-10 08:19:46', '2023-02-10 08:19:46'),
	(30, 29, 54, 55, 26, '2023-02-10 08:19:47', '2023-02-10 08:19:47'),
	(31, 30, 56, 57, 26, '2023-02-10 08:19:48', '2023-02-10 08:19:48'),
	(32, 31, 26, 27, 11, '2023-02-10 08:19:49', '2023-02-10 08:19:49');

-- Volcando estructura para tabla react-backend-laravel.permission_role
CREATE TABLE IF NOT EXISTS `permission_role` (
  `permission_id` bigint unsigned NOT NULL,
  `role_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`role_id`),
  KEY `permission_role_role_id_foreign` (`role_id`),
  CONSTRAINT `permission_role_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `permission_role_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla react-backend-laravel.permission_role: ~31 rows (aproximadamente)
INSERT INTO `permission_role` (`permission_id`, `role_id`) VALUES
	(1, 1),
	(2, 1),
	(3, 1),
	(4, 1),
	(5, 1),
	(6, 1),
	(7, 1),
	(8, 1),
	(9, 1),
	(10, 1),
	(11, 1),
	(12, 1),
	(13, 1),
	(14, 1),
	(15, 1),
	(16, 1),
	(17, 1),
	(18, 1),
	(19, 1),
	(20, 1),
	(21, 1),
	(22, 1),
	(23, 1),
	(24, 1),
	(25, 1),
	(26, 1),
	(27, 1),
	(28, 1),
	(29, 1),
	(30, 1),
	(31, 1);

-- Volcando estructura para tabla react-backend-laravel.permission_user
CREATE TABLE IF NOT EXISTS `permission_user` (
  `permission_id` bigint unsigned NOT NULL,
  `user_id` bigint unsigned NOT NULL,
  `user_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`user_id`,`permission_id`,`user_type`),
  KEY `permission_user_permission_id_foreign` (`permission_id`),
  CONSTRAINT `permission_user_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla react-backend-laravel.permission_user: ~0 rows (aproximadamente)

-- Volcando estructura para tabla react-backend-laravel.personal_access_tokens
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla react-backend-laravel.personal_access_tokens: ~1 rows (aproximadamente)
INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
	(1, 'App\\Models\\User', 1, 'API TOKEN', 'b8b4f30d7a2fc272fe87194303d2079a3e3f5935de7cb88689fc9140ad4c8d29', '["*"]', '2023-02-10 08:41:54', '2023-02-10 08:31:45', '2023-02-10 08:41:54');

-- Volcando estructura para tabla react-backend-laravel.products
CREATE TABLE IF NOT EXISTS `products` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` bigint unsigned NOT NULL,
  `price` decimal(5,2) NOT NULL DEFAULT '0.00',
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_category_id_foreign` (`category_id`),
  CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla react-backend-laravel.products: ~5 rows (aproximadamente)
INSERT INTO `products` (`id`, `name`, `category_id`, `price`, `description`, `active`, `created_at`, `updated_at`) VALUES
	(1, 'Conjunto', 3, 20.00, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,', 1, '2023-02-10 08:34:59', '2023-02-10 08:34:59'),
	(2, 'Camisa', 1, 31.00, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,', 1, '2023-02-10 08:36:26', '2023-02-10 08:36:26'),
	(3, 'Pantalon', 2, 15.00, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,', 1, '2023-02-10 08:37:04', '2023-02-10 08:37:04'),
	(4, 'Sweter', 2, 43.00, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,', 1, '2023-02-10 08:37:47', '2023-02-10 08:37:47'),
	(5, 'Top Corto', 2, 12.00, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,', 1, '2023-02-10 08:40:09', '2023-02-10 08:40:09');

-- Volcando estructura para tabla react-backend-laravel.product_images
CREATE TABLE IF NOT EXISTS `product_images` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `original_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mime` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `product_id` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_images_product_id_foreign` (`product_id`),
  CONSTRAINT `product_images_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla react-backend-laravel.product_images: ~12 rows (aproximadamente)
INSERT INTO `product_images` (`id`, `name`, `original_name`, `mime`, `product_id`, `created_at`, `updated_at`) VALUES
	(1, '51029a94-742d-4e7f-9910-7360773e159e.JPG', 'imagen 1.JPG', 'JPG', 1, '2023-02-10 08:35:22', '2023-02-10 08:35:22'),
	(2, 'b5e9b8a9-fc02-4357-8979-4966da247d60.JPG', 'imagen 2.JPG', 'JPG', 1, '2023-02-10 08:35:22', '2023-02-10 08:35:22'),
	(3, 'c6ea8c83-2779-4739-bad6-8608e217f562.JPG', 'imagen 2.JPG', 'JPG', 2, '2023-02-10 08:36:38', '2023-02-10 08:36:38'),
	(4, 'cb7b933d-7cf9-41fd-9f33-c6e0ec6f89ff.JPG', 'imagen 3.JPG', 'JPG', 2, '2023-02-10 08:36:38', '2023-02-10 08:36:38'),
	(5, '5c7f9ebc-1386-4217-b157-a5fc4c397d96.JPG', 'imagen 1.JPG', 'JPG', 2, '2023-02-10 08:36:38', '2023-02-10 08:36:38'),
	(6, 'd3e90ec6-aa2a-4998-aa3f-bc67c2c99981.JPG', 'imagen 2.JPG', 'JPG', 3, '2023-02-10 08:37:22', '2023-02-10 08:37:22'),
	(7, '68448001-6691-4948-a214-3ebf39fd7ba7.JPG', 'imagen 1.JPG', 'JPG', 3, '2023-02-10 08:37:22', '2023-02-10 08:37:22'),
	(8, 'eaf6be68-6e60-490b-bf85-1fd47a7229e3.JPG', 'imagen 3.JPG', 'JPG', 3, '2023-02-10 08:37:22', '2023-02-10 08:37:22'),
	(9, 'a63e1ae2-eb23-48c5-ad66-2d065c875973.JPG', 'imagen 2.JPG', 'JPG', 4, '2023-02-10 08:37:57', '2023-02-10 08:37:57'),
	(10, '47de07ac-8741-44be-9cd7-6a865fabf5c4.JPG', 'imagen 1.JPG', 'JPG', 4, '2023-02-10 08:37:57', '2023-02-10 08:37:57'),
	(11, 'baeecc73-9b72-444f-9b18-55a9145ec9ad.JPG', 'imagen 1.JPG', 'JPG', 5, '2023-02-10 08:40:54', '2023-02-10 08:40:54'),
	(12, 'ea1e0ae9-6bb1-40b1-9d48-f34ae93473a1.JPG', 'imagen 2.JPG', 'JPG', 5, '2023-02-10 08:40:54', '2023-02-10 08:40:54');

-- Volcando estructura para tabla react-backend-laravel.roles
CREATE TABLE IF NOT EXISTS `roles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `active` tinyint(1) NOT NULL,
  `can_delete` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `roles_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla react-backend-laravel.roles: ~3 rows (aproximadamente)
INSERT INTO `roles` (`id`, `name`, `display_name`, `description`, `active`, `can_delete`, `created_at`, `updated_at`) VALUES
	(1, 'admin', 'Administrador', 'Administradores', 1, 0, '2023-02-10 08:19:37', '2023-02-10 08:19:37'),
	(2, 'usuario-front', 'Usuario front', 'Usuario de front-End', 1, 0, '2023-02-10 08:19:37', '2023-02-10 08:19:37'),
	(3, 'usuario-api', 'Usuario Api', 'Usuario de Api', 1, 0, '2023-02-10 08:19:37', '2023-02-10 08:19:37');

-- Volcando estructura para tabla react-backend-laravel.role_user
CREATE TABLE IF NOT EXISTS `role_user` (
  `role_id` bigint unsigned NOT NULL,
  `user_id` bigint unsigned NOT NULL,
  `user_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`,`user_type`),
  KEY `role_user_role_id_foreign` (`role_id`),
  CONSTRAINT `role_user_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla react-backend-laravel.role_user: ~1 rows (aproximadamente)
INSERT INTO `role_user` (`role_id`, `user_id`, `user_type`) VALUES
	(1, 1, 'App\\Models\\User');

-- Volcando estructura para tabla react-backend-laravel.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `forget_password_token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '0',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla react-backend-laravel.users: ~1 rows (aproximadamente)
INSERT INTO `users` (`id`, `email`, `email_verified_at`, `password`, `forget_password_token`, `active`, `remember_token`, `created_at`, `updated_at`) VALUES
	(1, 'nmedina@gmail.com', NULL, '$2y$10$QDrcthi3O3E6AAz2RiV1ruQKjzOUPyaJErOAW8yJzC6tDCTcoYFQe', NULL, 1, NULL, '2023-02-10 08:19:36', '2023-02-10 08:19:36');

-- Volcando estructura para tabla react-backend-laravel.user_profiles
CREATE TABLE IF NOT EXISTS `user_profiles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` enum('male','female') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `photo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mobile` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_lang` varchar(6) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'en',
  `confirmed` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_profiles_user_id_unique` (`user_id`),
  CONSTRAINT `user_profiles_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla react-backend-laravel.user_profiles: ~1 rows (aproximadamente)
INSERT INTO `user_profiles` (`id`, `user_id`, `first_name`, `last_name`, `gender`, `photo`, `phone`, `mobile`, `user_lang`, `confirmed`, `created_at`, `updated_at`) VALUES
	(1, 1, 'newal', 'medina', 'male', NULL, NULL, NULL, 'es', 0, '2023-02-10 08:19:36', '2023-02-10 08:19:36');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
