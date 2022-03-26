# Bide Frontend

## Issues

- Vuex is not persisted between routes
  - This means that user information is deleted after the user changes routes
- Not using sessions or cookies to store any data that realistically should be persisted
- There is zero authentication
  - Not using JWT's or anything to securely sign the user in
