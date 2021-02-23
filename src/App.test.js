import React from "react";
import { render, screen, wait } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import {fetchShow as mockFetchShow} from './api/fetchShow'
import showData from './data'

jest.mock('./api/fetchShow');

test('render without errors', ()=>{
    mockFetchShow.mockResolvedValueOnce(showData);

    render(<App/>)

    // userEvent.click(screen.getByText(/select a season/i));
    // userEvent.click(screen.getByText(/season 1/i))
    // expect(screen.getByText(/the vanish of will byers/i)).toBeInTheDocument();
})

test('dropdown change updates episodes', async ()=>{
    mockFetchShow.mockResolvedValueOnce(showData);
    const {getByText, queryAllByTestId} = render(<App/>)

    expect(queryAllByTestId('episode')).toHaveLength(0)

    await wait() 
    userEvent.click(getByText(/select a season/i))
    userEvent.click(getByText(/season 1/i))

    await wait()
    expect(queryAllByTestId('episode')).toHaveLength(3)

})