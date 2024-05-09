package com.elbs.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.elbs.model.Bill;
public interface BillRepo extends JpaRepository<Bill, Integer>{

}
