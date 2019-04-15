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

## Fetch All Stories <a name="fetch-all"></a>

_POST Request /api/stories_

### Body

| name  | type   | required | description  |
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

**400 Bad Request**

> If you fail to submit a title or story, you will receive a message instructing you t oadd tehse.

```
{
    "message": "Please provide a title and story to submit."
}
```
