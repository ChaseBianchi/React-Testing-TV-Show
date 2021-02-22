import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Episodes from "./Episodes";
import showData from '../data'
// const episodes = showData.data._embedded.episodes


test('render without errors', ()=>{
    render(<Episodes episodes={[]}/>)
})