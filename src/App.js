import React from "react";
import { useState } from "react"
import { Container } from './Container'
import { GithubUser } from './GithubUser'
import { HookCounter } from './HookCounter'
import { CarDetails } from './CarDetalis'
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";
import { FilteredList } from './FilteredList'


export function App () {

        return (
          <div>         
          <Container title="My Application">  
          <FilteredList />
          </Container>             
          </div>
        )
      }
