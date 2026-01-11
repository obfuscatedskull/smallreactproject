import React from "react";
import CardList from "./CardList.jsx";
import SearchBox from "./SearchBox.jsx"
import './App.css'
import { users } from "./assets/users.jsx"


class App extends React.Component {
    constructor(){
        super();
        this.state = {
            users: users,
            search: ''
        }
    }


    searchInputChange = (e) => {
        this.setState({search: e.target.value})
    }

    render() {
        const filteredUsers = this.state.users.filter(user => {
            return user.name.toLowerCase().includes(this.state.search.toLowerCase())
        })

        return (
            <>
                <div className="tc">
                    <h1 className="f1">Boba's Friends</h1>
                    <SearchBox change={this.searchInputChange}/>
                    <CardList users={filteredUsers}/>
                </div>
            </>
        )
    }
}


export default App