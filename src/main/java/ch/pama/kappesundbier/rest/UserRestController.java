package ch.pama.kappesundbier.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class UserRestController {

  @RequestMapping("/api/user")
  public Principal user(Principal principal) {
    return principal;
  }
}
