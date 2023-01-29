-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 13 fév. 2022 à 22:55
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
-- Base de données : `shop_online`
--

-- --------------------------------------------------------

--
-- Structure de la table `app_user`
--

CREATE TABLE `app_user` (
  `id` int(11) NOT NULL,
  `login` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` varchar(255) DEFAULT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT 0,
  `customer_id` int(11) DEFAULT NULL,
  `user_role_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `app_user`
--

INSERT INTO `app_user` (`id`, `login`, `password`, `token`, `deleted`, `customer_id`, `user_role_id`) VALUES
(1, 'jean.dujardin@email.com', 'Azerty', NULL, 0, 1, 1),
(3, 'pierre@email.com', 'Qsdfgh', NULL, 0, 2, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `category`
--

INSERT INTO `category` (`id`, `title`, `description`, `image`, `deleted`) VALUES
(1, 'Pantalons', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, ducimus labore! Dolorem modi expedita beatae esse, tempore pariatur deserunt, sapiente fuga impedit sed dolore corrupti magni omnis veritatis nisi illum!', '/assets/image/Femme/Pantalons.jpg', 0),
(2, 'T-shirts', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, ducimus labore! Dolorem modi expedita beatae esse, tempore pariatur deserunt, sapiente fuga impedit sed dolore corrupti magni omnis veritatis nisi illum!', '/assets/image/Femme/T-shirts.jpg', 0),
(3, 'Pulls', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, ducimus labore! Dolorem modi expedita beatae esse, tempore pariatur deserunt, sapiente fuga impedit sed dolore corrupti magni omnis veritatis nisi illum!', '/assets/image/Femme/Pulls.jpg', 0),
(4, 'Chaussures', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, ducimus labore! Dolorem modi expedita beatae esse, tempore pariatur deserunt, sapiente fuga impedit sed dolore corrupti magni omnis veritatis nisi illum!', '/assets/image/Femme/Chaussures.jpg', 0),
(5, 'Sous-vêtements', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, ducimus labore! Dolorem modi expedita beatae esse, tempore pariatur deserunt, sapiente fuga impedit sed dolore corrupti magni omnis veritatis nisi illum!', '/assets/image/Femme/Sous-vêtements.jpg', 0),
(6, 'Accessoires', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, ducimus labore! Dolorem modi expedita beatae esse, tempore pariatur deserunt, sapiente fuga impedit sed dolore corrupti magni omnis veritatis nisi illum!', '/assets/image/Femme/Accessoires.jpg', 0),
(7, 'Chemises', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, ducimus labore! Dolorem modi expedita beatae esse, tempore pariatur deserunt, sapiente fuga impedit sed dolore corrupti magni omnis veritatis nisi illum!', '/assets/image/Homme/homme1.jpg', 0),
(8, 'Discount', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, ducimus labore! Dolorem modi expedita beatae esse, tempore pariatur deserunt, sapiente fuga impedit sed dolore corrupti magni omnis veritatis nisi illum!', '/assets/image/Homme/placard.jpg', 0),
(9, 'Robe de créateur', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, ducimus labore! Dolorem modi expedita beatae esse, tempore pariatur deserunt, sapiente fuga impedit sed dolore corrupti magni omnis veritatis nisi illum!', '/assets/image/Femme/def2.jpg', 0),
(10, 'Collection', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, ducimus labore! Dolorem modi expedita beatae esse, tempore pariatur deserunt, sapiente fuga impedit sed dolore corrupti magni omnis veritatis nisi illum!', '/assets/image/Enfant/enfant.jpeg', 0),
(11, 'Pyjamas', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, ducimus labore! Dolorem modi expedita beatae esse, tempore pariatur deserunt, sapiente fuga impedit sed dolore corrupti magni omnis veritatis nisi illum!', '/assets/image/Bebe/bebe1.jpg', 0),
(12, 'Gilet', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, ducimus labore! Dolorem modi expedita beatae esse, tempore pariatur deserunt, sapiente fuga impedit sed dolore corrupti magni omnis veritatis nisi illum!', '/assets/image/Bebe/bebe2.jpg', 0);

-- --------------------------------------------------------

--
-- Structure de la table `command`
--

CREATE TABLE `command` (
  `id` int(11) NOT NULL,
  `number` varchar(255) DEFAULT NULL,
  `validation_date` datetime DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT 0,
  `customer_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `command`
--

INSERT INTO `command` (`id`, `number`, `validation_date`, `status`, `deleted`, `customer_id`) VALUES
(1, '159', '2021-11-04 00:00:00', NULL, 0, 1),
(2, '160', '2021-12-15 00:00:00', NULL, 0, 2),
(3, '161', '2022-01-09 00:00:00', NULL, 0, 3),
(4, '162', '2022-01-22 00:00:00', NULL, 0, 4),
(5, '163', '2022-03-19 00:00:00', NULL, 0, 5),
(6, '164', '2022-03-06 00:00:00', NULL, 0, 1),
(7, '165', '2022-04-28 00:00:00', NULL, 0, 2);

-- --------------------------------------------------------

--
-- Structure de la table `commande`
--

CREATE TABLE `commande` (
  `id` int(11) NOT NULL,
  `number` int(11) DEFAULT NULL,
  `validation_date` date DEFAULT NULL,
  `status` varchar(30) DEFAULT NULL,
  `deleted` bit(1) NOT NULL,
  `customer_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `commande`
--

INSERT INTO `commande` (`id`, `number`, `validation_date`, `status`, `deleted`, `customer_id`) VALUES
(1, 159, '2021-11-04', NULL, b'0', 1),
(2, 160, '2021-12-15', NULL, b'0', 2),
(3, 161, '2022-01-09', NULL, b'0', 3),
(4, 162, '2022-01-22', NULL, b'0', 4),
(5, 163, '2022-03-19', NULL, b'0', 5),
(6, 164, '2022-03-06', NULL, b'0', 1),
(7, 165, '2022-04-28', NULL, b'0', 2);

-- --------------------------------------------------------

--
-- Structure de la table `command_product`
--

CREATE TABLE `command_product` (
  `product_id` int(11) NOT NULL,
  `command_id` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `command_product`
--

INSERT INTO `command_product` (`product_id`, `command_id`, `quantity`, `price`, `deleted`) VALUES
(1, 2, 2, 0, 0),
(2, 2, 1, 0, 0),
(3, 2, 1, 0, 0),
(4, 1, 1, 0, 0),
(5, 1, 3, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `contact`
--

INSERT INTO `contact` (`id`, `firstname`, `lastname`, `email`, `message`, `deleted`) VALUES
(1, 'Dupuis', 'Louis', 'louis.d@gmail.com', 'Tous est ok!', 0);

-- --------------------------------------------------------

--
-- Structure de la table `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `number` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `adress` varchar(255) DEFAULT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `customer`
--

INSERT INTO `customer` (`id`, `number`, `firstname`, `lastname`, `adress`, `deleted`) VALUES
(1, '118', 'Jean', 'Dujardin', '123 main street', 0),
(2, '119', 'Pierre', 'Dupond', '582 main street', 0),
(3, '120', 'Anna', 'Lacroix', '369 main street', 0),
(4, '121', 'Julie', 'Depuis', '258 main street', 0),
(5, '122', 'Gerard', 'Montagne', '147 main street', 0);

-- --------------------------------------------------------

--
-- Structure de la table `gender`
--

CREATE TABLE `gender` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `gender`
--

INSERT INTO `gender` (`id`, `title`, `description`, `image`, `deleted`) VALUES
(1, 'Homme', 'Section Homme', '/assets/image/Homme/homme1.jpg', 0),
(2, 'Femme', 'Section Femme', '/assets/image/Femme/femme1.jpg', 0),
(3, 'Enfant', 'Section Enfant', '/assets/image/Enfant/enfant1.jpg', 0),
(4, 'Bebe', 'Section Bébé', '/assets/image/Bebe/bebe1.png', 0);

-- --------------------------------------------------------

--
-- Structure de la table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `price` float NOT NULL DEFAULT 0,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `is_sold` tinyint(1) DEFAULT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT 0,
  `gender_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `product`
--

INSERT INTO `product` (`id`, `title`, `price`, `description`, `image`, `is_sold`, `deleted`, `gender_id`, `category_id`) VALUES
(1, 'Jean bootcut en coton bio', 34.99, 'On adore ce jean bootcut, parfait pour sublimer les jambes avec style. Ce jean tendance rejoindra vite votre dressing. Longueur entrejambe 84 cm, largeur bas 24 cm en taille 38.', '/assets/image/Femme/jean_bootcut.jpg', 0, 0, 2, 1),
(2, 'Jean bali', 32.99, 'Ce jean taille basse est parfait pour vous messieurs. Sa coupe près du corps élance la silhouette. Longueur entrejambe 88 cm.', '/assets/image/Enfant/jean_bali.jpg', 0, 0, 3, 1),
(3, 'Pantalon fillette rose', 14.99, 'Pantalon rose en coton bio. Longueur entrejambe 42 cm.', '/assets/image/Enfant/pant_rose.jpg', 0, 0, 3, 1),
(4, 'Jean street', 12.99, 'Ce pantalon de style streetware ravira tous les enfants avides de liberté. Longueur entrejambe 44 cm.', '/assets/image/Homme/street.jpg', 0, 0, 1, 1),
(5, 'Débardeur florale', 44.99, 'Débardeur femme avec motif fleuris.', '/assets/image/Femme/debardeur_florale.jpg', 0, 0, 2, 2),
(6, 'T-shirt modern', 24.99, 't-shirt', '/assets/image/Femme/T-shirts.jpg', 0, 0, 2, 2),
(7, 'Lot de culottes en coton bio', 19.99, 'lot de 5 culottes en coton pour femme.', '/assets/image/Femme/culotte.jpeg', 0, 0, 2, 5),
(8, 'Ceinture pour homme', 19.99, 'Ceinture en cuir de vache. Longueur 105 cm.', '/assets/image/Homme/ceinture.jpg', 0, 0, 1, 5),
(9, 'Chaussons en pilou-pilou', 9.99, 'Chaussons tout doux pour votre bébé (de 1 à 36 mois), en pilou-pilou.', '/assets/image/Bebe/chaussons.png', 0, 0, 4, 6),
(10, 'Pull de noel', 34.99, 'Pull-over de noel, motif traineau de noel et sapin décoré.', '/assets/image/Homme/pull_noel.jpg', 0, 0, 2, 3),
(11, 'Robe de créateur', 11135, 'Robe de créateur.', '/assets/image/Femme/def1.jpg', 0, 0, 2, 9),
(12, 'Robe de créateur vintage', 12235, 'Robe de créateur vintage.', '/assets/image/Femme/def2.jpg', 0, 0, 2, 9),
(13, 'Combinaison de Collection', 1250.99, 'Une combinaison en coton avec une ceinture, pour un effet WOUAOU !', '/assets/image/Femme/louis.jpg', 0, 0, 2, 1),
(14, 'Chemise de bureau', 50.99, 'Une Chemise classique pour aller travailler', '/assets/image/Homme/homme.jpg', 0, 0, 1, 7),
(15, 'Lunette Gucci', 250.99, 'Des Lunette de la marque Gucci, avec filtre anti lumière bleu et polarisante.', '/assets/image/Homme/homme1.jpg', 0, 0, 1, 6),
(16, 'Collection Discount', 2.99, 'Une collection Pour petit budget.', '/assets/image/Homme/placard.jpg', 0, 0, 1, 1),
(17, 'Pull Love christmas', 10.99, 'Pull Love christmas', '/assets/image/Homme/pull_noel.jpg', 0, 0, 1, 3),
(18, 'T-Shirt', 50.99, 'T-Shirt', '/assets/image/Homme/T-shirt.jpg', 0, 0, 1, 2),
(19, 'Collection sport', 50.99, 'Collection sport', '/assets/image/Enfant/enfant.jpeg', 0, 0, 3, 1),
(20, 'Collection jean', 35.99, 'Collection jean', '/assets/image/Enfant/enfant1.jpg', 0, 0, 3, 1),
(21, 'Collection chill', 25.99, 'Collection chill', '/assets/image/Enfant/enfant2.jpg', 0, 0, 3, 1),
(22, 'Collection 100% coton', 65.99, 'Collection 100% coton', '/assets/image/Enfant/enfant3.jpg', 0, 0, 3, 1),
(23, 'Collection luxe', 265.99, 'Collection luxe', '/assets/image/Enfant/enfant4.jpg', 0, 0, 3, 1),
(24, 'Collection rock&roll', 45.99, 'Collection rock&roll', '/assets/image/Enfant/image.jpg', 0, 0, 3, 1),
(25, 'Rollex', 645.99, 'Rollex', '/assets/image/Homme/jean_homme.jpg', 0, 0, 1, 6),
(26, 'Robe', 25.99, 'Robe', '/assets/image/Bebe/bebe.jpeg', 0, 0, 4, 9),
(27, 'Jean', 25.99, 'Jean', '/assets/image/Bebe/bebe.jpg', 0, 0, 4, 1),
(28, 'Pyjamas', 9.99, 'Pyjamas', '/assets/image/Bebe/bebe1.jpg', 0, 0, 4, 1),
(29, 'Haut 100% lin', 9.99, 'Haut 100% lin', '/assets/image/Bebe/bebe1.png', 0, 0, 4, 2),
(30, 'Gilet garçon', 11.99, 'Gilet', '/assets/image/Bebe/jean_street.jpg', 0, 0, 4, 1),
(31, 'Gilet fille', 12.99, 'Gilet', '/assets/image/Bebe/bebe2.jpg', 0, 0, 4, 1),
(32, 'Combi 100% coton', 15.99, 'Combi 100% coton', '/assets/image/Bebe/bebe3.jpg', 0, 0, 4, 1);

-- --------------------------------------------------------

--
-- Structure de la table `user_role`
--

CREATE TABLE `user_role` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `weight` tinyint(4) DEFAULT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user_role`
--

INSERT INTO `user_role` (`id`, `title`, `weight`, `deleted`) VALUES
(1, 'Admin', 1, 0),
(2, 'user', 0, 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `app_user`
--
ALTER TABLE `app_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `login` (`login`),
  ADD UNIQUE KEY `customer_id` (`customer_id`),
  ADD KEY `user_role_id` (`user_role_id`);

--
-- Index pour la table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `command`
--
ALTER TABLE `command`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Index pour la table `commande`
--
ALTER TABLE `commande`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `command_product`
--
ALTER TABLE `command_product`
  ADD PRIMARY KEY (`product_id`,`command_id`),
  ADD KEY `command_id` (`command_id`);

--
-- Index pour la table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `gender`
--
ALTER TABLE `gender`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gender_id` (`gender_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Index pour la table `user_role`
--
ALTER TABLE `user_role`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `app_user`
--
ALTER TABLE `app_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `command`
--
ALTER TABLE `command`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `commande`
--
ALTER TABLE `commande`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `gender`
--
ALTER TABLE `gender`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT pour la table `user_role`
--
ALTER TABLE `user_role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `app_user`
--
ALTER TABLE `app_user`
  ADD CONSTRAINT `app_user_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`),
  ADD CONSTRAINT `app_user_ibfk_2` FOREIGN KEY (`user_role_id`) REFERENCES `user_role` (`id`);

--
-- Contraintes pour la table `command`
--
ALTER TABLE `command`
  ADD CONSTRAINT `command_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`);

--
-- Contraintes pour la table `command_product`
--
ALTER TABLE `command_product`
  ADD CONSTRAINT `command_product_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `command_product_ibfk_2` FOREIGN KEY (`command_id`) REFERENCES `command` (`id`);

--
-- Contraintes pour la table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`gender_id`) REFERENCES `gender` (`id`),
  ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
