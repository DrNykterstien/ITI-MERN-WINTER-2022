# Solution for Day 03 Task using mongosh and Mongo Client (Compas)

---

I created Database **TestDB**, then created collection **order**, finally insert given documents using insertMany().

```bash
admin> use TestDB
     < 'switched to db TestDB'

TestDB> db.createCollection('order')
     < {ok: 1}

TestDB> db.createCollection('order')
     < {ok: 1}

TestDB> db.order.insertMany([ <document 1> , <document 2>, ... ])

```
---

## Q1 : Retrieve all documents in a collection ?

```bash
TestDB> db.order.find()
```

---

## Q2 : Retrieve all documents that contain paid orders (the "paid" field is "Y") ?

```bash
TestDB> db.order.find({"paid": "Y"})
```

---

## Q3 : Retrieve all documents that contain paid orders and the orders are from before 2019 ?

```bash
TestDB> db.order.find({"paid": "Y", "year": {$lt: 2019}})
```

---

## Q4 : Retrieve all documents that contain unpaid orders or whose orders are from before 2019 ?

```bash
TestDB> db.order.find({$or:[{"paid": "N"}, {"year": {$lt: 2019}}]})
```

---

## Q5 : Retrieve all documents that contain orders whose price is in NOK ?

```bash
TestDB> db.order.find({"cost.currency": "NOK"})
```

---

## Q6 : Retrieve all documents that contain orders whose price is less than 18 NOK ?

```bash
TestDB> db.order.find({$or:[{"cost.currency": "NOK"}, {"cost.price": {$lt: 18}}]})
```

---

## Q7 : Retrieve all documents with orders that contain product "p2" ?

```bash
TestDB> db.order.find({"items.product": "p2"})
```

---

## Q8 : Retrieve all documents with orders that contain products whose quantity is less than 13 ?

```bash
TestDB> db.order.find({"items.quantity": {$lt: 13}})
```

---

## Q9 : Retrieve all documents with orders that contain products whose quantity is less than 13 and contain no products whose quantity exceeds 13 ?

```bash
TestDB> db.order.find({"items": {$not: {$all: [{$elemMatch: {"quantity": {$gte: 13}}}]}}}) // correct

TestDB> db.order.find({"items": {$all: [{$elemMatch: {"quantity": {$gte: 13}}}]}}) // Draft
```

---

## Q10 : Retrieve all documents with orders that contain products whose first colour (i.e., first element in the "colours" array) is blue ?

```bash
TestDB> db.order.find({"items.colours.0": "blue"})
```

---
# Used Resources

- [MongoDB CRUD Operations](https://docs.mongodb.com/v4.4/crud/)
- [Query and Projection Operators](https://docs.mongodb.com/manual/reference/operator/query/)
- [Array Query Operators](https://docs.mongodb.com/manual/reference/operator/query-array/)