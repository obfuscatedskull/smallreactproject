import React from "react";
import CardList from "./CardList.jsx";
import SearchBox from "./SearchBox.jsx"
import './App.css'


class App extends React.Component {
    constructor(){
        super();
        this.state = {
            user: [],
            search: ''
        }
    }


    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();

        }).then(users => {
            this.setState({user: users})
        })
    }


    searchInputChange = (e) => {
        this.setState({search: e.target.value})
    }

    render() {
        const filteredUsers = this.state.user.filter(user => {
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