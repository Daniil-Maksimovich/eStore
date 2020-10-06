import React from 'react';

import ProductBlock from '../../productBlock/index';

const Search = () => {
    const machedArray = JSON.parse(window.localStorage.getItem('machedArray'));
    return(
            <div className="wrapper">
                {
                    machedArray.length ? (machedArray.map( ( item, key ) => {
                        return(
                            <ProductBlock
                                path={(item.cooling ? "computers" : item.camera ? 'phones' : 'laptops')}
                                key={key}
                                image={item.img}
                                id={item.id}
                                name={item.name}
                                price={item.price}
                            />
                        ) 
                    })) : <h1>No Results</h1>
                }
            </div>
    )
}
export default Search