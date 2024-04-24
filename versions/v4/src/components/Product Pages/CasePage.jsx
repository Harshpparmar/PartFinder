import React from "react";
import CaseDataTable from "../tables/CaseDataTable";

const CasePage = () => {
    const caseData = [
        {
            "name": "NZXT H510",
            "type": "Mid Tower",
            "color": "Black",
            "sidepanel": "Tempered Glass",
            "exvolume": "57.5L",
            "price": "$69.99",
            "buyLink": "#",
            "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/84cb77175187296029f50f8bf6ca6960.256p.jpg"
          },
          {
            "name": "Corsair Crystal 570X RGB",
            "type": "Full Tower",
            "color": "White",
            "sidepanel": "Tempered Glass",
            "exvolume": "65.7L",
            "price": "$189.99",
            "buyLink": "#",
            "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg"
          },
          {
            "name": "NZXT H9 Flow",
            "type": "Mid Tower",
            "color": "Black",
            "sidepanel": "Tempered Glass",
            "exvolume": "40.4L",
            "price": "$89.99",
            "buyLink": "#",
            "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/61eb5534e35ce8af07f25ff28197862b.256p.jpg"
          },
          {
            "name": "NZXT H510",
            "type": "Mid Tower",
            "color": "Black",
            "sidepanel": "Tempered Glass",
            "exvolume": "57.5L",
            "price": "$69.99",
            "buyLink": "#",
            "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/84cb77175187296029f50f8bf6ca6960.256p.jpg"
          },
          {
            "name": "Corsair Crystal 570X RGB",
            "type": "Full Tower",
            "color": "White",
            "sidepanel": "Tempered Glass",
            "exvolume": "65.7L",
            "price": "$189.99",
            "buyLink": "#",
            "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg"
          },
          {
            "name": "NZXT H9 Flow",
            "type": "Mid Tower",
            "color": "Black",
            "sidepanel": "Tempered Glass",
            "exvolume": "40.4L",
            "price": "$89.99",
            "buyLink": "#",
            "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/61eb5534e35ce8af07f25ff28197862b.256p.jpg"
          },
          {
            "name": "NZXT H510",
            "type": "Mid Tower",
            "color": "Black",
            "sidepanel": "Tempered Glass",
            "exvolume": "57.5L",
            "price": "$69.99",
            "buyLink": "#",
            "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/84cb77175187296029f50f8bf6ca6960.256p.jpg"
          },
          {
            "name": "Corsair Crystal 570X RGB",
            "type": "Full Tower",
            "color": "White",
            "sidepanel": "Tempered Glass",
            "exvolume": "65.7L",
            "price": "$189.99",
            "buyLink": "#",
            "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/bc6e987da3fe22c616898d1d7fa3d227.256p.jpg"
          },
          {
            "name": "NZXT H9 Flow",
            "type": "Mid Tower",
            "color": "Black",
            "sidepanel": "Tempered Glass",
            "exvolume": "40.4L",
            "price": "$89.99",
            "buyLink": "#",
            "imageUrl": "https://cdna.pcpartpicker.com/static/forever/images/product/61eb5534e35ce8af07f25ff28197862b.256p.jpg"
          },
    ];

    return(
        <div>
            <CaseDataTable caseData={caseData} />
        </div>
    )
};

export default CasePage;