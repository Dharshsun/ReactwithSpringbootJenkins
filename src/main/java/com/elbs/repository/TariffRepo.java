package com.elbs.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.elbs.model.Bill;
import com.elbs.model.Tariff;
public interface TariffRepo extends JpaRepository<Tariff, Integer>{


}
