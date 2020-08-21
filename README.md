# spring-vue-template

Combine the power of spring boot with awesome vue for your web apps

## Deployment

```
$ ./gradlew publish
# It will compile *.tar file inside dist/ folder.
# It first builds the web project and copy static resources over to api project.
```

## Development

Both api and web project should be run separately.

```
$ ./gradlew bootRun
# To start the api server

$ ./gradlew bootWeb
# To start the web server in development mode
```

You can also run it using a single command.

```
$ ./gradlew bootRun bootWeb --parallel
# Run both tasks in parallel
```
