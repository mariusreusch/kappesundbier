package ch.pama.cookncode;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.support.StandardServletMultipartResolver;

import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;

@SpringBootApplication
public class KappesUndBierApp {

    public static void main(String[] args) {
        SpringApplication.run(KappesUndBierApp.class, args);
    }


}
