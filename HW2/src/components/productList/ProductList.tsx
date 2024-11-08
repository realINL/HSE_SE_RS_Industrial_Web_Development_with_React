import React, { useState } from 'react';
import ProductCard from '../productCard/ProductCard'
import ProductBigCard from '../productBigCard/ProductBigCard';
import Modal from '../modal/modal';
import './ProductList.css';
import flipflops_image from '../../assets/flipflops.jpg';
import laptop_image from '../../assets/laptop.jpg';

const products = [
  { name: 'Laptop', description: 'Этот старый ноутбук представляет собой пример устройства, которое когда-то было на пике технологического прогресса, но со временем устарело и теперь напоминает о временах, когда мобильные технологии только начинали набирать популярность. На вид он имеет немного потертый корпус, покрытый следами износа, с несколькими царапинами и небольшими сколами на углах. Его пластиковая оболочка, раньше блестящая и аккуратная, теперь выцветшая, местами потускневшая от времени. Экран ноутбука, размером 15 дюймов, с матовым покрытием, больше не выглядит таким ярким и четким, как прежде. Некоторые пиксели начинают работать не совсем корректно, особенно в темных областях экрана, а яркость и контрастность оставляют желать лучшего. Углы обзора также ограничены, и при наклоне экрана изображение становится размытым. Несмотря на это, он все еще остается функциональным для выполнения базовых задач, таких как чтение текста или работа с простыми программами. Клавиатура, хоть и износилась, все еще сохраняет свою форму, хотя несколько клавиш потеряли свои подписи, а некоторые кнопки немного заедают при нажатии. Trackpad реагирует с задержкой, а кнопки мыши иногда требуют несколько попыток, чтобы сработать. Однако, несмотря на все это, ноутбук по-прежнему удобен для выполнения нетребовательных операций. Система охлаждения, которая раньше была относительно тихой, теперь издает больше шума, особенно при запуске более требовательных приложений, что говорит о некотором износе вентиляторов и системы теплоотведения. Что касается технических характеристик, то этот ноутбук оснащен процессором, который был передовым несколько лет назад, но теперь не способен справляться с современными задачами. Оперативной памяти в нем всего 4 ГБ, чего недостаточно для большинства современных программ и многозадачности. Жесткий диск емкостью 500 ГБ все еще работает, но его скорость значительно ниже по сравнению с современными SSD, что приводит к долгим загрузкам и задержкам при запуске приложений.', quantity: 1, unit: 'pcs', image: laptop_image },
  { name: 'Flip-flops', description: 'For pool', category: 'Clothing', quantity: 2, unit: 'pcs' },
  { name: 'Green Hoodie', description: 'Winter Sweatshirt', category: 'Clothing', quantity: 2, unit: 'psc', image: flipflops_image},
  { name: 'Orange Hoodie', description: 'Winter Sweatshirt', category: 'Clothing', quantity: 3, unit: 'psc'}
];

const ProductList: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState(null); 

  return (
    <div className="product-list">
      {products.map((product) => (
        <div onClick={() => setSelectedProduct(product)}>
          <ProductCard {...product} />
        </div>
      ))}
      <Modal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        content={selectedProduct && <ProductBigCard {...selectedProduct} />}
      />
    </div>
  );
};

export default ProductList;
