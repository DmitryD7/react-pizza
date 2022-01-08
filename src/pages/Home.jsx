import {Categories, PizzaBlock, SortPopup} from "../components";
import React from "react";

function Home({pizzasState}) {
    const namesOfCategories = ['Meat', 'Vegetarian', 'BBQ', 'Hot', 'Cheesy'];
    const sortMethods = ['Default', 'Popular', 'Alphabet'];


    return <div className="container">
        <div className="content__top">
            <Categories
                onCatClick={category => console.log(category)}
                categories={namesOfCategories}/>
            <SortPopup sortMethods={sortMethods}/>
        </div>
        <h2 className="content__title">All Pizzas</h2>
        <div className="content__items">
            {pizzasState?.map(pizza => <PizzaBlock key={pizza.id} pizza={pizza}/>)}
        </div>
    </div>
}

export default Home;