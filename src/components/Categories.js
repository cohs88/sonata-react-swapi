import React from 'react';
import CategoryItem from './CategoryItem';

class Categories extends React.Component{
    render(){
        return (
            <div>
                <h3>STAR WARS</h3>
                <CategoryItem text="PLANETS"/>
                <CategoryItem text="SPACESHIPS"/>
                <CategoryItem text="VEHICLES"/>

                <CategoryItem text="PEOPLE"/>
                <CategoryItem text="FILMS"/>
                <CategoryItem text="SPECIES"/>
            </div>
        );
    }
}


export default Categories;