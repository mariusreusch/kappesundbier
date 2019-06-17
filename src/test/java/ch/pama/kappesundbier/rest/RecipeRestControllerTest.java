package ch.pama.kappesundbier.rest;

import ch.pama.kappesundbier.service.RecipeService;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;

@RunWith(SpringRunner.class)
@WebMvcTest(RecipeRestController.class)
public class RecipeRestControllerTest {

  @Autowired
  private MockMvc mockMvc;

  @MockBean
  private RecipeService recipeService;

  @Test
  @Ignore
  public void testRandomRest() throws Exception {
    mockMvc.perform(get("/api/recipes/random"))
        .andExpect(content().string("This is a random recipe."));

  }
}
