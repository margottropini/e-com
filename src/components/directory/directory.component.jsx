
//=Import
import React from "react";
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';


import { selectDirectorySections } from '../../redux/directory/directory.selectors';

//component
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";


const Directory = ({ sections }) => (
  
     <div className="directory-menu">
        {/*Ici,je map sur section qui se situe dans mon state
          et je lui passe les props que je veux afficher dans MenuItem*/}
        {sections.map(({ id, ...otherSectionProps }   ) => ( // otherSectionProps = toutes les clés/valeur de mon state. ex : title,imageUrl etc
         <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    

)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);

