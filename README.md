
# ST_CVBOX

This repository contains the code for Suratthani School's temperature measuring thingy backend.


## API Reference

#### Send data to Discord

```
  POST :3000/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `checkDate` | `string` | Date |
| `checkTime` | `string` | Time |
| `devLoc` | `string` | The device's location (front or back gate) |
| `personMask` | `string` | Person is wearing mask or not |
| `personTemp` | `string` | Person's temperature |
| `imgURL` | `string` | Image URL |


## POST Request Example

```json
[
  {
    "checkDate": "2022-07-13",
    "personMask": "yes",
    "personTemp": "36",
    "checkTime": "2022-07-13 07:27:57",
    "imgURL": "https://i.imgur.com/YhJ6roD.png",
    "devLoc": "front"
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

## Contributing

Contributions are always welcome!

See `contributing.md` if you want to controbute to this project.

