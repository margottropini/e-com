//=Imoport React
import React from "react";
//component
import CollectionItem from "../collection-item/collection-item.component";

//styles
import "./collection-preview.styles.scss";

//CollectionPreview
const CollectionPreview = (
  { title, items } // je récupère les clés du state de shopdata
) => (
  <div className='collection-preview'>
  <h1 className='title'>{title.toUpperCase()}</h1>
  <div className='preview'>
    {items
      .filter((item, idx) => idx < 4)
      .map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
  </div>
</div>
);

export default CollectionPreview;
