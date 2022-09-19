import React from "react";
import { useState } from "react"
import { Container } from './Container'
import { GithubUser } from './GithubUser'
import { HookCounter } from './HookCounter'


export function App () {
  const [username, setUserName] = useState('')

        return (
          <div> 
          <Container title="My Application">  
          <input value={username} onChange={(e) => setUserName(e.target.value)} />      
          <GithubUser username="frances8713"/>
          <HookCounter />
          </Container>        
          </div>
        )
      }
