##Business
- Export cookbook in epub format
- Show thumbnail for each recipe
- Show thumbnail for each category in category search screen
- Better layout for ingredients and their deletion in edit and create mode
- Introduce progress spinner
- View / Edit Recipe: Show the first image on top of the details 
- Persist image order
- Introduce search field on recipe overview (integrated in header bar. Recipes, categories and ingredients are searchable)
- Move ingredients above description
- Week Planner
- Share Recipes

##Technical
- Use spring security mechanism to get user in REST controller
- Introduce state management (maybe redux)
- Keep URL when hot refresh
- Deploy the artifact built with travis to heroku instead of building it on heroku again
- Create e2e tests
- Replace template driven forms with reactive forms
- Css to scss and unify colors and font families
- Move forkJoin( this.findRecipe(id), this.findRecipeBase64EncodedImages(id) to server
- Fix home screen icon on iPhone
- Introduce "413 Entity Too Large" in image upload in case of too large images 
- Logging mechanism for frontend error
- Google Login Mock
- Switch to Java 11 or Kotlin
- Encrypt IDs in frontend
