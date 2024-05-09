import { render, screen } from '@testing-library/react';
import UpdateUser from "./UpdateUser";
import { BrowserRouter as Router } from 'react-router-dom';


describe('Test Suite for app',()=>{
test("label test",()=>{
    render(<Router>
        <UpdateUser/>
      </Router>);
    const labeltest = screen.getByTestId("headerupdateuser");
    expect(labeltest).toBeInTheDocument();
    expect(labeltest).toHaveTextContent("Update User");
  });
  test('button is present', () => {
    render(<Router><UpdateUser/></Router>);
    const button = screen.getByRole('button', { name: "Back"});
    expect(button).toBeInTheDocument();
  });
  test('get by role username',() => {
    render(<Router><UpdateUser/></Router>);
    const linkElement = screen.getByRole("username");
  expect(linkElement).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter userName")).toHaveTextContent("");
  })
  test('get by role userlocation',() => {
    render(<Router><UpdateUser/></Router>);
    const linkElement = screen.getByRole("userlocation");
  expect(linkElement).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter UserLocation")).toHaveTextContent("");
  })
  test('get by role usersubsidies',() => {
    render(<Router><UpdateUser/></Router>);
    const linkElement = screen.getByRole("usersubsidies");
  expect(linkElement).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter Subsidies")).toHaveTextContent("");
  })
  test('get by role billid',() => {
    render(<Router><UpdateUser/></Router>);
    const linkElement = screen.getByRole("billid");
  expect(linkElement).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter billId")).toHaveTextContent("");
  })
  test('get by role tariffid',() => {
    render(<Router><UpdateUser/></Router>);
    const linkElement = screen.getByRole("tariffid");
  expect(linkElement).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter TariffId")).toHaveTextContent("");
  })
  test('back button is present', () => {
    render(<Router><UpdateUser/></Router>);
    const button = screen.getByRole('button', { name: "Back"});
    expect(button).toBeInTheDocument();
  });

});
