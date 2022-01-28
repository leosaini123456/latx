import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Webdevelopment from "./Webdevelopment";
import ProgrammingCourses from "./ProgrammingCourse";
import "./Advancetab.css";
function Advacetab()
{
    return(
        <Tabs>
            <TabList className="tablist">
                <Tab className="tab active">Web Development</Tab>
                <Tab className="tab">Programming Languages</Tab>
                <Tab className="tab">Andriod Development</Tab>
                <Tab className="tab">Digital Marketing</Tab>
            </TabList>
        
            <TabPanel class="tabData">
               <Webdevelopment class="Data" />
            </TabPanel>
            <TabPanel class="tabData">
                 <ProgrammingCourses class="Data" />
            </TabPanel>
            <TabPanel class="tabData">
                 <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel class="tabData">
                 <h2>Any content 2</h2>
            </TabPanel>
           
      </Tabs>
    );
}
export default Advacetab;