# Summary notes
=> In the server side, you structure ypur folder into :                    
    1. views, holds static files such as 404 file to display to the client.
    2. Routes, contains files where you define the application's routes using the inbuilt express's route.
    3. Public, contains all files which are used globally by other files.
    4. Middlewares, custom middleware such as logger and error handler, built-in middleware(express.static) and 3rd party middlewares such as CORS and cookie-parser.