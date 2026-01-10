import React from 'react';
import Card from './Card.jsx'
import { users } from './assets/users.jsx';


const CardList = () => {
    return (
        <>
            <div>
                {users.map((user, i) => {
                    return <Card key={user.id} name={user.name} id={user.id} email={user.email}/>
                })}
            </div>
        </>
    )
}


export default CardList;