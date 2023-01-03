import React, { Component } from "react";

class FooterCompoent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="container" style={{marginTop:"30vh"}}>
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top" >
                <span className="text-muted">All Rights Reserved 2022 @AnkitSinha</span>
                </footer>
            </div>
        )
    }

}

export default FooterCompoent;