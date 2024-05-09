import { render, screen } from '@testing-library/react';
import TariffTable from "./TariffTable";
import { BrowserRouter as Router } from 'react-router-dom';


describe('Test Suite for app',()=>{
test("label test",()=>{
    render(<Router>
        <TariffTable/>
      </Router>);
    const tarifflisttest = screen.getByTestId("tarifflist");
    expect(tarifflisttest).toBeInTheDocument();
    expect(tarifflisttest).toHaveTextContent("Tariff List");
  });
  test("displayvalue Billid text",()=>{
    render(<Router><TariffTable/></Router>);
    const placeholdertest = screen.getByText("ID");
    expect(placeholdertest).toBeInTheDocument();
    expect(placeholdertest).toHaveTextContent("ID");
  })
  test("displayvalue tariffCategory text",()=>{
    render(<Router><TariffTable/></Router>);
    const placeholdertest = screen.getByText("tariffCategory");
    expect(placeholdertest).toBeInTheDocument();
    expect(placeholdertest).toHaveTextContent("tariffCategory");
  })
  test("displayvalue tariffAmount text",()=>{
    render(<Router><TariffTable/></Router>);
    const placeholdertest = screen.getByText("tariffAmount");
    expect(placeholdertest).toBeInTheDocument();
    expect(placeholdertest).toHaveTextContent("tariffAmount");
  })
  test("displayvalue tariffStatus text",()=>{
    render(<Router><TariffTable/></Router>);
    const placeholdertest = screen.getByText("tariffStatus");
    expect(placeholdertest).toBeInTheDocument();
    expect(placeholdertest).toHaveTextContent("tariffStatus");
  })
  test("displayvalue Action text",()=>{
    render(<Router><TariffTable/></Router>);
    const placeholdertest = screen.getByText("Action");
    expect(placeholdertest).toBeInTheDocument();
    expect(placeholdertest).toHaveTextContent("Action");
  })
  test('add tariff button is present', () => {
    render(<Router><TariffTable/></Router>);
    const button = screen.getByRole('button', { name: "Add Tariff"});
    expect(button).toBeInTheDocument();
  });

});
