---
title: "OS/161: Paint Shop Synchronization Problem"
date: '2016-06-26T18:00:00.000Z'
category: 'Academic'
tags: ['os161']
thumbnail: 'https://mehamasum.files.wordpress.com/2016/06/paintshop.png'
spoiler: "Ideas (and code) to solve OS/161 Coding Assignment Part 3: Paint shop synchronization."
---

Problem description can be found [here](https://cgi.cse.unsw.edu.au/~cs3231/14s1/assignments/asst1/) (Part 3: Paint shop synchronization)


In this article **I’m going to assume**:
- You have already set up and run OS/161
- You have a clear understanding how threads work
- You already understand binary and counting semaphores, now it’s time to use them to solve this problem

---

## Main Idea

The basic task is to make the paint shop run properly.
This is a modified version of classic **Bounded Buffer Problem** and the problem is very realistic.

We kept two different buffers, one buffer for placing orders and another buffer for shipping the processed color cans.

Customers come and place their order in FIFO basis (or randomly) in the order buffer. After that they keep searching the shipment buffer for the arrival of their can having the proper color combination.

Staffs keep checking the order buffer for orders. After getting an order, they fill it with demanded color combination and finally place the ready can in the shipment buffer.


So, to summarize, here is what is going to happen:

1. The first idea that comes to mind is that, the customers will come and put their cans in a buffer, lets call it `order_buffer`.
2. Stuffs will pick up cans from the `order_buffer` and fill with color.
3. Then they would put the can in another buffer, lets call it `shipment_buffer`.
4. Finally the customers can take back their can from `shipment_buffer`.


## Semaphores

We have used different semaphores to make sure that:

1. No two customer try to use the `order_buffer` at the same time
2. No two stuff try to use the `shipment_buffer` at the same time
3. Neither of the buffers gets overflowed or under-flowed


This is quite an easy code to write, but the tricky part is to find out why the deadlocks happen when they happen.

Another issue is printing the message “Staff x going home after mixing y orders”. We solved it by making each stuff for fixed period of time so that we can ensure that whoever went home before him reached home by that time. Otherwise this message will be printed in all messed up fashion.


## Personal notes and code

I have seen solutions that use `thread_yield()` calls to stop threads. I personally feel that, the task is to utilize the system built semaphores, so using kernel level calls in here is not a good idea.

In our solution, we made the users put their empty cans in the `order_buffer` at random positions. FIFO could have been done as well, but we preferred a different approach. Besides, random is always fair 😛


You may have a look at our solution on [github](https://github.com/mehamasum/OS161-paint-shop). But remember, **the immense joy you would feel once your paint shop runs correctly- will be missed completely** if you decide to copy the code.


Don’t give up if you fall in deadlocks, it might take even an entire week to solve the problem!  


Leave your thoughts in comments. Happy coding!

---

Featured image credit: [Nick Roach](https://www.iconfinder.com/icons/1055016/paint_paint_can_icon#size=256)

---