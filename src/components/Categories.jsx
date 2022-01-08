import React, {useState} from "react";

function Categories({categories, onCatClick}) {
    const [selectedCategory, setSelectedCategory] = useState('');

    const onSelectCategory = category => setSelectedCategory(category)

    return <div className="categories">
        <ul>
            <li
                className={selectedCategory === '' ? "active" : ''}
                onClick={() => {
                onCatClick('All')
                onSelectCategory('')
            }}
            >All</li>
            {categories?.map((c, i) => <li
                key={`${c}_${i}`}
                className={selectedCategory === c ? "active" : ''}
                onClick={() => {
                    onCatClick(c)
                    onSelectCategory(c)
                }}
            >{c}</li>)}
        </ul>
    </div>
}

export default Categories;