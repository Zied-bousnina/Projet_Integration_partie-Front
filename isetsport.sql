-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 29 mai 2022 à 21:37
-- Version du serveur : 10.4.22-MariaDB
-- Version de PHP : 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `isetsport`
--

-- --------------------------------------------------------

--
-- Structure de la table `admins`
--

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `admins`
--

INSERT INTO `admins` (`id`, `name`, `email`, `role`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'zied', 'zbousnina@yahoo.com', 'Admin', NULL, '1234', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `all_matches`
--

CREATE TABLE `all_matches` (
  `id_match` int(10) UNSIGNED NOT NULL,
  `localisation` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `id_equipe1` int(10) UNSIGNED NOT NULL,
  `id_equipe2` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `equipes`
--

CREATE TABLE `equipes` (
  `id_equipe` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `point` int(11) DEFAULT NULL,
  `lost` int(11) DEFAULT NULL,
  `won` int(11) DEFAULT NULL,
  `played` int(11) DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `equipes`
--

INSERT INTO `equipes` (`id_equipe`, `name`, `point`, `lost`, `won`, `played`, `type`, `created_at`, `updated_at`) VALUES
(1, 'Zied bousnina', NULL, NULL, NULL, NULL, 'BasketBall', '2022-05-24 15:26:22', '2022-05-24 15:26:22'),
(2, 'test', NULL, NULL, NULL, NULL, 'hh', '2022-05-24 15:39:09', '2022-05-24 15:39:09'),
(3, 'fgdfg', NULL, NULL, NULL, NULL, 'BasketBall', '2022-05-25 13:44:15', '2022-05-25 13:44:15'),
(4, 'Zied bousnina', NULL, NULL, NULL, NULL, 'BasketBall', '2022-05-25 13:55:26', '2022-05-25 13:55:26'),
(5, 'CA', NULL, NULL, NULL, NULL, 'BasketBall', '2022-05-25 17:19:04', '2022-05-25 17:19:04'),
(6, 'sfdQsqdcsq', NULL, NULL, NULL, NULL, 'BasketBall', '2022-05-26 14:10:18', '2022-05-26 14:10:18'),
(7, 'ch', NULL, NULL, NULL, NULL, 'Football', '2022-05-29 11:05:28', '2022-05-29 11:05:28'),
(8, 'tes', NULL, NULL, NULL, NULL, 'Football', '2022-05-29 11:33:42', '2022-05-29 11:33:42'),
(9, 'team11', NULL, NULL, NULL, NULL, 'Football', '2022-05-29 11:47:42', '2022-05-29 11:47:42'),
(10, 'rrrrrrrrrrrrrrrrrrrrr', NULL, NULL, NULL, NULL, 'Football', '2022-05-29 14:54:07', '2022-05-29 14:54:07'),
(11, 'dddddddd', NULL, NULL, NULL, NULL, 'Football', '2022-05-29 15:54:03', '2022-05-29 15:54:03'),
(12, 'eeeeeeeeee', NULL, NULL, NULL, NULL, 'HandBall', '2022-05-29 15:56:43', '2022-05-29 15:56:43');

-- --------------------------------------------------------

--
-- Structure de la table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `joueurs`
--

CREATE TABLE `joueurs` (
  `id_joueur` int(10) UNSIGNED NOT NULL,
  `nom` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prenom` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `depJoueur` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `faculteJoueur` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `class` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dateNais` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `id_equipe` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `joueurs`
--

INSERT INTO `joueurs` (`id_joueur`, `nom`, `prenom`, `depJoueur`, `faculteJoueur`, `class`, `dateNais`, `created_at`, `updated_at`, `id_equipe`) VALUES
(1, 'dssd', 'sdsd', 'sd', 'dss', 'sdq', '2022-05-04', '2022-05-29 15:37:39', '2022-05-29 15:37:39', 1),
(2, 'zsdsd', 'sds', 'sqdsq', 'sds', 'sqds', '2022-05-02', '2022-05-29 15:50:11', '2022-05-29 15:50:11', 9),
(3, 'sqs', 'qs', 'sd', 'sds', 'sd', '2022-05-02', '2022-05-29 15:51:29', '2022-05-29 15:51:29', 1);

-- --------------------------------------------------------

--
-- Structure de la table `joueur_tournois`
--

CREATE TABLE `joueur_tournois` (
  `id_joueur` int(10) UNSIGNED NOT NULL,
  `nom` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prenom` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `depJoueur` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `faculteJoueur` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `class` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dateNais` date NOT NULL,
  `id_equipe` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `joueur_tournois`
--

INSERT INTO `joueur_tournois` (`id_joueur`, `nom`, `prenom`, `depJoueur`, `faculteJoueur`, `class`, `dateNais`, `id_equipe`, `created_at`, `updated_at`) VALUES
(1, 'zaqdzs', 'zsqz', 'zaqz', 'zaz', 'zaza', '2022-05-10', 3, NULL, NULL),
(2, 'dfdfd', 'dfdfd', 'dfdf', 'dfdf', 'dfdf', '2022-06-01', 3, '2022-05-24 18:57:10', '2022-05-24 18:57:10'),
(3, 'test', 'kj', 'lkjoljo', 'oojpio', 'kokop', '2022-05-18', 1, '2022-05-25 13:20:41', '2022-05-25 13:20:41'),
(4, 'rte', 'ere', 'er', 'er', 'erf', '2022-05-18', 1, '2022-05-25 13:21:40', '2022-05-25 13:21:40'),
(5, 'qSQs', 'qqsQ', 'qsQS', 'QSqs', 'QSQ', '2022-05-24', 1, '2022-05-26 14:11:35', '2022-05-26 14:11:35'),
(6, 'dfdf', 'sdf', 'sqdsq', 'sds', 'sdsd', '2022-05-04', 1, '2022-05-29 11:40:38', '2022-05-29 11:40:38'),
(7, 'j1', 'J1', 'TI', 'ISET', '53', '2022-05-12', 6, '2022-05-29 12:35:52', '2022-05-29 12:35:52'),
(8, 'dff', 'dsd', 'dfsd', 'd<sfd', 'dfdsf', '2022-05-03', 13, '2022-05-29 13:53:54', '2022-05-29 13:53:54'),
(9, 'dfd', 'ssdsd', 'sdss', 'ssdd', 'DSI21', '2022-05-03', 13, '2022-05-29 14:03:26', '2022-05-29 14:03:26'),
(10, 'dsdfdf', 'sfd', 'dfd', 'dfd', 'dfd', '2022-05-31', 13, '2022-05-29 14:03:52', '2022-05-29 14:03:52');

-- --------------------------------------------------------

--
-- Structure de la table `match_amicals`
--

CREATE TABLE `match_amicals` (
  `id_match` int(10) UNSIGNED NOT NULL,
  `localisation` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `id_equipe1` int(10) UNSIGNED NOT NULL,
  `id_equipe2` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `match_amicals`
--

INSERT INTO `match_amicals` (`id_match`, `localisation`, `type`, `date`, `id_equipe1`, `id_equipe2`, `created_at`, `updated_at`) VALUES
(2, 'fdfdsf', 'sfdf', '2022-05-10', 1, 4, NULL, NULL),
(3, 'xcxc', 'BasketBall', '2022-05-08', 1, 2, '2022-05-25 15:00:28', '2022-05-25 15:00:28'),
(4, 'xcxc', 'BasketBall', '2022-05-08', 1, 2, '2022-05-25 15:01:54', '2022-05-25 15:01:54'),
(5, 'xcxc', 'BasketBall', '2022-05-08', 1, 2, '2022-05-25 15:02:00', '2022-05-25 15:02:00');

-- --------------------------------------------------------

--
-- Structure de la table `match_tournois`
--

CREATE TABLE `match_tournois` (
  `id_equipe` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `point` int(11) DEFAULT NULL,
  `lost` int(11) DEFAULT NULL,
  `won` int(11) DEFAULT NULL,
  `played` int(11) DEFAULT NULL,
  `id_tournoi` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `match_tournois`
--

INSERT INTO `match_tournois` (`id_equipe`, `name`, `point`, `lost`, `won`, `played`, `id_tournoi`, `created_at`, `updated_at`) VALUES
(1, 'Zied bousnina', NULL, NULL, NULL, NULL, 10, '2022-05-24 16:41:56', '2022-05-24 16:41:56'),
(2, 'fdsf', NULL, NULL, NULL, NULL, 11, '2022-05-24 16:42:27', '2022-05-24 16:42:27'),
(3, 'testtt', NULL, NULL, NULL, NULL, 12, '2022-05-24 17:05:47', '2022-05-24 17:05:47'),
(4, 'qqssqs', NULL, NULL, NULL, NULL, 13, '2022-05-26 14:13:02', '2022-05-26 14:13:02'),
(5, 'first', NULL, NULL, NULL, NULL, 13, '2022-05-29 12:01:52', '2022-05-29 12:01:52'),
(6, 'team1000', NULL, NULL, NULL, NULL, 1, '2022-05-29 12:35:26', '2022-05-29 12:35:26'),
(10, 'dds', NULL, NULL, NULL, NULL, 1, '2022-05-29 12:43:02', '2022-05-29 12:43:02'),
(11, 'dsds', NULL, NULL, NULL, NULL, 2, '2022-05-29 12:43:44', '2022-05-29 12:43:44'),
(12, 'sdsd', NULL, NULL, NULL, NULL, 2, '2022-05-29 12:43:54', '2022-05-29 12:43:54'),
(13, 'jghj', NULL, NULL, NULL, NULL, 3, '2022-05-29 12:46:29', '2022-05-29 12:46:29'),
(14, ',gjkh', NULL, NULL, NULL, NULL, 3, '2022-05-29 12:46:38', '2022-05-29 12:46:38'),
(15, 'sqq', NULL, NULL, NULL, NULL, 14, '2022-05-29 14:05:00', '2022-05-29 14:05:00'),
(16, 'teeeeeeeeeee', NULL, NULL, NULL, NULL, 14, '2022-05-29 14:53:34', '2022-05-29 14:53:34'),
(17, 'zezzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz', NULL, NULL, NULL, NULL, 14, '2022-05-29 15:51:53', '2022-05-29 15:51:53'),
(18, 'rrrrrrrrrr', NULL, NULL, NULL, NULL, 1, '2022-05-29 15:53:41', '2022-05-29 15:53:41');

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 2),
(3, '2019_08_19_000000_create_failed_jobs_table', 3),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 4),
(5, '2022_05_08_102329_create_admins_table', 5),
(6, '2022_05_07_220401_create_equipes_table', 6),
(7, '2022_05_07_220452_create_joueurs_table', 7),
(8, '2022_05_07_225648_add_foreign_joueur_table', 8),
(9, '2022_05_08_110025_create_tournois_table', 9),
(10, '2022_05_23_210834_create_match_amicals_table', 10),
(13, '2022_05_24_164058_create_match_tournois_table', 13),
(14, '2022_05_24_185634_create_joueur_tournois_table', 14),
(15, '2022_05_07_215716_create_all_matches_table', 15);

-- --------------------------------------------------------

--
-- Structure de la table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `tournois`
--

CREATE TABLE `tournois` (
  `id_tournoi` int(10) UNSIGNED NOT NULL,
  `nomTournoi` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `lieu` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `tournois`
--

INSERT INTO `tournois` (`id_tournoi`, `nomTournoi`, `date`, `lieu`, `type`, `created_at`, `updated_at`) VALUES
(1, 'test', '2022-05-17', 'M.T', 'Football', '2022-05-23 20:59:04', '2022-05-23 20:59:04'),
(2, 'zied', '2022-05-17', 'nabeul', 'Football', '2022-05-23 21:27:07', '2022-05-23 21:27:07'),
(3, 'test2', '2022-05-09', 'ddd', 'BasketBall', '2022-05-23 21:28:59', '2022-05-23 21:28:59'),
(4, 'test', '2022-05-10', 'M.T', 'HandBall', '2022-05-24 15:21:08', '2022-05-24 15:21:08'),
(5, 'ddd', '2022-05-03', 'sdq', 'BasketBall', '2022-05-24 15:26:57', '2022-05-24 15:26:57'),
(6, 'test2', '2022-05-17', 'nabeul', 'BasketBall', '2022-05-24 16:07:37', '2022-05-24 16:07:37'),
(7, 'zrfef', '2022-05-02', 'fzdez', 'BasketBall', '2022-05-24 16:24:03', '2022-05-24 16:24:03'),
(8, 'final', '2022-05-10', 'dcfdd', 'Tenis', '2022-05-24 16:28:02', '2022-05-24 16:28:02'),
(9, 'dssd', '2022-05-02', 'sds', 'Tenis', '2022-05-24 16:29:46', '2022-05-24 16:29:46'),
(10, 'test2', '2022-05-10', 'sdq', 'BasketBall', '2022-05-24 16:33:44', '2022-05-24 16:33:44'),
(11, 'efrezrf', '2022-05-03', 'rfzsrfz', 'BasketBall', '2022-05-24 16:42:21', '2022-05-24 16:42:21'),
(12, 'test final', '2022-05-03', 'scxsxsxsx', 'BasketBall', '2022-05-24 17:05:39', '2022-05-24 17:05:39'),
(13, 'sXDQ', '2022-05-11', 'QDSq', 'BasketBall', '2022-05-26 14:12:45', '2022-05-26 14:12:45'),
(14, 'dssd', '2022-05-10', 'sd', 'Tenis', '2022-05-29 14:04:55', '2022-05-29 14:04:55');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admins_email_unique` (`email`);

--
-- Index pour la table `all_matches`
--
ALTER TABLE `all_matches`
  ADD PRIMARY KEY (`id_match`),
  ADD KEY `all_matches_id_equipe1_foreign` (`id_equipe1`),
  ADD KEY `all_matches_id_equipe2_foreign` (`id_equipe2`);

--
-- Index pour la table `equipes`
--
ALTER TABLE `equipes`
  ADD PRIMARY KEY (`id_equipe`);

--
-- Index pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Index pour la table `joueurs`
--
ALTER TABLE `joueurs`
  ADD PRIMARY KEY (`id_joueur`),
  ADD KEY `joueurs_id_equipe_foreign` (`id_equipe`);

--
-- Index pour la table `joueur_tournois`
--
ALTER TABLE `joueur_tournois`
  ADD PRIMARY KEY (`id_joueur`),
  ADD KEY `joueur_tournois_id_equipe_foreign` (`id_equipe`);

--
-- Index pour la table `match_amicals`
--
ALTER TABLE `match_amicals`
  ADD PRIMARY KEY (`id_match`),
  ADD KEY `match_amicals_id_equipe1_foreign` (`id_equipe1`),
  ADD KEY `match_amicals_id_equipe2_foreign` (`id_equipe2`);

--
-- Index pour la table `match_tournois`
--
ALTER TABLE `match_tournois`
  ADD PRIMARY KEY (`id_equipe`),
  ADD KEY `match_tournois_id_tournoi_foreign` (`id_tournoi`);

--
-- Index pour la table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Index pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Index pour la table `tournois`
--
ALTER TABLE `tournois`
  ADD PRIMARY KEY (`id_tournoi`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `all_matches`
--
ALTER TABLE `all_matches`
  MODIFY `id_match` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `equipes`
--
ALTER TABLE `equipes`
  MODIFY `id_equipe` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `joueurs`
--
ALTER TABLE `joueurs`
  MODIFY `id_joueur` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `joueur_tournois`
--
ALTER TABLE `joueur_tournois`
  MODIFY `id_joueur` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `match_amicals`
--
ALTER TABLE `match_amicals`
  MODIFY `id_match` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `match_tournois`
--
ALTER TABLE `match_tournois`
  MODIFY `id_equipe` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT pour la table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tournois`
--
ALTER TABLE `tournois`
  MODIFY `id_tournoi` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `all_matches`
--
ALTER TABLE `all_matches`
  ADD CONSTRAINT `all_matches_id_equipe1_foreign` FOREIGN KEY (`id_equipe1`) REFERENCES `equipes` (`id_equipe`),
  ADD CONSTRAINT `all_matches_id_equipe2_foreign` FOREIGN KEY (`id_equipe2`) REFERENCES `equipes` (`id_equipe`);

--
-- Contraintes pour la table `joueurs`
--
ALTER TABLE `joueurs`
  ADD CONSTRAINT `joueurs_id_equipe_foreign` FOREIGN KEY (`id_equipe`) REFERENCES `equipes` (`id_equipe`);

--
-- Contraintes pour la table `joueur_tournois`
--
ALTER TABLE `joueur_tournois`
  ADD CONSTRAINT `joueur_tournois_id_equipe_foreign` FOREIGN KEY (`id_equipe`) REFERENCES `match_tournois` (`id_equipe`);

--
-- Contraintes pour la table `match_amicals`
--
ALTER TABLE `match_amicals`
  ADD CONSTRAINT `match_amicals_id_equipe1_foreign` FOREIGN KEY (`id_equipe1`) REFERENCES `equipes` (`id_equipe`),
  ADD CONSTRAINT `match_amicals_id_equipe2_foreign` FOREIGN KEY (`id_equipe2`) REFERENCES `equipes` (`id_equipe`);

--
-- Contraintes pour la table `match_tournois`
--
ALTER TABLE `match_tournois`
  ADD CONSTRAINT `match_tournois_id_tournoi_foreign` FOREIGN KEY (`id_tournoi`) REFERENCES `tournois` (`id_tournoi`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
