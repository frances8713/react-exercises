import React from "react";
import { useParams } from "react-router-dom";

export function Welcome() {
    const {name = 'Dear'} = useParams()

    return <h3>Hello, {name}!</h3>
}
