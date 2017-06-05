package ch.pama.cookncode.rest;

import ch.pama.cookncode.config.WebSecurityConfig;
import ch.pama.cookncode.service.RecipeService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;

@RunWith(SpringRunner.class)
@WebMvcTest(RecipeRestController.class)
@Import(WebSecurityConfig.class)
public class RecipeRestControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private RecipeService recipeService;

    @Test
    public void testRandomRest() throws Exception {
        mockMvc.perform(get("/api/recipes/random"))
                .andExpect(content().string("This is a random recipe."));

    }
}
