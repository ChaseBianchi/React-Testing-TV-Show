import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import {fetchShow as mockFetchShow} from './api/fetchShow'
import showData from './data'

jest.mock('./api/fetchShow');

test('render without errors', ()=>{
    mockFetchShow.mockResolvedValueOnce(showData);
    render(<App/>)
})