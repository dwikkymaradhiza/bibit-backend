# Simple Database Querying

```
SELECT 
    a.ID,
    a.UserName,
    b.UserName AS ParentUserName
FROM
    USER AS a
        LEFT JOIN
    USER AS b ON (a.Parent = b.ID)
```