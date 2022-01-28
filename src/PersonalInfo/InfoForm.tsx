import React, { useState } from "react";
import { useNavigate } from "react-router";
import {state_arr,s_a} from './States&Cities';

export const InfoForm = () => {

    const naviagte = useNavigate();

    const [state, setState] = useState({
        firstName:'',
        lastName:'',
        dob:'',
        message:'',
        occupation:'',
        addressLine1:'',
        addressLine2:'',
        state_:'',
        city:'',
        pincode:'',
        cities:Array<string>()
    })
    

    const handleChange = (e:any) => {

        const {value, name} = e.target; 
        setState({ 
        ...state, 
        [name]: value
        });
        console.log(state);
    }

    const handleState = (e:any) =>{
        setState({
            ...state, 
            state_: e.target.value,
            cities: s_a[state_arr.indexOf(e.target.value)+1].split('|'),
            city:""
        });    
        
        console.log(state);
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        if(state.firstName===''|| state.lastName===''|| state.addressLine1===''|| state.addressLine2===''|| state.state_===''|| state.city===''|| state.pincode==='' || state.dob===''|| state.occupation===''){
            setState({...state,message:"All fields are mandatory!"})
        }
        else{
            setState({...state,message:"Successful!!"})
            localStorage.setItem("firstName",state.firstName);
            localStorage.setItem("lastName",state.lastName);
            localStorage.setItem("addressLine1",state.addressLine1);
            localStorage.setItem("addressLine2",state.addressLine2);
            localStorage.setItem("state",state.state_);
            localStorage.setItem("city",state.city);
            localStorage.setItem("pincode",state.pincode);
            localStorage.setItem("dob",state.dob);
            localStorage.setItem("occupation",state.occupation);

            naviagte('/about',{state:{...state}});
            setState({...state,firstName:"" ,lastName:"" , addressLine1:"", addressLine2:"" , state_:"", city:"", pincode:"", dob:"", occupation:"" });

        }
       
    }

    return (
        <form >
            <div className="row" style={{ marginBottom:"10px"}}>
                <div className="form-group col-md-6">
                <label htmlFor="fName">FirstName</label>
                <input type="text" className="form-control" name="firstName" onChange={handleChange}
                value={state.firstName} id="fName" placeholder="First Name"/>
                </div>
                <div className="form-group col-md-6">
                <label htmlFor="sName">Last Name</label>
                <input type="text" className="form-control" name="lastName" onChange={handleChange}
                value={state.lastName} id="sName" placeholder="Last Name"/>
                </div>
            </div>

            <div className="row" style={{ marginBottom:"10px"}}>
                <div className="form-group col-md-6">
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" className="form-control" name="dob" onChange={handleChange}
                value={state.dob} id="dob" />
                </div>
                <div className="form-group col-md-6">
                <label htmlFor="occupation">Occupation</label>
                <input type="text" className="form-control" name="occupation" onChange={handleChange}
                value={state.occupation} id="occupation"/>
                </div>
            </div>

            <div className="form-group" style={{ marginBottom:"10px"}}>
                <label htmlFor="inputAddress">Address</label>
                <input type="text" className="form-control" name="addressLine1" onChange={handleChange}
                    value={state.addressLine1} id="inputAddress" placeholder="Flat, plot"/>
            </div>

            <div className="form-group" style={{ marginBottom:"10px"}}>
                <label htmlFor="inputAddress2">Address 2</label>
                <input type="text" className="form-control" name="addressLine2" onChange={handleChange}
                value={state.addressLine2} id="inputAddress2" placeholder="Apartment, studio, or floor"/>
            </div>

            <div className="row" style={{ marginBottom:'20px' }}>
                <div className="form-group col-md-6">
                <label htmlFor="inputState">State</label>
                <select id="inputState" className="form-control custom-select" value={state.state_} name="state" onChange={handleState}>
                    <option value="">Choose State...</option>
                    {
                        state_arr.map((value,index)=>{
                            return (
                                <option value={value} key={index}>{value}</option>
                            );
                        })
                    }
                </select>
                </div>
                
                <div className="form-group col-md-4">
                <label htmlFor="inputCity">City</label>
                <select id="inputCity" className="form-control" value={state.city} name="city" onChange={handleChange}>
                    <option value="" >Choose City...</option>
                    {
                        state.cities.map((value,index)=>{
                            return (
                                <option value={value} key={index}>{value}</option>
                            );
                        })
                    }
                </select>
                </div>
                <div className="form-group col-md-2">
                <label htmlFor="inputZip">Zip</label>
                <input type="text" className="form-control" id="inputZip" name="pincode" value={state.pincode} onChange={handleChange}/>
                </div>
            </div>

            {state.message === "Successful!!" && <span className="text-success">{state.message}</span>}
            {state.message === "All fields are mandatory!" && <span className="text-danger">{state.message}</span>}



            <div className="mx-auto text-center" style={{ marginTop:'10px' }}>
                <button type="submit" className="btn btn-primary col-md-4 " onClick={handleSubmit}>Submit</button>
            </div>
        </form>
        
    );
}