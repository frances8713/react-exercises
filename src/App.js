import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container } from './Container'
import { GithubUser } from './GithubUser'
import { HookCounter } from './HookCounter'
import { CarDetails } from './CarDetalis'
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";
import { FilteredList } from './FilteredList';
import { Welcome } from './Welcome';
import { Counter } from './Counter'
import { ShowGithubUser} from './ShowGithubUser'
import { GithubUserList } from "./GithubUserList";
export function App () {

        return (
          <div>         
          <Container title="My Application">  
          <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path=":name" element={<Welcome/>}/>
              <Route path="counter" element={<Counter/>} />
              <Route path="/users" element={<GithubUserList />}>
                  <Route index element={<p>Add a user and select it</p>}></Route>
                  <Route path=":username" element={<ShowGithubUser />}/>
              </Route>   
              <Route path="*" element={<div><p>Not found</p>
              <Link to="/">Go Home</Link></div>} />
          </Routes>
            <div className="link-one">
              <Link to="/">Home</Link> 
              <Link to="/Counter">Counter</Link>
              <Link to="users/">Github User</Link>
            </div>   
          </Container>             
          </div>
        )
      }
