import { render, screen } from '@testing-library/react';
import BillTable from "./BillTable";
import { BrowserRouter as Router } from 'react-router-dom';


describe('Test Suite for app',()=>{
test("label test",()=>{
    render(<Router>
        <BillTable/>
      </Router>);
    const labeltest = screen.getByTestId("labelbilltable");
    expect(labeltest).toBeInTheDocument();
    expect(labeltest).toHaveTextContent("BillTable");
  });
test("displayvalue Billid text",()=>{
  render(<Router><BillTable/></Router>);
  const placeholdertest = screen.getByText("BillID");
  expect(placeholdertest).toBeInTheDocument();
  expect(placeholdertest).toHaveTextContent("BillID");
})
test("displayvalue unitAmount text",()=>{
  render(<Router><BillTable/></Router>);
  const placeholdertest = screen.getByText("unitAmount");
  expect(placeholdertest).toBeInTheDocument();
  expect(placeholdertest).toHaveTextContent("unitAmount");
})
test("displayvalue tariffAmount text",()=>{
  render(<Router><BillTable/></Router>);
  const placeholdertest = screen.getByText("tariffAmount");
  expect(placeholdertest).toBeInTheDocument();
  expect(placeholdertest).toHaveTextContent("tariffAmount");
})
test("displayvalue billPaidStatus text",()=>{
  render(<Router><BillTable/></Router>);
  const placeholdertest = screen.getByText("billPaidStatus");
  expect(placeholdertest).toBeInTheDocument();
  expect(placeholdertest).toHaveTextContent("billPaidStatus");
})
test("displayvalue Action text",()=>{
  render(<Router><BillTable/></Router>);
  const placeholdertest = screen.getByText("Action");
  expect(placeholdertest).toBeInTheDocument();
  expect(placeholdertest).toHaveTextContent("Action");
})
test('add bill button is present', () => {
  render(<Router><BillTable/></Router>);
  const button = screen.getByRole('button', { name: "Add Bill"});
  expect(button).toBeInTheDocument();
});

});
