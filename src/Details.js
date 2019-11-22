import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Details extends Component {
    constructor(props) {
        super(props)

    }
    render() {

        return (
            <div>
                <p>
                    Welcome to Details Page!
                </p>
                <br />
                <Link to='/'>Go To Home Page By Link</Link>
            </div>
        )
    }
}