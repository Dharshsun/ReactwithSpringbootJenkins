import { render, screen } from '@testing-library/react';
import InsertBill from './InsertBill';
import { BrowserRouter as Router } from 'react-router-dom';

describe('insert bill header check',()=>{
    test('label test',()=>{
        render(<Router><InsertBill/></Router>)
        const label = screen.getByTestId("addbillheader")
        expect(label).toBeInTheDocument("Add Bill")
    })
    
      test('placeholder enter unit amount',() =>{
        render(<Router><InsertBill/></Router>);
        const placeholder = screen.getByPlaceholderText("Enter unitAmount")
        expect(placeholder).toBeInTheDocument()
      })
      test('placeholder enter BillAmount',() =>{
        render(<Router><InsertBill/></Router>);
        const placeholderAmount = screen.getByPlaceholderText("Enter BillAmount")
        expect(placeholderAmount).toBeInTheDocument()
      })
      test('placeholder enter BillPaidStatus',() =>{
        render(<Router><InsertBill/></Router>);
        const placeholderBillPaidStatus = screen.getByPlaceholderText("Enter BillPaidStatus")
        expect(placeholderBillPaidStatus).toBeInTheDocument()
      })
      test('back button is present', () => {
        render(<Router><InsertBill/></Router>);
        const button = screen.getByRole('button', { name: "Back"});
        expect(button).toBeInTheDocument();
      });
      
      
})