import React from "react";
import {state_arr,s_a} from './States&Cities';

export interface IFormState{
    firstName:string,
    lastName:string,
    dob:string,
    occupation:string,
    message:string,
    addressLine1:string,
    addressLine2:string,
    city:string,
    cities:string[],
    state:string,
    pincode:string,
    textStyle:any
    
}

export class InfoForm extends React.Component<{},IFormState>{
    constructor(props:any){
        super(props);
        this.state={
            firstName:"",
            lastName:"",
            dob:"",
            message:"",
            occupation:"",
            addressLine1:"",
            addressLine2:"",
            city:"",
            cities:[],
            state:"",
            pincode:"",
            textStyle:""
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
        this.setState({ 
            ...this.state, 
            state: state_arr[Number(e.target.value)],
            cities: s_a[state_arr.indexOf(e.target.value)+1].split('|'),
            city:""
        });    

    }

    handleSubmit = (e:any) => {
        e.preventDefault();
        if(this.state.firstName===''|| this.state.lastName===''|| this.state.addressLine1===''|| this.state.addressLine2===''|| this.state.state===''|| this.state.city===''|| this.state.pincode==='' || this.state.dob===''|| this.state.occupation===''){
            this.setState({message:"All fields are mandatory!" , textStyle:"danger"})
        }
        else{
            this.setState({message:"Successful!!", textStyle:"success"})
            localStorage.setItem("firstName",this.state.firstName);
            localStorage.setItem("lastName",this.state.lastName);
            localStorage.setItem("addressLine1",this.state.addressLine1);
            localStorage.setItem("addressLine2",this.state.addressLine2);
            localStorage.setItem("state",this.state.state);
            localStorage.setItem("city",this.state.city);
            localStorage.setItem("pincode",this.state.pincode);
            localStorage.setItem("dob",this.state.dob);
            localStorage.setItem("occupation",this.state.occupation);
            // this.props.history.push('/about',{
            //     value:this.state
            // });
            console.log(this.state);
            this.setState({firstName:"" ,lastName:"" , addressLine1:"", addressLine2:"" , state:"", city:"", pincode:"", dob:"", occupation:"" });

        }
       
    }

    render(){
        return (
            <form >
                <div className="row" style={{ marginBottom:"10px"}}>
                    <div className="form-group col-md-6">
                    <label htmlFor="fName">FirstName</label>
                    <input type="text" className="form-control" name="firstName" onChange={this.handleChange}
                    value={this.state.firstName} id="fName" placeholder="First Name"/>
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="sName">Last Name</label>
                    <input type="text" className="form-control" name="lastName" onChange={this.handleChange}
                    value={this.state.lastName} id="sName" placeholder="Last Name"/>
                    </div>
                </div>

                <div className="row" style={{ marginBottom:"10px"}}>
                    <div className="form-group col-md-6">
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="date" className="form-control" name="dob" onChange={this.handleChange}
                    value={this.state.dob} id="dob" />
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="occupation">Occupation</label>
                    <input type="text" className="form-control" name="occupation" onChange={this.handleChange}
                    value={this.state.occupation} id="occupation"/>
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
                    <input type="text" className="form-control" id="inputZip" name="pincode" value={this.state.pincode} onChange={this.handleChange}/>
                    </div>
                </div>

                {this.state.message === "Successful!!" && <span className="text-success">{this.state.message}</span>}
                {this.state.message === "All fields are mandatory!" && <span className="text-danger">{this.state.message}</span>}



                <div className="mx-auto text-center">
                    <button type="submit" className="btn btn-primary col-md-4 " onClick={this.handleSubmit}>Submit</button>
                </div>
            </form>
            
        );
    }
}