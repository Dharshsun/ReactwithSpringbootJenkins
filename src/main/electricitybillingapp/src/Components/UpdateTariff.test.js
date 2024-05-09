import { render, screen } from '@testing-library/react';
import UpdateTariff from "./UpdateTariff";
import { BrowserRouter as Router } from 'react-router-dom';


describe('Test Suite for app',()=>{
test("label test",()=>{
    render(<Router>
        <UpdateTariff/>
      </Router>);
    const labeltest = screen.getByTestId("updateTariff");
    expect(labeltest).toBeInTheDocument();
    expect(labeltest).toHaveTextContent("Update Tariff");
  });
  test('button is present', () => {
    render(<Router><UpdateTariff/></Router>);
    const button = screen.getByRole('button', { name: "Back"});
    expect(button).toBeInTheDocument();
  });
  test('get by role tariffcategory',() => {
    render(<Router><UpdateTariff/></Router>);
    const linkElement = screen.getByRole("tariffcategory");
  expect(linkElement).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter tariffCategory")).toHaveTextContent("");
  })
  test('get by role tariffamount',() => {
    render(<Router><UpdateTariff/></Router>);
    const linkElement = screen.getByRole("tariffamount");
  expect(linkElement).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter tariffAmount")).toHaveTextContent("");
  })
  test('get by role tariffamount',() => {
    render(<Router><UpdateTariff/></Router>);
    const linkElement = screen.getByRole("tariffstatus");
  expect(linkElement).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter tariffStatus")).toHaveTextContent("");
  })
  test('back button is present', () => {
    render(<Router><UpdateTariff/></Router>);
    const button = screen.getByRole('button', { name: "Back"});
    expect(button).toBeInTheDocument();
  });

});
