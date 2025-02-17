package com.lolo.habits.Entities;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AppUserRepository extends JpaRepository<AppUser, Integer> {
    AppUser findByUsernameAndPassword(String username, String password);
    AppUser findByEmailAndPassword(String email, String password);

    AppUser findByUsername(String username);
    AppUser findByEmail(String email);

    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
}
