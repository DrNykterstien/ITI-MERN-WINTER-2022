# What's Middleware? And why we use it? And when it'll be called? And what it is static in express?

---

## Q : What's Middleware?

> Functions execute some code that can access req obj and res obj and make changes to req and res and it ends request-response cycle. 

## Q : Why we use it?

> We use it to execute some code on req and res.

## Q : When it'll be called?

> When we want to execute some code on req and resb and perform changes to these objs and to end the request-response cycle or calling the next middleware from middlewares functions stack.

## Q : What it is static in express?

> For serving static files like imgs and css files, app.use(express.static('public')).