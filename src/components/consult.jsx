import { Component, useState } from "react";
import { MultiSelect } from "react-multi-select-component"
import makeAnimated from 'react-select/animated'
import Select from "react-select";
import chroma from 'chroma-js';
import '../App.css'

class ObjTag extends Component {

    render() {
        return (
            <h6 className="ObjTag mx-3 p-2 bg-white rounded-pill text-black border">{this.props.val}</h6>

        );
    }
}

export default function Consult() {
    //Set animation for select option
    const animatedComponents = makeAnimated()
    //Set Data for select option (1 Obj = 1 select, selection bar = multi select)
    const colourOptions = [
        { value: 'ocean', label: 'Ocean', color: '#00B8D9', },
        { value: 'blue', label: 'Blue', color: '#0052CC' },
        { value: 'purple', label: 'Purple', color: '#5243AA' },
        { value: 'red', label: 'Red', color: '#FF5630' },
        { value: 'orange', label: 'Orange', color: '#FF8B00' },
        { value: 'yellow', label: 'Yellow', color: '#FFC400' },
        { value: 'green', label: 'Green', color: '#36B37E' },
        { value: 'forest', label: 'Forest', color: '#00875A' },
        { value: 'slate', label: 'Slate', color: '#253858' },
        { value: 'silver', label: 'Silver', color: '#666666' },
    ];
    //Get color to set color style of select option
    const colourStyles = {
        //Style option for multi select
        control: (styles) => ({ ...styles, backgroundColor: 'white', border: 0, boxShadow: "none" }),
        //Option for select option
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            const color = chroma(data.color);
            return {
                ...styles,
                backgroundColor: isDisabled
                    ? undefined
                    : isSelected
                        ? data.color
                        : isFocused
                            ? color.alpha(0.1).css()
                            : undefined,
                color: isDisabled
                    ? '#ccc'
                    : isSelected
                        ? chroma.contrast(color, 'white') > 2
                            ? 'white'
                            : 'black'
                        : data.color,
                cursor: isDisabled ? 'not-allowed' : 'default',

                ':active': {
                    ...styles[':active'],
                    backgroundColor: !isDisabled
                        ? isSelected
                            ? data.color
                            : color.alpha(0.3).css()
                        : undefined,
                },
            };
        },
        multiValue: (styles, { data }) => {
            const color = chroma(data.color);
            return {
                ...styles,
                backgroundColor: color.alpha(0.1).css(),
            };
        },
        multiValueLabel: (styles, { data }) => ({
            ...styles,
            color: data.color,
        }),
        multiValueRemove: (styles, { data }) => ({
            ...styles,
            color: data.color,
            ':hover': {
                backgroundColor: data.color,
                color: 'white',
            },
        }),
    };

    //State for get data from Multi select
    const [selectedValue, setSelectedValue] = useState([]);
    //State change when add multi select change
    const handleChange = (e) => {
        setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
    }

    //Function for read data in multi select to find who that like select
    function handleSubmit(event) {
        event.preventDefault()
        console.log(selectedValue)
    }
    return (
        <div className="container consultPage">
            <div className="row text-center">
                <div className="col-12 mb-3">
                    <h1 className="fw-bold">The Home of your <br /> dream <span className="Heart">HEART</span></h1>
                </div>
                <div className="col-12 mb-5 searchArea d-inline-flex justify-content-center">
                    <form id="formSearch" className="border rounded-pill p-3 me-3" onSubmit={(event) => handleSubmit(event)}>
                        <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            isMulti
                            value={colourOptions.filter(obj => selectedValue.includes(obj.value))}
                            options={colourOptions}
                            styles={colourStyles}
                            onChange={(event) => handleChange(event)}
                            autoFocus={true}
                            isOptionDisabled={() => selectedValue.length >= 3}
                            placeholder="เลือกหัวข้อที่ต้องการจะปรึกษา (สูงสุด 3 หัวข้อต่อการค้นหา)"
                        />
                    </form>
                    <button className="btn rounded-pill px-4 fs-5" form="formSearch" type="submit">
                        <i className="bi bi-search pe-2"></i>ค้นหา
                    </button>
                </div>
                <div className="col-12 my-5">
                    <h5>Trending search</h5>
                </div>
                <div id="TrendingTag" className="col-12 d-flex justify-content-center">
                    <ObjTag val="family" />
                    <ObjTag val="family" />
                </div>
            </div>
        </div>
    );
}

