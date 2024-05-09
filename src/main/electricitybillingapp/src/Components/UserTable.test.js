import { render, screen } from '@testing-library/react';
import UserTable from "./UserTable";
import { BrowserRouter as Router } from 'react-router-dom';


describe('Test Suite for app',()=>{
test("label test",()=>{
    render(<Router>
        <UserTable/>
      </Router>);
    const labeltest = screen.getByTestId("userlist");
    expect(labeltest).toBeInTheDocument();
    expect(labeltest).toHaveTextContent("UserList");
  });
test("displayvalue userid text",()=>{
  render(<Router><UserTable/></Router>);
  const placeholdertest = screen.getByText("ID");
  expect(placeholdertest).toBeInTheDocument();
  expect(placeholdertest).toHaveTextContent("ID");
})
test("displayvalue userName text",()=>{
  render(<Router><UserTable/></Router>);
  const placeholdertest = screen.getByText("userName");
  expect(placeholdertest).toBeInTheDocument();
  expect(placeholdertest).toHaveTextContent("userName");
})
test("displayvalue userLocation text",()=>{
  render(<Router><UserTable/></Router>);
  const placeholdertest = screen.getByText("userLocation");
  expect(placeholdertest).toBeInTheDocument();
  expect(placeholdertest).toHaveTextContent("userLocation");
})
test("displayvalue userSubsidies text",()=>{
  render(<Router><UserTable/></Router>);
  const placeholdertest = screen.getByText("userSubsidies");
  expect(placeholdertest).toBeInTheDocument();
  expect(placeholdertest).toHaveTextContent("userSubsidies");
})
test("displayvalue tariffId text",()=>{
  render(<Router><UserTable/></Router>);
  const placeholdertest = screen.getByText("tariffId");
  expect(placeholdertest).toBeInTheDocument();
  expect(placeholdertest).toHaveTextContent("tariffId");
})
test("displayvalue billId text",()=>{
  render(<Router><UserTable/></Router>);
  const placeholdertest = screen.getByText("billId");
  expect(placeholdertest).toBeInTheDocument();
  expect(placeholdertest).toHaveTextContent("billId");
})
test("displayvalue Action text",()=>{
  render(<Router><UserTable/></Router>);
  const placeholdertest = screen.getByText("Action");
  expect(placeholdertest).toBeInTheDocument();
  expect(placeholdertest).toHaveTextContent("Action");
})
test('add user button is present', () => {
  render(<Router><UserTable/></Router>);
  const button = screen.getByRole('button', { name: "Add User"});
  expect(button).toBeInTheDocument();
});

});
