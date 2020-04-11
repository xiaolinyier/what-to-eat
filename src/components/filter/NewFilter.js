import React, { Component } from 'react';
import Checkbox from './Checkbox';

const items = [
    'Spicy',
    'Sweet',
    'Savory',
    'Healthy',
];
const items2 = [
    'American',
    'Chinese',
    'Mexican',
    'Indian',
    'Italian',
    'Korean',
    'Mediterranean',
];
const items3 = [
    'Birthday',
    'Business Meeting',
    'Friendly gathering',
    'Date',
    'Families with Children',
];

const items4 = [
    'Elegant',
    'Rustic',
    'Exotic',
    'Authentic',
    'Romantic',
];

class NewFilter extends Component {
    componentWillMount = () => {
        this.selectedCheckboxes = new Set();
    }

    toggleCheckbox = label => {
        if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
        } else {
            this.selectedCheckboxes.add(label);
        }
    }

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();

        for (const checkbox of this.selectedCheckboxes) {
            console.log(checkbox, 'is selected.');
        }
    }

    createCheckbox = label => (
        <Checkbox
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
        />
    )

    createCheckboxes = () => (
        items.map(this.createCheckbox)
    )
    createCheckboxes2 = () => (
        items2.map(this.createCheckbox)
    )
    createCheckboxes3 = () => (
        items3.map(this.createCheckbox)
    )
    createCheckboxes4 = () => (
        items4.map(this.createCheckbox)
    )

    render() {
        return (

                <div className="col scroll">
                    <div className="row">
                    <div className="col">
                        <div className="filter-info">
                            <div className="filter-title">
                                <label>Taste</label>
                            </div>
                            <form onSubmit={this.handleFormSubmit}>
                                {this.createCheckboxes()}
                            </form>
                        </div>
                        <div className="filter-info">
                            <div className="filter-title">
                                <label>Cuisine</label>
                            </div>
                            <form onSubmit={this.handleFormSubmit}>
                                {this.createCheckboxes2()}
                            </form>
                        </div>
                        <div className="filter-info">
                            <div className="filter-title">
                                <label>Occassion</label>
                            </div>
                            <form onSubmit={this.handleFormSubmit}>
                                {this.createCheckboxes3()}
                            </form>
                        </div>
                        <div className="filter-info">
                            <div className="filter-title">
                                <label>Mood</label>
                            </div>
                            <form onSubmit={this.handleFormSubmit}>
                                {this.createCheckboxes4()}
                            </form>
                        </div>

                    </div>
                    </div>
                    <div className="row" style={{justifyContent: "center", marginBottom: '5%'}}>
                        <button className="btn btn-default" type="submit">SEARCH</button>
                    </div>
                </div>

        );
    }
}

export default NewFilter;
