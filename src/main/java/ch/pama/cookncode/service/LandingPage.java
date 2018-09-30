package ch.pama.cookncode.service;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LandingPage {

    @RequestMapping({
            "/login",
            "/week-planner",
            "/recipe-overview",
            "/create-recipe",
            "/view-recipe/**/*",
            "/edit-recipe/**/*",
    })
    public String landingPage(){
        return "forward:/index.html";
    }
}
