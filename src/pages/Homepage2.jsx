import React from "react";
import { Link } from "react-router-dom";
import Latest from "../pages/Latest";
import ExploreServices from "../components/ExploreServices";

const Homepage2 = () => {
    return (
        <>
            <div>
                <Latest />
                <ExploreServices />
            </div>
        </>
    );
};

export default Homepage2;
