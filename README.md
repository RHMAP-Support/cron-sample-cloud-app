# FeedHenry Hello World MBaaS Server with Cron sample

This is a blank 'hello world' FeedHenry MBaaS with cron job.

# Group Hello World API

# hello [/hello]

'Hello world' endpoint.

## hello [POST] 

'Hello world' endpoint.

+ Request (application/json)
    + Body
            {
              "hello": "world"
            }

+ Response 200 (application/json)
    + Body
            {
              "msg": "Hello world\n0"
            }
