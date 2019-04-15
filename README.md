# Refugee Stories

## Table Of Contents

#### Public Endpoints

[Login](#login)<br>
[Fetch All Stories](#fetch-all)<br>
[Fetch Latest Stories](#fetch-latest)<br>
[Submit Story](#submit-story)<br>

#### Admin Endpoints

[Fetch Pending Stories](#fetch-pending)<br>
[Approve Story](#approve-story)<br>
[Reject Story](#reject-story)<br>
[Delete Story](#delete-story)<br>

---

## Base API URL

**https://refugeestories-be.herokuapp.com/**

---

## Login <a name="login"></a>

_POST Request /api/auth/login_

### Body

| Name     | Type   | Required | Description     |
| -------- | ------ | -------- | --------------- |
| Email    | String | Yes      | User's email    |
| Password | String | Yes      | User's password |

### Response

**200 Ok**

> The server will respond with a welcome message and JWT to access restricted routes.

```
{
    "message": "Welcome!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1NTUxOTExNTIsImV4cCI6MTU1NTI3NzU1Mn0.ZwIH2g1ACpZcH8ast9qdRcutjKkN"
}
```

**400 Bad Request**

> If you fail to submit an email or password, you will receive a message instructing you to add these.

```
{
    "message": "Please provide an email and password."
}
```

---

## Fetch All Stories <a name="fetch-all"></a>

_GET Request /api/stories_

### Response

**200 Ok**

> The server will respond with an array of all approved stories.

```
[
    {
        "id": 4,
        "title": "My second story",
        "highlight": "we won",
        "story": "Some more stuff went down"
    },
    {
        "id": 3,
        "title": "My second story",
        "highlight": "we won",
        "story": "Some more stuff went down"
    },
    {
        "id": 2,
        "title": "My third story",
        "highlight": "we won",
        "story": "Wow hey there"
    }
]
```

---

## Fetch Latest Stories <a name="fetch-latest"></a>

_GET Request /api/stories/latest_

### Response

**200 Ok**

> The server will respond with an array of the latest three approved stories.

```
[
    {
        "id": 4,
        "title": "My second story",
        "highlight": "we won",
        "story": "Some more stuff went down"
    },
    {
        "id": 3,
        "title": "My second story",
        "highlight": "we won",
        "story": "Some more stuff went down"
    },
    {
        "id": 2,
        "title": "My third story",
        "highlight": "we won",
        "story": "Wow hey there"
    }
]
```

---

## Submit A Story <a name="submit-story"></a>

_POST Request /api/stories_

### Body

| Name  | Type   | Required | Description  |
| ----- | ------ | -------- | ------------ |
| Title | String | Yes      | User's title |
| Story | String | Yes      | User's story |

### Response

**201 Created**

> The server will respond with the ID of the pending story.

```
{
    "id": 1
}
```

**401 Unauthorized**

> The server will respond with a message telling you the credentials are incorrect.

```
{
    "message": "Invalid credentials."
}
```

**400 Bad Request**

> If you fail to submit a title or story, you will receive a message instructing you to add these.

```
{
    "message": "Please provide a title and story to submit."
}
```

---

## Fetch Pending Stories <a name="fetch-pending"></a>

_GET Request /api/admin/stories_

### Headers

| Name          | Required | Description |
| ------------- | -------- | ----------- |
| Authorization | Yes      | User's JWT  |

### Response

**200 Ok**

> The server will respond with an array of all pending stories.

```
[
    {
        "id": 4,
        "title": "My second story",
        "story": "Some more stuff went down"
    },
    {
        "id": 3,
        "title": "My second story",
        "story": "Some more stuff went down"
    },
    {
        "id": 2,
        "title": "My third story",
        "story": "Wow hey there"
    }
]
```

---

## Approve A Story <a name="approve-story"></a>

_POST Request /api/admin/stories/approve/:id_

### Headers

| Name          | Required | Description |
| ------------- | -------- | ----------- |
| Authorization | Yes      | User's JWT  |

### Body

| Name      | Type   | Required | Description     |
| --------- | ------ | -------- | --------------- |
| Title     | String | Yes      | Story title     |
| Story     | String | Yes      | Story body      |
| Highlight | String | Yes      | Story highlight |

### Response

**201 Created**

> The server will respond with the new ID for the approved story.

```
{
    "newStoryID": 4
}
```

**400 Bad Request**

> If you fail to submit a title, story and highlight, you will receive a message instructing you to add these.

```
{
    "message": "Please provide a title, story, and highlight to add."
}
```

---

## Reject A Story <a name="reject-story"></a>

_POST Request /api/admin/stories/reject/:id_

### Headers

| Name          | Required | Description |
| ------------- | -------- | ----------- |
| Authorization | Yes      | User's JWT  |

### Response

**200 Ok**

> The server will respond with a 200 and no body if the story was successfully rejected.

**404 Not Found**

> If the ID cannot be located, the server will provide a message and 404 not found error.

```
{
    "message": "Story could not be located."
}
```

---

## Delete A Story <a name="delete-story"></a>

_Deletes an already approved story. Does not operate on pending stories. Please use reject if you need to remove a pending story._

_POST Request /api/admin/stories/delete/:id_

### Headers

| Name          | Required | Description |
| ------------- | -------- | ----------- |
| Authorization | Yes      | User's JWT  |

### Response

**200 Ok**

> The server will respond with a 200 and no body if the story was successfully deleted.

**404 Not Found**

> If the ID cannot be located, the server will provide a message and 404 not found error.

```
{
    "message": "Story could not be located."
}
```
