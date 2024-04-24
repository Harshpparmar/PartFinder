import React from "react";
import PowerSupplyDataTable from '../tables/PowerSupplyDataTable';

const PowerSupplyPage = () => {
    const powerSupplyData = [
        {
            "name": "EVGA SuperNOVA 850 G3",
            "type": "ATX",
            "rating": "80 Plus Gold",
            "wattage": "850W",
            "modular": "Fully Modular",
            "color": "Black",
            "price": "$139.99",
            "buyLink": "#",
            "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/afa0f4bbe4410fbe2949a19211ebb2bb.256p.jpg"
          },
          {
            "name": "Corsair RM850x",
            "type": "ATX",
            "rating": "80 Plus Gold",
            "wattage": "850W",
            "modular": "Fully Modular",
            "color": "Black",
            "price": "$129.99",
            "buyLink": "#",
            "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/4f19c6453ce4ebe67091e6d9735f3a19.256p.jpg"
          },
          {
            "name": "Seasonic Focus GX-650",
            "type": "ATX",
            "rating": "80 Plus Gold",
            "wattage": "650W",
            "modular": "Semi-Modular",
            "color": "Gray",
            "price": "$99.99",
            "buyLink": "#",
            "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/84b3aab42651adcad9a0b05ac262ea53.256p.jpg"
          },
          {
            "name": "EVGA SuperNOVA 850 G3",
            "type": "ATX",
            "rating": "80 Plus Gold",
            "wattage": "850W",
            "modular": "Fully Modular",
            "color": "Black",
            "price": "$139.99",
            "buyLink": "#",
            "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/afa0f4bbe4410fbe2949a19211ebb2bb.256p.jpg"
          },
          {
            "name": "Corsair RM850x",
            "type": "ATX",
            "rating": "80 Plus Gold",
            "wattage": "850W",
            "modular": "Fully Modular",
            "color": "Black",
            "price": "$129.99",
            "buyLink": "#",
            "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/4f19c6453ce4ebe67091e6d9735f3a19.256p.jpg"
          },
          {
            "name": "Seasonic Focus GX-650",
            "type": "ATX",
            "rating": "80 Plus Gold",
            "wattage": "650W",
            "modular": "Semi-Modular",
            "color": "Gray",
            "price": "$99.99",
            "buyLink": "#",
            "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/84b3aab42651adcad9a0b05ac262ea53.256p.jpg"
          },
          {
            "name": "EVGA SuperNOVA 850 G3",
            "type": "ATX",
            "rating": "80 Plus Gold",
            "wattage": "850W",
            "modular": "Fully Modular",
            "color": "Black",
            "price": "$139.99",
            "buyLink": "#",
            "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/afa0f4bbe4410fbe2949a19211ebb2bb.256p.jpg"
          },
          {
            "name": "Corsair RM850x",
            "type": "ATX",
            "rating": "80 Plus Gold",
            "wattage": "850W",
            "modular": "Fully Modular",
            "color": "Black",
            "price": "$129.99",
            "buyLink": "#",
            "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/4f19c6453ce4ebe67091e6d9735f3a19.256p.jpg"
          },
          {
            "name": "Seasonic Focus GX-650",
            "type": "ATX",
            "rating": "80 Plus Gold",
            "wattage": "650W",
            "modular": "Semi-Modular",
            "color": "Gray",
            "price": "$99.99",
            "buyLink": "#",
            "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/84b3aab42651adcad9a0b05ac262ea53.256p.jpg"
          },
    ];

    return (
        <div>
            <PowerSupplyDataTable powerSupplyData={powerSupplyData} />
        </div>
    )
};

export default PowerSupplyPage;

