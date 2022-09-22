import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Container } from './Container'
import { GithubUser } from './GithubUser'
import { HookCounter } from './HookCounter'
import { CarDetails } from './CarDetalis'
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";
import { FilteredList } from './FilteredList';
import { Welcome } from './Welcome';

export function App () {

        return (
          <div>         
          <Container title="My Application">  
          <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path=":name" element={<Welcome/>}/>
          </Routes>
          </Container>             
          </div>
        )
      }
