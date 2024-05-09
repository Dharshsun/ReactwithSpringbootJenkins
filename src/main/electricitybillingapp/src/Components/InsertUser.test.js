import { render, screen } from '@testing-library/react';
import InsertUser from './InsertUser';
import { BrowserRouter as Router } from 'react-router-dom';

describe('insert user check',()=>{
    test('label test',()=>{
        render(<Router><InsertUser/></Router>)
        const label = screen.getByTestId("adduser")
        expect(label).toBeInTheDocument("Add User")
    })
    
      test('placeholder Enter userName',() =>{
        render(<Router><InsertUser/></Router>);
        const placeholder = screen.getByPlaceholderText("Enter userName")
        expect(placeholder).toBeInTheDocument()
      })
      test('placeholder Enter UserLocation',() =>{
        render(<Router><InsertUser/></Router>);
        const placeholderAmount = screen.getByPlaceholderText("Enter UserLocation")
        expect(placeholderAmount).toBeInTheDocument()
      })
      test('placeholder Enter Subsidies',() =>{
        render(<Router><InsertUser/></Router>);
        const placeholderBillPaidStatus = screen.getByPlaceholderText("Enter Subsidies")
        expect(placeholderBillPaidStatus).toBeInTheDocument()
      })
      test('placeholder Enter billId',() =>{
        render(<Router><InsertUser/></Router>);
        const placeholderBillPaidStatus = screen.getByPlaceholderText("Enter billId")
        expect(placeholderBillPaidStatus).toBeInTheDocument()
      })
      test('placeholder Enter TariffId',() =>{
        render(<Router><InsertUser/></Router>);
        const placeholderBillPaidStatus = screen.getByPlaceholderText("Enter TariffId")
        expect(placeholderBillPaidStatus).toBeInTheDocument()
      })
      test('back button is present', () => {
        render(<Router><InsertUser/></Router>);
        const button = screen.getByRole('button', { name: "Back"});
        expect(button).toBeInTheDocument();
      });
      
      
})