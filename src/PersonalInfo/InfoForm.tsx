import React from "react";
import {state_arr,s_a} from './States&Cities'

interface IFormState{
    firstName:string,
    lastName:string,
    dob:string,
    occupation:string,
    addressLine1:string,
    addressLine2:string,
    city:string,
    cities:string[],
    state:string,
    pincode:string,
}

export class InfoForm extends React.Component<{},IFormState>{
    constructor(props:any){
        super(props);
        this.state={
            firstName:"",
            lastName:"",
            dob:"",
            occupation:"",
            addressLine1:"",
            addressLine2:"",
            city:"",
            cities:[],
            state:"",
            pincode:"",
        };
    }

    handleChange = (e:any) => {
        const {value, name} = e.target; 
        this.setState({ 
        ...this.state, 
        [name]: value
        });
        console.log(this.state);
    }

    handleState = (e:any) =>{
        console.log("len=="+state_arr.length+"---"+s_a.length);
        console.log("values=="+e.target.value);
        this.setState({ 
            ...this.state, 
            state: state_arr[Number(e.target.value)],
            cities: s_a[state_arr.indexOf(e.target.value)+1].split('|'),
            city:""
        });
        console.log(this.state);
    

    }
    handleCity = (e:any) =>{
        console.log("value=="+e.target.value);
    }

    handleSubmit = (e:any) => {
        e.preventDefault();
    }

    render(){
        return (
            <form>
                <div className="row" style={{ marginBottom:"10px"}}>
                    <div className="form-group col-md-6">
                    <label htmlFor="fName">FirstName</label>
                    <input type="email" className="form-control" name="firstName" onChange={this.handleChange}
                    value={this.state.firstName} id="fName" placeholder="First Name"/>
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="sName">Last Name</label>
                    <input type="password" className="form-control" name="lastName" onChange={this.handleChange}
                    value={this.state.lastName} id="sName" placeholder="Last Name"/>
                    </div>
                </div>

                <div className="form-group" style={{ marginBottom:"10px"}}>
                    <label htmlFor="inputAddress">Address</label>
                    <input type="text" className="form-control" name="addressLine1" onChange={this.handleChange}
                        value={this.state.addressLine1} id="inputAddress" placeholder="Flat, plot"/>
                </div>

                <div className="form-group" style={{ marginBottom:"10px"}}>
                    <label htmlFor="inputAddress2">Address 2</label>
                    <input type="text" className="form-control" name="addressLine2" onChange={this.handleChange}
                    value={this.state.addressLine2} id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                </div>

                <div className="row" style={{ marginBottom:'30px' }}>
                    <div className="form-group col-md-6">
                    <label htmlFor="inputState">State</label>
                    <select id="inputState" className="form-control custom-select" value={this.state.state} name="state" onChange={this.handleState}>
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
                    <select id="inputCity" className="form-control" value={this.state.city} name="city" onChange={this.handleChange}>
                        <option value="" >Choose City...</option>
                        {
                            this.state.cities.map((value,index)=>{
                                return (
                                    <option value={index} key={index}>{value}</option>
                                );
                            })
                        }
                    </select>
                    </div>
                    <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip"/>
                    </div>
                </div>

                <div className="mx-auto text-center">
                    <button type="submit" className="btn btn-primary col-md-4 ">Submit</button>
                </div>
            </form>
            
        );
    }
}