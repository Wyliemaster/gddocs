# Important Info

> When interacting with Geometry Dash's Private API, there are a set of rules which you must follow. Failure to follow these rules will result in the error `-1`

## Sending requests

To make a successful request to the Geometry Dash servers, there are a couple factors to consider:

- Cloudflare
- Request Type
- Rate Limits

**Cloudflare** \
The Geometry Dash servers are protected using a service called [Cloudflare](https://www.cloudflare.com/). In order to send a successful request, bypassing cloudflare is essential. In order to bypass cloudflare there are two steps.

- You must send the request to the `www.` subdomain.
- You must send the request with an empty user-agent

If you don't follow these steps, cloudflare will block the request and you will recieve an HTTP error code: `1020`

**Request Type** \
In 99% of cases, Geometry Dash requires you to send `POST` request. The request parameters require the following Content Type: `Content-Type: application/x-www-form-urlencoded`. 
- The parameters required will be detailed in their respective sections.  

**Rate Limits** \
One thing to be mindful about is the number of requests you send at a given time. Sending too many requests will result in you becoming rate limited and not being able to send any more requests for a certain duration. As the number of requests required to start a rate limit changes, we are unable to provide exact numbers, but as of November 3rd, 2023, they are roughly:
- 20x downloadGJLevel per minute, all other data-retrieval endpoints - 2 per second

However, there are some longer-term limits applied on top of that as well.

## **Alternative Method**
> As of May 31st, 2023, an alternative method is using IPv6 to interact with the servers

```py
#>curl http://[2600:3c03::f03c:91ff:fe69:863b]/database/getGJLevels21.php -X POST -d secret=Wmfd2893gb7
1:6508283:2:ReTraY:5:3:6:4993756:8:10:9:10:10:71657392:12:0:13:21:14:6541047:17::43:3:25::18:2:19:7730:42:0:45:20000:3:VGhhbmtzIGZvciBwbGF5aW5nIEdlb21ldHJ5IERhc2g=:15:3:30:0:31:0:37:3:38:1:39:2:46:1:47:2:35:557117|...
```
