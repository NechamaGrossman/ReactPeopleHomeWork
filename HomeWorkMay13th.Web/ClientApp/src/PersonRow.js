import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

class PersonRow extends React.Component {

    render() {
        return (
            <tr >
                <td>{this.props.firstName}</td>
                <td>{this.props.lastName}</td>
                <td> {this.props.age} </td>
                <td><button className="btn btn-danger" onClick={this.props.onDeleteClick}>Delete</button></td>
                <td><button className="btn btn-info" onClick={this.props.onEditClick}>Edit</button></td>
            </tr>
        )
    }
}
export default PersonRow