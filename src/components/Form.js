import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { getYearValue, calculateBrand, getPlan } from '../Helper'

//Styled components

const FormContainer = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;
const Select = styled.select`
    display: block;
    width: 100%;
    padding:1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance:none;
`;
const InputRadio = styled.input`
    margin: 0 1rem;
`;
const Button = styled.button`
    background-color: #00832F;
    font-size: 16px;
    width:100%;
    margin-top:2rem;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight:bold;
    border: none;
    transition: all .3s ease-in-out;

    &:hover {
        background-color:#26c6da;
        cursor:pointer;
    }
`;

const Error = styled.div`
    background-color:red;
    color:white;
    margin-bottom: 2rem;
    padding:1rem;
    width: 100%;
    text-align: center;
`;

/////////////////////////////////////////////////

const Form = ({saveResume, setLoading}) => {

    const [data, saveData] = useState({
        brand:'',
        year:'',
        plan:''
    });
    
    const [error, setError] = useState(false);

    const {brand, year, plan} = data;
    
    const getData = e => {
        saveData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const estimateAssurance = e => {
        e.preventDefault();

        if(brand.trim() === '' || year.trim() === '' || plan.trim() === ''){
            setError(true);
            return;
        }

        setError(false);

        let result = 2000;

        //Calculate year
        const yearValue = getYearValue(year);
        result -= ((yearValue*3) * result) / 100;

        //Calculate brand
        result *= calculateBrand(brand);

        //Calculate plan
        const planPercentage = getPlan(plan);
        result = parseFloat(planPercentage * result).toFixed(2);

        setLoading(true);

        setTimeout(() => {
            setLoading(false);

            saveResume({
                quote: Number(result),
                data
            });

        }, 3000)

    }
    return ( 
        <form
            onSubmit={estimateAssurance}
        >

            {error ? <Error>All fields are required</Error> : null}
            <FormContainer>
                <Label>Brand</Label>
                <Select
                    name='brand'
                    value={brand}
                    onChange={getData}
                >
                    <option value=''>-- Seleccione --</option>
                    <option value='american'>-- American --</option>
                    <option value='european'>-- European --</option>
                    <option value='asian'>-- Asian --</option>
                </Select>
            </FormContainer>

            <FormContainer>
                <Label>Year</Label>
                <Select
                    name='year'
                    value={year}
                    onChange={getData}
                >
                    <option value=''>-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </FormContainer>

            <FormContainer>
                <Label>Plan</Label>
                <InputRadio
                    type='radio'
                    name='plan'
                    value='basic'
                    checked={plan === 'basic'}
                    onChange={getData}
                /> Basic

                <InputRadio
                    type='radio'
                    name='plan'
                    value='complete'
                    checked={plan === 'complete'}
                    onChange={getData}
                /> Complete
            </FormContainer>
            <Button type='submit'>Estimate</Button>
        </form>
     );
}

Form.propTypes = {
    saveResume: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired
}
 
export default Form;