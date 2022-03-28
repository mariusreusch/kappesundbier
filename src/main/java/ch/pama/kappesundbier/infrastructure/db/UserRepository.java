package ch.pama.kappesundbier.infrastructure.db;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserDbEntity, Long> {

    Optional<UserDbEntity> findByProviderId(String providerId);
}
