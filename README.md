
# ST_CVBOX

This repository contains the code for Suratthani School's temperature measuring thingy backend.


## API Reference

#### Send data to Discord

```http
  POST :3000/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `chkdate` | `string` | Date |
| `chktime` | `string` | Time |
| `devloc` | `string` | The device's location (front or back gate) |
| `personmask` | `string` | Person is wearing mask or not |
| `persontemp` | `string` | Person's temperature |
| `img` | `string` | Image URL |


## POST Request Example

```json
[
  {
    "chkdate": "2022-07-13",
    "personmask": "yes",
    "persontemp": "36",
    "chktime": "2022-07-13 07:27:57",
    "img": "https://i.imgur.com/YhJ6roD.png"
    "devloc": "front"
  }
]
```


## Deployment

To run this project run

```bash
  npm install
```
Then
```bash
  node app.js
```
