import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
class EditPerson extends React.Component {

    render() {
        const { firstName, lastName, age } = this.props.person;
        return (
            <div className="container" style={{ marginTop: 60 }}>
                <div className="row">
                    <div className="col-md-12">
                        <input defaultValue={firstName} name="firstName" onChange={this.props.onTextChange} />
                        <input defaultValue={lastName} name="lastName" onChange={this.props.onTextChange}/>
                        <input defaultValue={age} name="age" onChange={this.props.onTextChange}/>
                    </div>
                </div>
                <div className="container" style={{ marginTop: 30 }}>
                    <button className="btn btn-warning" onClick={this.props.onUpdateClick}> Update</button>
                </div>
            </div>
        )
    }
}
export default EditPerson;
