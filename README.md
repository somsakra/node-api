# Node.js API

Express REST API which accepts the input as JSON in the body of a POST request and returns the out as _**result**_ in body of the response.

### **Base on**

- [Power Sum](https://github.com/somsakra/power-sum)
- [Time Conversion](https://github.com/somsakra/time-conversion)
- [CamelCase Count](https://github.com/somsakra/camel-case-count)

### **How to run**

```
node app.js
```

or

```
docker-compose up
```

then

```
localhost:3000
```

---

### **API Example**

**POST** localhost:3000/power-sum

```json
{
  "x": "1000",
  "n": "3"
}
```

return

```json
{
  "result": 1
}
```

---

**POST** localhost:3000/time-conversion

```json
{
  "time12": "12:00:00AM"
}
```

return

```json
{
  "result": "00:00:00"
}
```

---

**POST** localhost:3000/camel-case-count

```json
{
  "s": "oneTwoThreeFour"
}
```

return

```json
{
  "result": 4
}
```
