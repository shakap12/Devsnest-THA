import { useEffect, useState } from "react";

const Card = () => {
    const [items, setItems] = useState([
        {
            name: "Pizza",
            cal: 56,
        },
        {
            name: "Burger",
            cal: 69,
        },
        {
            name: "Coke",
            cal: 500,
        },
        {
            name: "Brownie",
            cal: 180,
        },
        {
            name: "Fried Rice",
            cal: 90,
        },
        {
            name: "Lassania",
            cal: 200,
        },
        {
            name: "Pani Puri",
            cal: 0,
        },
    ]);

    const deleteitem = (i) => {
        const newItems = items.filter((e, index) => index !== i);
        setItems(newItems);
    };

    useEffect(() => {
        if (items.length === 0) {
            alert("List is now empty!!");
        }
    }, [items]);

    return (
        <>

            <div className="card">
                {items.map((ele, index) => {
                    return (
                        <div key={index} className="content">
                            <h1>{ele.name}</h1>
                            <button onClick={() => deleteitem(index)}>Delete</button>
                            <h2>You have consumed {ele.cal} cals today</h2>
                        </div>
                    );
                })}
            </div>

        </>
    );
};

export default Card;