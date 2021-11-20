-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: sixtoarte
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_user` int NOT NULL,
  `id_product` int NOT NULL,
  `id_order` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_id_usuario_idx` (`id_user`),
  KEY `FK_id_producto_idx` (`id_product`),
  KEY `FK_id_order_idx` (`id_order`),
  CONSTRAINT `FK_id_order` FOREIGN KEY (`id_order`) REFERENCES `order` (`id`),
  CONSTRAINT `FK_id_productcart` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`),
  CONSTRAINT `FK_id_usercart` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (11,'bandejas'),(7,'cajas'),(9,'cuadros'),(16,'cuñetes de carton'),(13,'decoracion'),(17,'decoraciones de plantas'),(2,'espejos'),(18,'fanales'),(4,'lamparas'),(12,'numeracion para casas'),(1,'otros'),(14,'porta llaves'),(10,'posa fuentes'),(6,'posa pavas'),(5,'posa vasos'),(15,'relojes'),(3,'soportes'),(8,'wiphalas en red');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'rojo'),(2,'azul'),(3,'verde'),(4,'blanco'),(5,'negro'),(6,'celeste'),(7,'amarillo'),(8,'marron'),(9,'gris'),(10,'rosa'),(11,'naranja'),(12,'violeta'),(13,'multicolor');
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `id_product` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_id_products_idx` (`id_product`),
  CONSTRAINT `FK_id_products` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'espejoazul.png',1),(2,'portaVelag.png',2),(3,'lampara.png',3),(4,'lamparaPie.png',4),(5,'soporte.png',5),(6,'portaVasos.png',6),(7,'posapava-hoja.png',7),(8,'caja-roja.png',8),(9,'espejo-marron.png',9),(10,'espejo-sol.png',10),(11,'libelula.png',11),(12,'madre.png',12),(13,'nose.png',13),(14,'nose2.png',14),(15,'nose3.png',15),(16,'posapava2.png',16),(17,'bandeja.png',17),(18,'caja-rosa.png',18),(19,'numero-casa.png',19),(20,'pajaro-marron.png',20),(21,'numero-casa2.png',21),(22,'plancha.png',22),(23,'portallaves.png',23),(24,'portallaves2.png',24),(25,'reloj-amarillo.png',25),(26,'portallaves3.png',26),(27,'tabla.png',27),(28,'tambor.png',28),(29,'decoracion-planta.png',29),(30,'decoracion-k.png',30),(31,'cuadro.png',31),(32,'decoracion-buho.png',32),(33,'decoracion-hoja.png',33),(34,'servilletero.png',34),(35,'Portavela1.jpeg',35);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status` varchar(200) NOT NULL,
  `id_user` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_id_usuario_idx` (`id_user`),
  CONSTRAINT `FK_id_usershop` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `description` varchar(200) NOT NULL,
  `related` varchar(400) DEFAULT NULL,
  `id_categoria` int DEFAULT NULL,
  `id_colour` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_id_categoria_idx` (`id_categoria`),
  KEY `FK_id_color_idx` (`id_colour`),
  CONSTRAINT `FK_id_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categories` (`id`),
  CONSTRAINT `FK_id_color` FOREIGN KEY (`id_colour`) REFERENCES `colors` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'espejo azul',5500,'Espejo rectangular. Bordes mosaiqueados con azulejos y venecitas 45cm x 24cm','Espejos con diseños a pedido. ¡Colores con la gama que elijas!',2,1),(2,'porta vela',1600,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet tellus a iaculis pretium.','Soportes con diseños a pedido. ¡Colores con la gama que elijas!',3,1),(3,'lampara de mesa',7800,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet tellus a iaculis pretium.','Lamparas con diseños a pedido. ¡Colores con la gama que elijas!',4,1),(4,'lampara de pie',10200,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet tellus a iaculis pretium.','Lamparas con diseños a pedido. ¡Colores con la gama que elijas!',4,1),(5,'soporte de metal',3400,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet tellus a iaculis pretium.','Soportes con diseños a pedido. ¡Colores con la gama que elijas!',3,1),(6,'posa vasos',1000,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet tellus a iaculis pretium.','Posa vasos con diseños a pedido. ¡Colores con la gama que elijas!',5,1),(7,'posa pava',400,'Posapavas en fibrofácil mosaiqueados!','Posa pavas con el diseño que a vos te guste. ¡Colores con la gama que elijas!',6,1),(8,'caja multi uso',650,'Caja de fibrofácil con patina a la cera y tapa mosaiqueada en tonos malva. 19.5 x 19.5 x 8 cm de altura.','Diseños a pedido. ¡Colores con la gama que elijas!',7,1),(9,'espejo marron',5500,'Espejo rectangular. Bordes mosaiqueados con azulejos y venecitas 45cm x 24cm','Espejos con diseños a pedido. ¡Colores con la gama que elijas!',2,1),(10,'espejo sol',2100,'Espejo mosaiqueado sobre soporte de yeso','Espejos con diseños a pedido. ¡Colores con la gama que elijas!',2,1),(11,'libelula decoración',900,'Libelula mosaiqueada en chapa con pintura epoxi. Apto para exteriores','Decoraciones con diseños a pedido. ¡Colores con la gama que elijas!',13,1),(12,'posa pava',400,'Posa pavas en fibrofácil mosaiqueados! 20 x 20 cm','Posa pavas con el diseño que a vos te guste. ¡Colores con la gama que elijas!',6,1),(13,'Wiphalas en red',1000,'Wiphalas en red. Listas para cementar ....dale color y sentido a tus paredes!!!','Decoraciones con diseños a pedido. ¡Colores con la gama que elijas!',8,1),(14,'posa pava',1000,'Posa pavas en fibrofácil mosaiqueados con venecitas. 20cm de diametro','Posa pavas con el diseño que a vos te guste. ¡Colores con la gama que elijas!',6,1),(15,'cuadro circular',1000,'Cuadro circular mosaiqueado sobre venecitas y espejos. 30 cm. de diametro','Decoraciones con diseños a pedido. ¡Colores con la gama que elijas!',9,1),(16,'posa fuentes',1000,'Posa fuente mosaiqueado sobre fibro facil. 28 cm. de diametro','Posa pavas con diseños a pedido. ¡Colores con la gama que elijas!',10,1),(17,'bandeja de pino',700,'Bandeja de pino con manijas de hierro. 30 x 20 cm','Bandejas con diseños a pedido. ¡Colores con la gama que elijas!',11,1),(18,'caja multiuso',650,'Caja de fibrofácil pintadas con acrílicos y tapa mosaiqueada con diseños de mandalas . 19.5 x 19.5 x 8 cm de altura.','Cajas con diseños a pedido. ¡Colores con la gama que elijas!',7,1),(19,'numeración para casas',1000,'Hogar dulce hogar...numeración para tu casa!','Numeracion para tu casa a pedido. ¡Elejí tu diseño!',12,1),(20,'cuadro circular',800,'Cuadro circular mosaiqueado con diseño precolombino','Decoraciones con diseños a pedido. ¡Colores con la gama que elijas!',9,1),(21,'numeración para casas',1000,'Hogar dulce hogar...numeración para tu casa!','Numeracion para tu casa a pedido. ¡Elejí tu diseño!',12,1),(22,'plancha decoración',600,'Plancha de fierro. Restaurando.... arte sustentable!','Decoraciones con diseños a pedido. ¡Colores con la gama que elijas!',13,1),(23,'porta repasadores',400,'porta repasadores en forma de pala pizzera','Porta repasadores con diseños a pedido. ¡Colores con la gama que elijas!',1,1),(24,'porta llaves',700,'Porta llaves mosaiqueado con venecitas sobre fibro facil ','Porta llaves con diseños a pedido. ¡Colores con la gama que elijas!',14,1),(25,'reloj',1500,'reloj realizado en tecnica de picassiette','Relojes con diseños a pedido. ¡Colores con la gama que elijas!',15,1),(26,'porta llaves',500,'porta llaves realizado en mosaicos y tecnica de micromosaicos','Porta llaves con diseños a pedido. ¡Colores con la gama que elijas!',14,1),(27,'bandeja doble diseño',1200,'Bandeja con doble diseño mosaiqueada. Composición personalizada.','Decoraciones con diseños a pedido. ¡Colores con la gama que elijas!',11,1),(28,'cuñete de carton',2000,'Cuñetes de cartón, con tapa y base de madera, cierre hermético. Mosaiqueados con venecitas y azulejos, forrado en arpillera.','Úsalo como mesita de apoyo, organizador o simplemente en un rincón. Diseños a pedido. ¡Colores con la gama que elijas!',16,1),(29,'tutores',450,'Tutores mosaiqueados sobre fibro facil. Ideales para plantas de interior','Decoraciones con diseños a pedido. ¡Colores con la gama que elijas!',13,1),(30,'Caricatura nestor kirchner',1500,'Trabajo realizado en malla para adherir sobre cualquier superficie de cemento','Decoraciones con diseños a pedido. ¡Colores con la gama que elijas!',1,1),(31,'posa pava',700,'Posa pavas en fibrofácil mosaiqueados! 20 x 20 cm','Decoraciones con diseños a pedido. ¡Colores con la gama que elijas!',6,1),(32,'posa pava',800,'Posa pavas en fibrofácil mosaiqueados! 20 x 20 cm','Decoraciones con diseños a pedido. ¡Colores con la gama que elijas!',6,1),(33,'posa pava',700,'Posa pavas en fibrofácil mosaiqueados! 20 x 20 cm','Decoraciones con diseños a pedido. ¡Colores con la gama que elijas!',6,1),(34,'porta rollos',800,'Portarollos para pared, en tonos verde esperanza','Decoraciones con diseños a pedido. ¡Colores con la gama que elijas!',1,1),(35,'fanal',800,'fanales mosaiqueados en venecitas sobre soporte de vidrio, lo que permite traslucir la luz','Decoraciones con diseños a pedido. ¡Colores con la gama que elijas!',18,1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin'),(2,'user');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `birthday` date DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `contraseña` varchar(200) NOT NULL,
  `avatar` varchar(400) NOT NULL,
  `id_role` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `FK_id_rol_idx` (`id_role`),
  CONSTRAINT `FK_id_role` FOREIGN KEY (`id_role`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-11 23:46:08
