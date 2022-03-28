package ch.pama.kappesundbier.infrastructure.db;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository<RecipeDbEntity, Long> {

}
