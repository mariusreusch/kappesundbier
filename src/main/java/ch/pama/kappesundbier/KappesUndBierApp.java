package ch.pama.kappesundbier;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableTransactionManagement
public class KappesUndBierApp {

  public static void main(String[] args) {
    SpringApplication.run(KappesUndBierApp.class, args);
  }
}
