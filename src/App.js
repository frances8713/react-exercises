import React from "react";
import { useState } from "react"
import { Container } from './Container'
import { GithubUser } from './GithubUser'
import { HookCounter } from './HookCounter'
import { CarDetails } from './CarDetalis'


export function App () {
  const [username, setUserName] = useState('')

        return (
          <div> 
          <Container title="My Application">  
          <CarDetails />
          </Container>        
          </div>
        )
      }
