---
title: First-Class Functions - পাইথনে ক্লিন কোড
date: '2019-05-27T12:01:01.087Z'
category: 'Native'
tags: ['python']
thumbnail: '/images/posts/py.png'
spoiler: First-Class Functions কি এবং কেন- উদাহরণ ও অনুশীলন।
---

আজকে আমরা First-Class Functions নিয়ে কথা বলব।
উদাহরণগুলো পাইথনে লেখা, কিন্তু যদি একটা ভাষায় ফাংশন First-Class হয় (যেমন পাইথন, জাভাস্ক্রিপ্ট) তাহলে এই লেখার সব কয়টা উদাহরণ একটু আধটু এডিট করে হুবুহু ঐ ভাষায় বদলে ফেলা যাবে। এই টপিকটা "Higher Order Functions", "Currying", "Closures", "Decorators" ইত্যাদি টপিক বুঝতে সাহায্য করবে।

## First-Class Functions কি?

যেসব ভাষায় Function কে First-Class Object হিসেবে ট্রিট করা হয়, বলা হয় যে তারা First-Class Functions সাপোর্ট করে। First-Class Object হিসেবে ট্রিট করা হয় মানে ওই ভাষার অন্যান্য Object এর উপর যেসব অপারেশন চালানো যায়, Function এর উপরেও সেগুলো চালানো যায়। যেমন ধর, অন্য ফাংশনের আর্গুমেন্ট হিসাবে ফাংশন পাঠানো, কোনো ফাংশন থেকে ফাংশন রিটার্ন করা, ফাংশনকে কোন ভ্যারিয়েবলে অ্যাসাইন করা বা ডাটা স্ট্রাকচারে সেভ করা- এসব আরকি। সব কয়টা কাজেরই আমরা একটা করে উদাহরণ দেখব।

## ভ্যারিয়েবলে অ্যাসাইন করা ও ডাটা স্ট্রাকচারে ঢোকানো

একটা ফাংশন লেখি যেটা দুইটা নাম্বার ইনপুট নেয় এবং সেগুলোর যোগফল রিটার্ন করেঃ

```python
def add(a, b):
  return a + b
```

এই ফাংশনটা আমরা সচরাচর কিভাবে execute করি? ফাংশনের নামের পর parentheses (ফার্স্ট ব্রাকেট) দিয়ে। parentheses এর ভেতর আর্গুমেন্ট লেখি একে একে। যেমন, ১ আর ১ যোগ করতে চাইলেঃ

```python
add(1, 1)
```

যদি রিটার্ন করা ভ্যালুটা কোন ভ্যারিয়েবল এ অ্যাসাইন করতাম তাহলে এভাবেঃ

```python
v = add(1, 1)
print(v)
```

Output:

```
2
```

এবার আমরা ফাংশনটাকে সরাসরি execute না করে একটা ভ্যারিয়েবলে অ্যাসাইন করিঃ

```python
f = add
```

লক্ষ্য কর, এবার কিন্তু আমরা ফাংশনের নামের পর parentheses দেই নাই, কারণ ফাংশনের নামের পর parentheses দেওয়ার মানে ওই ফাংশন কল দেওয়া (execute করা)। এবার শুধু ফাংশনটাকে আরেকটা ভ্যারিয়েবল `f` এ অ্যাসাইন করেছি। `f` এর ভ্যালু প্রিন্ট করলে দেখা যাবে `f` একটা ফাংশনঃ

```python
print(f)
```

Output:

```
<function add at 0x7f135afc7048>
```

তারমানে আমরা এখন `f` কে parentheses দিয়ে execute করতে পারিঃ

```python
f(1, 1)
```

যদি রিটার্ন করা ভ্যালুটা কোন ভ্যারিয়েবল এ অ্যাসাইন করতাম তাহলেঃ

```python
v = f(1, 1)
print(v)
```

Output:

```
2
```

এভাবে First-Class ফাংশনকে ভ্যারিয়েবলে অ্যাসাইন করা যায়। এমনকি যেকোনো ডাটা স্ট্রাকচারেও ঢোকানো যায়। যেমন এখানে ফাংশনকে একটা লিস্টের প্রথম ইলিমেন্ট হিসাবে নিলাম। এবার প্রথম ইলিমেন্টটাকে কল দিলামঃ

```python
my_list = [add, ]
first_element = my_list[0]
v = first_element(1, 1)
print(v)
```

Output:

```
2
```

## অন্য ফাংশনের আর্গুমেন্ট হিসাবে পাঠানো

আমরা এমন একটা ফাংশন লিখব যেটা আগের add ফাংশনটার মত দুইটা নাম্বার ইনপুট নিবে কিন্তু দুইটা নাম্বারের ওপর কি অপারেশন চালাবে সেটা ফিক্সড না, সেটা নির্ভর করবে ৩য় প্যারামিটার এর ওপর। যদি ৩য় প্যারামিটার যোগ করতে বলে তাহলে যোগফল রিটার্ন করে অথবা যদি বিয়োগ করতে বলে তাহলে বিয়োগফল রিটার্ন করে, ইত্যাদি।

এটা কিভাবে করা যেত? আমরা ৩য় প্যারামিটার হিসেবে একটা স্ট্রিং নিয়ে এর ভ্যালুর ওপর if-else লিখে করতে পারতামঃ

```python
def calc(a, b, operation):
  if operation == 'add':
    return a + b
  elif operation == 'subtract':
    return a - b
```

তারপর যোগ করতে গেলেঃ

```python
x = calc(1, 1, 'add')
print(x)
```

Output:

```
2
```

বিয়োগ করতে গেলেঃ

```python
x = calc(1, 1, 'subtract')
print(x)
```

Output:

```
0
```

এভাবে লেখার চেয়ে আরেকটু ভালো সল্যুশন হচ্ছে দুইটা নাম্বারের ওপর কি অপারেশন চালবে সেটা একটা ফাংশন হিসাবে ইনপুট নেওয়াঃ

```python
def calc(a, b, operation):
  r = operation(a, b)
  return r
```

লক্ষ্য কর আমরা আগের মতই `operation` নামের একটা ইনপুট নিয়েছি। কিন্তু `operation` আর আগের মত স্ট্রিং না, এটা একটা ফাংশন। এর মানে আমরা এর নামের নামের পর parentheses বসিয়ে ওই ফাংশন কল দিতে পারি। লক্ষ্য কর ফাংশনের ভেতরে তাই করা হচ্ছে। এই `calc` ফাংশন যেই দুইটি নম্বর ইনপুট নিত, সেই দুইটি নম্বরকে দিয়েই `operation` নামের ফাংশনটা কল দেওয়া হয়েছে এবং রিটার্ন ভ্যালুটিকে calc ফাংশন এর রিটার্ন ভ্যালু হিসাবে ফেরত পাঠানো হচ্ছে।

তাহলে এবার `calc` ফাংশন কিভাবে ব্যবহার করা হবে?

যোগ করার জন্য ৩য় আর্গুমেন্ট হিসেবে আমাদের একটু আগে লেখা add ফাংশনটা পাঠিয়ে দিলেই হয়!

```python
v = calc(1, 1, add)
print(v)
```

Output:

```
2
```

লক্ষ্য কর, `calc` এর ৩য় আর্গুমেন্ট হিসেবে শুধু ফাংশন এর নাম পাঠানো হয়েছে, ফাংশনটা কল দেওয়া হবে `calc` এর ভেতরে যেয়ে।

এবার বিয়োগ করার জন্য আরেকটা ফাংশন লেখা যাকঃ

```python
def subtract(a, b):
  return a - b
```

`calc` ফাংশনটি দিয়ে বিয়োগ করতে এবার এই নতুন ফাংশনটা পাঠিয়ে দিলেই হলঃ

```python
v = calc(1, 1, subtract)
print(v)
```

Output:

```
0
```

মাথায় প্রশ্ন আসার কথা এই কাজটা কেন এমন করে করা লাগলো? আগের মত স্ট্রিং নিলে কি হত?

আগের মত রাখলে নতুন কোনো অপারেশন (যেমন multiplication) করতে গেলে আমাদের `calc` ফাংশন এর ভেতরে নতুন করে `else if` লেখা লাগত। সেটা যদি করা সম্ভব না হয় তাহলে নতুন কোনো অপারেশন করা সম্ভব হত না। ধর তোমার লেখা `calc` ফাংশন একটা লাইব্রেরি থেকে পাবলিশ করা হলো। এখন কেউ যদি তোমার `calc` ফাংশন বাবহার করে দুইটা নম্বর গুন করতে চায়, তাহলে সে আর তা করতে পারবে না কারণ লাইব্রেরি এর কোড সে এডিট করতে পারবে না। তাছাড়াও এভাবে `if-else` করে কোড লেখা খুবই বাজে প্রাকটিস। আমরা সেটা নিয়ে পরে একদিন কথা বলব।

আমরা দেখলাম কিভাবে একটা ফাংশনকে আরেকটা ফাংশনের আর্গুমেন্ট হিসাবে পাঠানো যায়।

## ফাংশন থেকে ফাংশন রিটার্ন

ফাংশন থেকে অন্যান্য সব কিছুর মত একটা আস্ত ফাংশনও রিটার্ন করা যায়। একটা ফাংশন লেখা যাক যেটা একটা স্ট্রিং ইনপুট নেয়। কিন্তু সাথে সাথে প্রিন্ট করে না। বরং একটা ফাংশন রিটার্ন করে দেয়, যাতে পরবর্তীতে সেই ফাংশনটা কল করলে ইনপুটটা প্রিন্ট হয়।

```python
def print_msg(msg):
  def inner_func():
    print(msg)
  return inner_func
```

উপরের উদাহরণে `print_msg` নামের ফাংশনটার ভেতরে আরেকটা ফাংশন ডিফাইন করা হয়েছে এবং তা রিটার্ন করা হয়েছে। আবারো লক্ষ কর, রিটার্ন স্টেটমেন্টে খালি নাম পাঠানো হয়েছে, ফাংশন কল দেওয়া হয়নাই। তারমানে দাড়ায় `print_msg` ফাংশনটার রিটার্ন ভ্যালু কে একটা ভ্যারিয়েবলএ অ্যাসাইন করে তারপর সেটাকে কল করা যায়ঃ

```python
v = print_msg('hello world')
v()
```

এখানে `v` একটা ফাংশন। v এর পর parentheses (ফার্স্ট ব্রাকেট) দিয়ে তাকে কল দেওয়া হয়েছে।

এই কাজটা কিন্তু এক লাইনেও করা যেতঃ

```python
print_msg('hello world')()
```

এখানে `print_msg` ফাংশনটা কল দিয়ে যেই রিটার্ন ভ্যালু তা পাওয়া গেল তাকে আবার কল দেওয়া হয়েছে। এই জন্য পর পর দুইটা parentheses। আগের বার এই কাজটাকে ভেঙ্গে দুই ধাপে করা হয়েছিল।

এই উদাহরণটা খুব কাজের কিছু হয়নি, আমরা Decorators শেখার সময় ফাংশন থেকে ফাংশন রিটার্ন করা নিয়ে আরও অনেক উদাহরণ দেখব।

ভালো কথা, একটা জিনিস লক্ষ্য করেছ? `print_msg` ফাংশনটাকে আমি "hello world" স্ট্রিং দিয়ে কল দিয়েছিলাম। এই স্ট্রিং টা কিন্তু `inner_func` ও ব্যবহার করেছে। এভাবে একটা ফাংশন এর ভেতরের কোন ফাংশন তার বাইরের scope (enclosing scope) এর ভ্যারিয়েবল এক্সেস করতে পারে। এটাকে বলে "Clousure".

আর যেসব ফাংশন অন্য ফাংশনকে ইনপুট হিসেবে নেয় বা আরেকটা ফাংশন রিটার্ন করে তাদের Higher Order Functions বলে। সফটওয়্যার ডেভেলপমেন্ট লাইফে বহু জায়গায় বহু রূপে এদের দেখা পাবে।

## শেষের কথা

নিজে কোড করে দেখার কোন বিকল্প নাই। হাজার হাজার টিউটোরিয়াল দেখে তুমি যতটুক না শিখতে পারবে তারচে বেশি শিখবে নিজে কোড লিখে প্রিন্ট দিয়ে দিয়ে।

### অনুশীলন

```python
def make_tag(tag):
  # write your code here
  # and remove the pass statement
  pass
```

উপরের ফাংশনটা শেষ কর। তারপর নিচের কলগুলো execute করলে এরকম আউটউট আসবেঃ

```python
print(make_tag('h1')('Wikipedia'))
print(make_tag('h2')('The Free Encyclopedia'))
print(make_tag('h2')('Wikipedia is a ' + make_tag('strong')('free') + ' online encyclopedia'))
```

Output:

```
<h1>Wikipedia</h1>
<h2>The Free Encyclopedia</h2>
<h2>Wikipedia is a <strong>free</strong> online encyclopedia</h2>
```

### আরো জানতে

- [Python closures](https://www.geeksforgeeks.org/python-closures/)
- [Higher Order Functions and Currying](https://www.geeksforgeeks.org/higher-order-functions-currying/)

আজ এ পর্যন্তই। সামনের পর্বে অন্য কিছু নিয়ে কথা হবে, সে পর্যন্ত ভালো থাকো।

---

> Adapted from an [ongoing book](/books) of the writer

---
