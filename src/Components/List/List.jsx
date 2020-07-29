import React from 'react';
import './List.scss';

const List = ({ title, items = [] }) => {
    return (
        <div
            id='list' 
            className='list'>
            <h1 className='listTitle'>{title}</h1>
            <div className='listContainer'>
                <div className="textContent">
                    <h1>Title</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero maiores quis ullam aliquam voluptate soluta, doloribus sint harum alias unde aliquid odio nihil assumenda similique eos laborum, magni veritatis totam!
                    </p>
                </div>
                <div className='listContent'>
                    <ul className='listSkills'>
                        {items.map(
                            item => (
                                <li key={item.name}>
                                    {item.name}
                                </li>
                            )
                        )}
                    </ul>
                    <ul className='listLevel'>
                        {items.map(
                            item => (
                                <li key={item.name}>
                                    {item.level}
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default List;
