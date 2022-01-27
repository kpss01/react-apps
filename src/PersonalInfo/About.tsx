import React from "react";
export class About extends React.Component<{}>{

    constructor(props:any){
        super(props)
        console.log(props);
    }

    render(){
        return (
            <div>
                <h1>About US</h1>
            </div>
        )
    }
}