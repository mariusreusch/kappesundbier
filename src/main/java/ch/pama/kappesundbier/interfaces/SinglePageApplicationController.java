package ch.pama.kappesundbier.interfaces;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SinglePageApplicationController {

    @RequestMapping({
            "/login",
            "/recipe-overview",
            "/create-recipe",
            "/view-recipe/*",
            "/edit-recipe/*",
    })
    public String singlePageApplicationRoute() {
        return "forward:/index.html";
    }
}
