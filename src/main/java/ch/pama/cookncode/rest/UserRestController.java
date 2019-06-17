package ch.pama.cookncode.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("user")
public class UserRestController {

  public Principal user(Principal principal) {
    return principal;
  }
}
