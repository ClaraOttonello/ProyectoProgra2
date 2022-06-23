-- MySQL dump 10.13  Distrib 8.0.29, for macos12 (x86_64)
--
-- Host: 127.0.0.1    Database: furniture
-- ------------------------------------------------------
-- Server version	8.0.29
DROP SCHEMA IF EXISTS furniture;
CREATE SCHEMA furniture;
USE furniture;

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
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(500) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `_name` varchar(255) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `_description` varchar(800) DEFAULT NULL,
  `img` varchar(500) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `pass` varchar(255) DEFAULT NULL,
  `birthd` date DEFAULT NULL,
  `img` varchar(500) DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */; 
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

INSERT INTO products (_name, price, _description, img)
VALUES 
	('Mesa de Luz', 30000,'De diseño escandinavo, minimalista y muy funcional. Esta mesa de luz está construida en melamina para facilitar su limpieza y mantenimiento. Posee terminaciones de alta calidad con bisagras reforzadas, manijas y pastas de aluminio. Con un estante y puerta. Esta versión viene desarmada y lista para que puedas ensamblarla en tu hogar. Incluye su completo Kit de armado, con todos los componentes necesarios para su fácil ensamblaje.', 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/148/511/products/fullsizerender-321-9ec5d87a7d4e960cd215920071836660-640-0.jpg'),
    ('Silla Alta', 25000,'Diseño en su máxima expresión. Esto es lo que representa el taburete Roger. Pensado para los más exigentes usuarios. Esta banqueta regulable en altura, tiene una exquisita terminación en madera curvada lustrada, que hace que se vea bien en cualquier lugar que se la coloque. Aunque sea simplemente para sentarse a charlar o bien tomar un trago, este modelo será una parte importante de la decoración de tu ambiente.', 'http://sc04.alicdn.com/kf/Hcd35e38cf29d4ffaad637701e961098dg.jpg'),
	('Escritorio', 100000, 'Por su tamaño y estilo permite ubicarlo en cualquier ambiente de la casa, puede arrimarse a la pared o presentarse en un espacio libre. Estructura compuesta por caño cuadrado 20 x 20 mm combinada con Melamina de 18 mm.', 'https://http2.mlstatic.com/D_NQ_NP_957205-MLA41416184530_042020-O.jpg'),
	('Módulo para TV', 75000, 'De diseño minimalista y contemporáneo esta Mesa de TV es la adición perfecta a tu living. Construido a partir de placas de aglomerado melaminizado de 15 mm de espesor, permite una sencilla limpieza y mantenimiento. Esta línea de muebles viene desarmada, preparada para ensamblar de manera rápida y simple. Dentro de cada caja podrás encontrar las correspondientes instrucciones y los componentes necesarios para su correcto armado.','https://www.miahomecorner.com/data/productos/d_pond-mesa-de-tv-argel-1.jpg'),
	('Lampara de Pie', 60000, 'Una lámpara de pie nórdica realizada en petiribí, su diseño moderno construido con madera 100% recuperada la hace ideal para livings modernos. Su brazo con 3 articulaciones permite dirigir la luz hacia donde más la necesites, divina para focalizar en objetos decorativos o como luz de lectura. Su encendido es con pedal de madera. Incluye una lámpara led globo e27 de 18 watts 3000k 1800ml de luz cálida.', 'https://d2r9epyceweg5n.cloudfront.net/stores/009/701/products/lampara_pie_vinilo_natural1-f29d22a50afed1fc4315849263663490-480-0.jpg'),
	('Sillón', 100000, 'Nuestra amplia línea de sillones, está pensada no solo para lograr el mejor diseño, sino la mayor durabilidad posible. Fabricados con materiales nobles y de alta resistencia, permiten un uso intensivo diario sin problemas. Clasicos, escandinavos, ingleses o minimalistas, son solo algunas de las propuestas que podés encontrar. Tapizados con las mas delicadas telas y una amplia variedad de colores.', 'https://i.pinimg.com/originals/4f/3b/62/4f3b627c689037b68b4d0a0aa5ae32b1.jpg'),
	('Sillón de Exterior', 50000, 'Este sillón de 3 cuerpos es ideal para utilizar con mesas de exterior en countries, casas de campo o bien en tu jardín. Con un diseño especial, está realizado en aluminio y resiste todo tipo de usos. El mismo se puede utilizar tanto en el interior como en el exterior de tu hogar. Si buscás un sillón resistente y donde no debas preocuparte por el agua, este es el producto ideal para vos.', 'https://d2r9epyceweg5n.cloudfront.net/stores/929/588/products/sillon-exterior-hierro-cmm-31-56c59cab18599eeb6815963042709224-640-0.jpg');

-- Dump completed on 2022-06-21 21:09:43