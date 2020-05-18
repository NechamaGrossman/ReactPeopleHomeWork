import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddPerson from './AddPerson';
import PersonRow from './PersonRow';
import axios from 'axios';
import EditPerson from './EditPerson';
import { produce } from 'immer';
class PeopleTable extends React.Component {
    state = {
        people: [],
        person: {
            firstName: '',
            lastName: '',
            age: ''
        },

        edit: false
    }
    componentDidMount = () => {
        axios.get('api/people/getall').then(response => {
            const people = response.data;
            this.setState({ people:people});
        });
    }
    onUpdateClick = () => {
        console.log('here')
        axios.post('api/people/update', this.state.person).then(() => {

            axios.get('api/people/getall').then(response => {
                const people = response.data;
                this.setState({ people });
            });
        });
        const nextState = produce(this.state, draft => {
            draft.person.firstName = '';
            draft.person.lastName = '';
            draft.person.age = '';
            draft.edit = false;
        });
        this.setState(nextState);
    }
    onDeleteClick = p => {
        axios.post('/api/people/Delete', p).then(() => {
            axios.get('/api/people/getall').then(response => {
                const people = response.data;
                this.setState({ people });
            });
        });
    }
    onTextChange = e => {
        const nextState = produce(this.state, draftState => {
            draftState.person[e.target.name] = e.target.value;
        })
        this.setState(nextState);
    }
    generateDiv = () => {
        console.log(this.state.edit)
        if (this.state.edit) {
            return <EditPerson person={this.state.person} onUpdateClick={() => this.onUpdateClick()} onTextChange={this.onTextChange} />
        }
        else {
            return <h1> </h1>
        }
    }
    onEditClick = person => {
        const nextState = produce(this.state, draft => {
            draft.person = person
            draft.edit = true
        });
        this.setState(nextState);
    }
    onButtonClick = () => {
        console.log(this.state.person)
        axios.post(`/api/people/Add`, this.state.person).then(() => {
            axios.get('/api/people/getAll').then(response => {
                const people = response.data;
                this.setState({ people });
                this.setState({
                    people,
                    person: {
                        firstName: '',
                        lastName: '',
                        age: ''
                    }
                });
            });
        });
    }
    render() {
        return (
            <div>
                <AddPerson
                    person={this.state.person}
                    onTextChange={this.onTextChange}
                    onButtonClick={this.onButtonClick}

                />
                <div className="cl-md-12">
                    <table className="table  table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age Name</th>
                                <th>Delete</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.people.map((person, i) => <PersonRow onEditClick={() => { this.onEditClick(person) }} onDeleteClick={() => { this.onDeleteClick(person) }} firstName={person.firstName} lastName={person.lastName} age={person.age} />)}
                        </tbody>
                    </table>
                    <div >
                        {this.generateDiv()}
                    </div>
                </div>
            </div>
        )
    }
}
export default PeopleTable;