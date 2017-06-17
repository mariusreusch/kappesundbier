package ch.pama.cookncode.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController("/o/oauth2/auth")
public class OAuthMockRestController {

    @GetMapping
    public String oauthMock(HttpServletRequest request) {
        return "bla";
    }
}
