import React from "react";
import { Link, useParams } from "react-router-dom";


export function Welcome() {
    const {name = 'Dear'} = useParams()

    return (
        <div>
            <h3>Hello, {name}!</h3>
        </div>
    )
}
