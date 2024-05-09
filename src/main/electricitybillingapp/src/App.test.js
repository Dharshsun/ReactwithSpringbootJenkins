import { render, screen } from '@testing-library/react';
import App from './App';
// import UserTable from './Components/UserTable';



describe('Test Suite for app',()=>{
test("lebel test",()=>{
  render(<App/>);
  const testcase1 = screen.getByTestId("test1");
  expect(testcase1).toBeInTheDocument();
  expect(testcase1).toHaveTextContent("Sample");
});
});