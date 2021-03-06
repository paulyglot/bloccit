/*Instalation: pretty straightforward, npm install passport-github

Usage
creating application: 
    must first register app with GitHub, this will issue it
    a client ID and client secret which will be needed with the strategy. A callback URL
    will also be needed which matches the route in your application.

configuring strategy: requires a verify callback and profile. Verify callback must
    call cb providing a user to complete authentication.


authenticate requests: passport.authenticate(), specifying GitHub strategy to authenticate
    requests.

completed...*/