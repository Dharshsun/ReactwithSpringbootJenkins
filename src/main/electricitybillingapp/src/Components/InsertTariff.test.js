import { render, screen } from '@testing-library/react';
import InsertTariff from './InsertTariff';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Test Suite for app',()=>{
    test('check header',()=>{
        render(<Router>
            <InsertTariff/>
            </Router>);
            const element = screen.getByTestId("header");
            expect(element).toBeInTheDocument();
            expect(element).toHaveTextContent("Add Tariff");
            
    });
    test('check role tariffcategory',()=>{
        render(<Router>
            <InsertTariff/>
            </Router>);
            const element = screen.getByRole("tariffcategory");
            expect(element).toBeInTheDocument();
           
            
    });
    test('check role tariffamount',()=>{
        render(<Router>
            <InsertTariff/>
            </Router>);
            const element = screen.getByRole("tariffamount");
            expect(element).toBeInTheDocument();
           
            
    });
    test('check role tariffstatus',()=>{
        render(<Router>
            <InsertTariff/>
            </Router>);
            const element = screen.getByRole("tariffstatus");
            expect(element).toBeInTheDocument();
           
            
    });
    test('placeholder enter tariffcategory test',() =>{
        render(<Router><InsertTariff/></Router>);
        const placeholderBillPaidStatus = screen.getByPlaceholderText("Enter tariffCategory")
        expect(placeholderBillPaidStatus).toBeInTheDocument()
      })

      test('placeholder Enter tariffamount test',() =>{
        render(<Router><InsertTariff/></Router>);
        const placeholderBillPaidStatus = screen.getByPlaceholderText("Enter tariffAmount")
        expect(placeholderBillPaidStatus).toBeInTheDocument()
      })

      test('placeholder Enter tariffstatus test',() =>{
        render(<Router><InsertTariff/></Router>);
        const placeholderBillPaidStatus = screen.getByPlaceholderText("Enter tariffStatus")
        expect(placeholderBillPaidStatus).toBeInTheDocument()
      })

    test('button is present', () => {
        render(<Router><InsertTariff/></Router>);
        const button = screen.getByRole('button', { name: "Back"});
        expect(button).toBeInTheDocument();
      });
    
});