/*
 Navicat Premium Data Transfer

 Source Server         : iMedia Burger
 Source Server Type    : MySQL
 Source Server Version : 50084
 Source Host           : mysql2.porta80.com.br
 Source Database       : imediaburguer

 Target Server Type    : MySQL
 Target Server Version : 50084
 File Encoding         : utf-8

 Date: 09/19/2013 10:29:24 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `categorias`
-- ----------------------------
DROP TABLE IF EXISTS `categorias`;
CREATE TABLE `categorias` (
  `categoriaID` int(11) NOT NULL auto_increment,
  `nomecategoria` varchar(50) NOT NULL,
  PRIMARY KEY  (`categoriaID`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `categorias`
-- ----------------------------
BEGIN;
INSERT INTO `categorias` VALUES ('1', 'Almoço'), ('2', 'Sanduíches'), ('3', 'Petiscos'), ('4', 'Sucos');
COMMIT;

-- ----------------------------
--  Table structure for `comentarios`
-- ----------------------------
DROP TABLE IF EXISTS `comentarios`;
CREATE TABLE `comentarios` (
  `comentarioID` int(11) NOT NULL auto_increment,
  `pratoID` int(11) NOT NULL,
  `nome` varchar(30) NOT NULL,
  `comentario` varchar(255) NOT NULL,
  PRIMARY KEY  (`comentarioID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
--  Table structure for `produtos`
-- ----------------------------
DROP TABLE IF EXISTS `produtos`;
CREATE TABLE `produtos` (
  `produtoID` int(11) NOT NULL auto_increment,
  `nomeproduto` varchar(100) NOT NULL,
  `descricao` text NOT NULL,
  `foto_grande` varchar(255) NOT NULL,
  `foto_pequena` varchar(255) NOT NULL,
  `categoriaID` int(11) NOT NULL,
  PRIMARY KEY  (`produtoID`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `produtos`
-- ----------------------------
BEGIN;
INSERT INTO `produtos` VALUES ('1', 'Duarte Coelho com Gorgonzola', 'Burguer de frango Kwai 100% grelhado, com molho cremoso de Gorgonzola, acompanha duas guarnições', 'imagens/cardapio_gra/almoco_duarte_coelho.jpg', 'imagens/cardapio_peq/almoco_duarte_coelho.jpg', '1'), ('2', 'Bósforo ao Vinho', 'Burguer de cordeiro Kwai 100% grelhado, com molho de vinho tinto e alho frito, acompanha duas guarnições', 'imagens/cardapio_gra/almoco_bosforo_vinho.jpg', 'imagens/cardapio_peq/almoco_bosforo_vinho.jpg', '1'), ('3', 'Baluarte ao Champignon', 'Burguer Kwai apimentado 100% Grelhado de 160g com Molho de Champignon, acompanha duas guarnições', 'imagens/cardapio_gra/almoco_baluarte_champignon.jpg', 'imagens/cardapio_peq/almoco_baluarte_champignon.jpg', '1'), ('4', 'Boa Vista a Cavala', 'Burguer Kwai 100% Grelhado de 160g com ovo estrelado molho kway, acompanha duas guarnições', 'imagens/cardapio_gra/almoco_boavista_cavala.jpg', 'imagens/cardapio_peq/almoco_boavista_cavala.jpg', '1'), ('5', 'Pernil com Cebola Caramelizada', 'Pernil Suíno de forno, marinado ao vinho branco, coberto com cebolas roxas caramelizadas, acompanha duas guarnições', 'imagens/cardapio_gra/almoco_pernil_cebola_caramelizada.jpg', 'imagens/cardapio_peq/almoco_pernil_cebola_caramelizada.jpg', '1'), ('6', 'Monster Truck', 'Burger 200g + 200g de picanha moída com especiarias finalizado no char-broil, queijo mussarela, alface, tomate, molho da casa a sua escolha', 'imagens/cardapio_gra/sanduba_monster_truck.jpg', 'imagens/cardapio_peq/sanduba_monster_truck.jpg', '2'), ('7', 'Alexandre III', 'Burger Bovino grelhado de 160g Pastrami artesanal, queijo brie e cebolas roxas caramelizadas', 'imagens/cardapio_gra/sanduba_alexandre3.jpg', 'imagens/cardapio_peq/sanduba_alexandre3.jpg', '2'), ('8', 'Ponte Magdeburgo', '160g de burger suíno, pernil marinado no vinho branco, queijo mussarela e molho defumado', 'imagens/cardapio_gra/sanduba_ponte_magdeburgo.jpg', 'imagens/cardapio_peq/sanduba_ponte_magdeburgo.jpg', '2'), ('9', 'Ponte do Limoeiro', '140g de Carne suina moída com especiarias finalizado no char-broil e salteado no Pæng de Bacon, queijo do reino, alface, tomate, molho da casa a sua escolha', 'imagens/cardapio_gra/sanduba_ponte_limoeiro.jpg', 'imagens/cardapio_peq/sanduba_ponte_limoeiro.jpg', '2'), ('10', 'Ponte Boa Vista', '140g de Carne bovina moída com especiarias finalizado no char-broil e salteado no Pæng de Bacon | Queijo Gouda | alface, tomate | molho da casa a sua escolha', 'imagens/cardapio_gra/sanduba_ponte_boavista.jpg', 'imagens/cardapio_peq/sanduba_ponte_boavista.jpg', '2'), ('11', 'Kwai DoublePig', '80g + 80g de Carne Suína com mistura de embutidos moídos e temperada artesanalmente dobro do queijo mussarela | alface, tomate | molho da casa', 'imagens/cardapio_gra/sanduba_double_pig.jpg', 'imagens/cardapio_peq/sanduba_double_pig.jpg', '2'), ('12', 'Ponte do Igapó', '140g de hamburguer de camarões cortados na faca, sobre cama de coentro frescos, azeite extra virgem com queijo catupiry', 'imagens/cardapio_gra/sanduba_ponte_do_igapo.jpg', 'imagens/cardapio_peq/sanduba_ponte_do_igapo.jpg', '2'), ('13', 'Viaduto ModaKwai', '150g de Mortadela Ceratti chapeada na manteiga com queijo Gouda no pão francês com capa de queijo crocante', 'imagens/cardapio_gra/sanduba_viaduto_modakwai.jpg', 'imagens/cardapio_peq/sanduba_viaduto_modakwai.jpg', '2'), ('14', 'Tostex', 'Delicioso pão cortado em fatias recheado com presunto e queijo catupiry', 'imagens/cardapio_gra/petisco_tostex.jpg', 'imagens/cardapio_peq/petisco_tostex.jpg', '3'), ('15', 'Pipoca de Camarão', 'Porção com 12 camarões empanados', 'imagens/cardapio_gra/petisco_pipoca_camarao.jpg', 'imagens/cardapio_peq/petisco_pipoca_camarao.jpg', '3'), ('16', 'Frango com Bacon', '3 pedaços de delicioso salgado de frango com bacon', 'imagens/cardapio_gra/petisco_frango_bacon.jpg', 'imagens/cardapio_peq/petisco_frango_bacon.jpg', '3'), ('17', 'Batata Noisette', 'Sucesso de nosso cardápio, 15 batatas com molho especial', 'imagens/cardapio_gra/petisco_noisette.jpg', 'imagens/cardapio_peq/petisco_noisette.jpg', '3');
COMMIT;

