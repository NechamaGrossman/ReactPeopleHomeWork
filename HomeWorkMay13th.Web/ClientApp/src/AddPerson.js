
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
class AddPerson extends React.Component {

    render() {
        const { firstName, lastName, age } = this.props.person;
        return (
            <div className="container" style={{ marginTop: 60 }}>
                <div className="row">
                    <div className="col-md-12">
                        <input type="text" placeholder="First Name" name="firstName" onChange={this.props.onTextChange} value={firstName}/>
                        <input type="text" placeholder="Last Name" name="lastName" onChange={this.props.onTextChange} value={lastName}/>
                        <input type="text" placeholder="Age" name="age" onChange={this.props.onTextChange} value={age}/>
                    </div>
                </div>
                <div className="container" style={{ marginTop: 20 }}>
                    <div className="row">
                        <button className="btn btn-primary" onClick={this.props.onButtonClick}>Add Person</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default AddPerson;
