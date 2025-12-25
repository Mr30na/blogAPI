# Blog REST api

This project is a simple REST API for a blog application with basic CRUD operations.
(project details:https://roadmap.sh/projects/blogging-platform-api)

## requirements

- **Node.js (v22.x)**:
This project is built using the Express.js framework, so you will need Node.js to run it on your local machine.
- **NPM (v10.x)**: Used for installing dependencies and initializing the project.
- **MongoDB (v8.x)**:A MongoDB database server is required to store the application’s data.

## setup and instalation

1. **clone repository**:
   ```bash
   git clone https://github.com/Mr30na/blogAPI.git
   ```
2. **install package dependencies and devDependencies with NPM**:
   ```bash
   npm install
   ```
   **if you don't want to install the devDependencies use this command instead:**
   ```bash
   npm install --omit=dev
   ```
3. **create .env file**:
   if you wish to change the default port number or database URL for the application you should first create the .env file in projects root directory and set these variables to your desired portnumber or URL:

   ```bash
   PORT=[your portnumber]
   DB_URL=[your database URL]
   ```

   by default the port number is **3000** and the database url is **`mongodb://127.0.0.1:27017/blogs`**

   4.**run on devmode**:to start the application on development mode use this command:

   ```bash
   npm run start:dev
   ```

   use this command for running in production:

   ```bash
   npm run start
   ```

## API routes

### 1.Get all blogs:
  **request**:
  ```
  GET /posts
  ```
  You can set filters based on your specific field(s):
  ```
  GET /posts?category=tech
  ```
  **response**:
  ```
      status 200:
      body:  [
      {
        "_id": "69496420f74ff0f49ef530f2",
        "title": "cats",
        "content": "an article about cats",
        "category": "pets",
        "tags": [
          "animals",
          "pets",
          "cats"
        ],
        "createdAt": "2025-12-22T15:30:40.229Z",
        "updatedAt": "2025-12-22T15:30:40.229Z",
        "__v": 0
      },
      {
        "_id": "6949674f7ec33eb83ce21a9d",
        "title": "top 5 burgers in the world",
        "content": "an article about different kinds of burgers",
        "category": "foods",
        "tags": [
          "burgers",
          "food"
        ],
        "createdAt": "2025-12-22T15:44:15.241Z",
        "updatedAt": "2025-12-22T15:44:15.241Z",
        "__v": 0
      },
    ]
    status 400:{msg:"something went wrong"}
  ```

### 2.Get a single blog based on id:
  **request**:
  ```
  GET /posts/:id (ex:/posts/6949674f7ec33eb83ce21a9d)
  ```
  **response**:
  ```
    status 200:
         body{
             "_id": "6949674f7ec33eb83ce21a9d",
             "title": "top 5 burgers in the world",
             "content": "an article about different kinds of  burgers",
             "category": "foods",
             "tags": [
               "burgers",
               "food"
             ],
             "createdAt": "2025-12-22T15:44:15.241Z",
             "updatedAt": "2025-12-22T15:44:15.241Z",
             "__v": 0
           }
    status 404:
          body:{msg:"blog not found"}
    status 400:
          body:{msg:"something went wrong}

  ```

### 3.Create a blog:

**request**:
```
POST /blog
body:{
    "title"(required): "My First Blog Post",
    "content"(required): "This is the content of my first blog post.",
    "category"(required): "Technology",
    "tags"(required): ["Tech", "Programming"]
}
```
**response**:
```
status 201:
      body:{
        "msg": "blog created successfully",
        "data": {
          "title": "My First Blog Post",
          "content": "This is the content of my first blog post.",
          "category": "Technology",
          "tags": [
            "Tech",
            "Programming"
          ],
          "createdAt": "2025-12-25T13:39:02.020Z",
          "updatedAt": "2025-12-25T13:39:02.020Z",
          "_id": "694d3e766348ba05e02d12af",
          "__v": 0
        }
      }

status 400:
      body{ msg: "something is missing in request body" }
```
### 4.Delete a blog:
**request**:
```
DELETE /post/:id
```
**response**:
```
status 204:no response body
status 404:
      body:{msg:"blog not found"}
status 400:
      body:{msg:"unexpected error"}
```

### 5.Update a blog:
**request**:

```
PUT /posts/:id
      body:{
          "title": "My Updated Blog Post",
          "content": "This is the updated content of my first blog post.",
          "category": "Technology",
          "tags": ["Tech", "Programming"]
      }
```

**response**:
```
status 200:
      body:{
        "msg": "document updated successfully",
        "data": {
          "_id": "69496420f74ff0f49ef530f2",
          "title": "My Updated Blog Post",
          "content": "This is the updated content of my first blog post.",
          "category": "Technology",
          "tags": [
            "Tech",
            "Programming"
          ],
          "createdAt": "2025-12-22T15:30:40.229Z",
          "updatedAt": "2025-12-25T16:34:34.605Z",
          "__v": 0
        }
      }
status 404:
      body:{
        "msg": "blog not found",
        "data": null
      }
status 400:
      body:
            {
          "msg": "unexpected error",
          "data": null
            }
```
