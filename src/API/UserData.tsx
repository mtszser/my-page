import React from 'react';


fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(json => console.log(json))


export default class FetchUserData extends React.Component {
    render() {
        return (
            <>
            <div>{this.state}</div>
            </>
        )
    }
}