# nodem2

My submission for module 2

I didn't add any input vaildation (just due to time available). Otherwise, it seems to work.

My approach was based on the hints provided in the assignment.

Here are the CURL commands i used to test.

The following commands were straight from the assignment:

```//posts post data
curl -H "Content-Type: application/json" -X POST -d '{"name": "Top 10 ES6 Features", "url":"http://webapplog.com/es6", "text": ""}'  "http://localhost:3000/posts" 

//updates post data at specific id
curl -H 'Content-Type: application/json' -X PUT -d '{"name": "Top 10 ES6 Features Every Developer Must Know", "url":"http://webapplog.com/es6", "text": ""}' "http://localhost:3000/posts/0"

//gets post data
curl "http://localhost:3000/posts" 

//deletes post data at specific id
curl -X DELETE "http://localhost:3000/posts/0"```

The following were ones I used to test updating comments (which weren't provided in the assignment:

```//updates an existing comment
curl -H 'Content-Type: application/json' -X PUT -d '{"textw": "test comment"}' "http://localhost:3000/posts/0/comments/2"

//adds new comment
curl -H 'Content-Type: application/json' -X POST -d '{"text": "new test comment"}' "http://localhost:3000/posts/0/comments"
```
