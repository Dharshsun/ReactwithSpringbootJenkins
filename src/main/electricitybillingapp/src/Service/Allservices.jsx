import  { Component } from 'react'
import axios from "axios"
const findalltariff = "http://localhost:2233/Tarifffindall";
const findallbill = "http://localhost:2233/Billfindall";
const findalluser = "http://localhost:2233/Userfindall";
const deleteuser="http://localhost:2233/Userdelete/";
const deletebill="http://localhost:2233/Billdelete/";
const deletetariff="http://localhost:2233/Tariffdelete/";
const addbill="http://localhost:2233/Billinsert";
const addtariff="http://localhost:2233/Tariffinsert";
const adduser="http://localhost:2233/Userinsert"
const updatetariff="http://localhost:2233/Tariffupdate"
class Allservices extends Component {

    Findalltariff() {
        return axios.get(findalltariff);
    }
    Findallbill(){
        return axios.get(findallbill);
    }
    Findalluser(){
        return axios.get(findalluser);
    }
    Deleteuser(userId){
        return axios.delete(deleteuser+userId);
    }
    Deletebill(billId){
        return axios.delete(deletebill+billId);
    }
    Deletetariff(tariffId){
        return axios.delete(deletetariff+tariffId);
    }
    Addbill(bill) {
        return axios.post(addbill,bill);
    }
    Addtariff(tariff) {
        return axios.post(addtariff,tariff);
    }
    Adduser(user) {
        return axios.post(adduser,user);
    }
    Updatetariff(tariff){
        return axios.put(updatetariff,tariff);
}
}

export default new Allservices(); 