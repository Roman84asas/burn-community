import React from 'react';


function Categories({ items, onClickItem }) {
    const [activeItem, setActiveItem] = React.useState(0);

    const onSelectItem = (index, name) => {
        setActiveItem(index);
        onClickItem(name);
    };

    return (
        <div className="home_articles_categories">
            <ul className="home_articles_categories_lists">
                {items &&
                items.map((name, index) => (
                    <li
                        className={activeItem === index ? 'home_articles_categories_lists_active' : ''}
                        onClick={() => onSelectItem(index, name)}
                        key={`${name}_${index}`}>
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;
