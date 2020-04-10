# Glovo B2B-SDK Open Source

I programmed this SDK for my own use, because I find it very boring to be in charge of handling all the calls to the rest API.


# Important notes

 - The author of this package is not affiliated with Glovo.
 - It is my first development in NodeJS, sorry if I don't apply the best language practices.
 - This **SDK** is based on official **Glovo B2B** documentation[Official Docs](https://api-docs.glovoapp.com/b2b/index.html#introduction)
 - 



## First steps

 

 1. npm Install

 ```bash npm i @jchaves047/Glovo-SDK --save ```
2. Create .env File in the root project folder
3. Go to your GlovoBusiness [Link](https://business.glovoapp.com/dashboard/profile) and generate the API credentials.
4. ![enter image description here](<a href="https://ibb.co/Krb7Qpp"><img src="https://i.ibb.co/3C4W899/Capture.png" alt="Capture" border="0"></a>)
5. Add the follow lines in the .env file:
```bash
API_KEY=YOUR_API_KEY
API_SECRET=YOUR_API_SECRET
BASE_URL=https://api.glovoapp.com
```
6. add to .gitignore the .env file

## License

Apache 2.0
