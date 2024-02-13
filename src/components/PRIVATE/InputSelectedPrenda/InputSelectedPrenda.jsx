/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { useCallback } from 'react';
import Prendas from '../../../utils/img/Prendas/index';

import { Avatar, Group, Select, Text } from '@mantine/core';
import { forwardRef, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

const {
  Abrigo,
  // Alfombra,
  LavadoMano,
  Almohada,
  Camisa,
  Casaca,
  Alfombra,
  Terno,
  Cobertor,
  Cortinas,
  Cubrecama,
  Otro,
  Frazada,
  Jean,
  Manta,
  Pantalon,
  Polo,
  Saco,
  Zapatillas,
  ServicioCompleto,
  Lavado,
  Desmanchado,
} = Prendas;

const SelectItem = forwardRef(({ image, label, ...others }, ref) => (
  <div ref={ref} {...others}>
    <Group noWrap={true}>
      <Avatar src={image} />
      <div>
        <Text>{label}</Text>
      </div>
    </Group>
  </div>
));

const InputSelectedPrenda = ({ listenClick, tabI, disabled }) => {
  const infoProductos = useSelector((state) => state.prenda.infoPrendas);
  const [data, setData] = useState([]);
  const [defaultValue, setDefaultValue] = useState(null);

  const getPricePrenda = useCallback((productos, nombre) => {
    const product = productos.find((producto) => producto.name.toLowerCase() === nombre.toLowerCase());

    if (product) {
      return product.price;
    }

    return 0;
  }, []);

  useEffect(() => {
    const productosDB = infoProductos;
    // Producto - precio - stado
    const info = [
      {
        image: Lavado,
        label: 'Servicio de Lavado',
        value: ['Servicio de Lavadoo', getPricePrenda(productosDB, 'Servicio de Lavado'), false],
      },
      {
        image: ServicioCompleto,
        label: 'Servicio Completo',
        value: ['Servicio Completo', getPricePrenda(productosDB, 'Servicio Completo'), false],
      },
      // {
      //   image: Edredon,
      //   label: 'Edredon',
      //   value: ['Edredon', getPricePrenda(productosDB, 'Edredon'), false],
      // },
      {
        image: Cobertor,
        label: 'Cobertor',
        value: ['Cobertor', getPricePrenda(productosDB, 'Cobertor'), false],
      },
      {
        image: Cubrecama,
        label: 'Cubrecama',
        value: ['Cubrecama', getPricePrenda(productosDB, 'Cubrecama'), false],
      },
      {
        image: LavadoMano,
        label: 'Lavado a Mano',
        value: ['Lavado a Mano', getPricePrenda(productosDB, 'Lavado a Mano'), false],
      },
      {
        image: Desmanchado,
        label: 'Desmanchado',
        value: ['Desmanchado', getPricePrenda(productosDB, 'Desmanchado'), false],
      },
      {
        image: Frazada,
        label: 'Frazada',
        value: ['Frazada', getPricePrenda(productosDB, 'Frazada'), false],
      },
      {
        image: Manta,
        label: 'Poncho',
        value: ['Poncho', getPricePrenda(productosDB, 'Poncho'), false],
      },
      {
        image: Casaca,
        label: 'Chumpa',
        value: ['Chumpa', getPricePrenda(productosDB, 'Chumpa'), false],
      },
      {
        image: Terno,
        label: 'Traje',
        value: ['Traje', getPricePrenda(productosDB, 'Traje'), false],
      },
      {
        image: Saco,
        label: 'Saco',
        value: ['Saco', getPricePrenda(productosDB, 'Saco'), false],
      },
      {
        image: Camisa,
        label: 'Camisa',
        value: ['Camisa', getPricePrenda(productosDB, 'Camisa'), false],
      },
      {
        image: Pantalon,
        label: 'Pantalon',
        value: ['Pantalon', getPricePrenda(productosDB, 'Pantalon'), false],
      },
      {
        image: Abrigo,
        label: 'Abrigo',
        value: ['Abrigo', getPricePrenda(productosDB, 'Abrigo'), false],
      },
      {
        image: Zapatillas,
        label: 'Zapato',
        value: ['Zapato', getPricePrenda(productosDB, 'Zapato'), false],
      },
      {
        image: Jean,
        label: 'Vaquero',
        value: ['Vaquero', getPricePrenda(productosDB, 'Vaquero'), false],
      },
      {
        image: Polo,
        label: 'Playera',
        value: ['Playera', getPricePrenda(productosDB, 'Playera'), false],
      },
      {
        image: Alfombra,
        label: 'Alfombra',
        value: ['Alfombra', getPricePrenda(productosDB, 'Alfombra'), false],
      },
      {
        image: Cortinas,
        label: 'Cortinas',
        value: ['Cortinas', getPricePrenda(productosDB, 'Cortinas'), false],
      },

      {
        image: Almohada,
        label: 'Almohada',
        value: ['Almohada', getPricePrenda(productosDB, 'Almohada'), false],
      },
      {
        image: Otro,
        label: 'Otros',
        value: ['Otros', '', false], // Producto - precio - stado - Categoria
      },
    ];

    setData(info);
  }, [infoProductos]);

  return (
    <Select
      label="Escoga Prenda :"
      placeholder="Escoga para agregar"
      itemComponent={SelectItem}
      data={data}
      value={defaultValue}
      size="lg"
      searchable={true}
      tabIndex={tabI}
      disabled={disabled}
      dropdownPosition="bottom"
      maxDropdownHeight={270}
      nothingFound="No encontrado"
      filter={(value, item) => item.label.toLowerCase().includes(value.toLowerCase().trim())}
      hoverOnSearchChange={true}
      onChange={(value) => {
        listenClick(value[0], value[1], value[2]);
        setDefaultValue(null);
      }}
    />
  );
};

export default InputSelectedPrenda;
