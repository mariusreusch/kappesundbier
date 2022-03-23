# Kappes und Bier

## Development server (frontend only)

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

If you use IntelliJ you can alternatively use the shared run configuration "Start Frontend"".

## Start backend

For IntelliJ users: There is a shared run configuration. As soon as you have cloned the project and opened it in IntelliJ you can simply you the run configuration "Start Backend".

## Start DB for local development

**Precondition: Docker or Lima (on Mac) is up and running and on your development machine. In addition you have to ensure that there is no other service running locally on port 5432.**

Run `./gradlew startPostgresqlDockerImageWithDocker`

OR

Run `./gradlew startPostgresqlDockerImageWithLima`
