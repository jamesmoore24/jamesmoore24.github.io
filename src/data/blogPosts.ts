import { BlogPost } from "../types/blog";

export const blogPosts: BlogPost[] = [
  {
    id: "2",
    title: "Understanding Hashing in Backend Systems",
    date: "2024-09-21",
    excerpt:
      "An in-depth exploration of hashing strategies and their impact on API and backend system performance.",
    readTime: "6 min read",
    content: `
I reviewed the world of hashing today and I must say that from the perspective of someone who is looking to improve the latencies of different API and backend systems getting to understand the mathematical frameworks that go into evaluating different hashing strategies was fascinating. Hashing deals with trying to reduce the asymptotic runtime of an abstract data type that can:

- Insert
- Search
- Delete
- items.

We can imagine that the simplest way to do this would be just to allocate an array given some bound on the range of numbers that we are expecting to store and then just store the values inside of the table at that corresponding index. However, this is infeasible since the range of numbers can grow exponentially large and allocating those arrays in memory can be intractable. Thus, this motivates some way to maybe map the values that we're given to some constant space. This is where we get hashing.

Hashing is the action of mapping some number space \{0,..., n-1\} to a smaller number space \{0,..., m-1\} which usually means some slots in a dynamically allocated array. This can be tricky for this reason:

1. The values which we are hashing could have some intrinsic pattern to them (multiples or powers of 2, same value, etc...) which means that they could possibly be mapped to the same value in \{0,..., m-1\}
2. This raises the question of how can we guarantee that we minimize the number of collisions that happen in the table? Also, how do we deal with collisions when they occur? It isn't like we can just give up on trying to insert a value at runtime. This introduces the first couple of strategies that deal with collisions:

### Chaining

Chaining is the simple strategy of just creating linked lists for every entry in the hash table so that if there's ever a collision then we can just store the value within the linked list by appending it. This has an obvious issue since a malicious adversary can just pick keys that map to the same hash value which creates a chain of length O(n) and thus defeats the purpose of the hash table in the first place since it would take O(n) time to search up a value in our hash table. This motivates some other way to deal with collisions

### Open Addressing

Open addressing is the process of utilizing other empty space in the table to store values if they happen to collide. In order to do this there must be some probing sequence that effectively encodes some permutation of <0,..., m-1> so that every spot in the table is checked once. The idea is that if we see another element stored at some spot inside of the hash table then we just check the next index inside of the probing sequence at that index in the hash table. To search for elements we would calculate its probing sequence and then try and search for the element. If at some point we come across an empty index and we still haven't found the element than it is safe to assume that the element does not exist in the hash table. The easiest way to do this would be to linearly probe through the array and then wrap around but this creates "chains" of values within the table which isn't good for keys drawn from a distribution which gives high probability to keys bunched together or that follow some pattern. Another way we could design a good probing sequence is by using quadratic probing or picking some c\_1 and c\_2 such that h(k, i) = (h(k) + c\_1i + c\_2i^2) mod m. This is better but still creates these clumps which we would ideally want to get away from. The best way to approach the open addressing problem is by trying to get close to a uniform "spread" of the probing sequence. We can do this by defining two auxiliary hash functions h\_1 and h\_2. h\_1 can just be our regular hash function but it is important that h\_2 maps to a number that is coprime or relatively prime to m. Here is why it is important. We are looking to generate a probing sequence that is some permutation of <0,..., m-1> and this is only possible due to the coprime property that states that if two numbers say a, b are coprime than their ax = 1 mod b which means that a has a multiplicative inverse mod b. This means that for some c ∈ 0, 1,..., m-1 if we do ac mod b then the residuals will map to that permutation of <0,..., m-1>. We observe that this c is in fact i in the original equation so our constraints are satisfied for the hashing function. Open addressing, however, suffers from managing deletions as you can imagine that deleting an element would cause searching for other elements to incorrectly terminate thinking that the element isn't there when actually another element that was taking the space was just deleted. We can assign "tombstone" markers onto different indices within the table so that search can pass over them. However, this limits the provable guarantee that the search time is O(1) and related to just the load factor so chaining is used often when deletions must be made.

### Universal Hashing

Even with these two strategies because our hashing functions are deterministic we don't have the ability to protect against a malicious adversary who is looking to map our keys to similar values. To do this we must randomize the selection of a hash function from a family of hash functions that in expectation provide us with the simple uniform hashing assumption. A good hashing family would be h\_{a, b}(k) = ((ak + b) mod p) mod m such that if we choose a in \{1,..., m-1\} and b in \{0, 1,..., m-1\} then we are guaranteed to get that the probability of two keys colliding in expectation is 1/m if the a and b are chosen randomly.

This is both a provable and powerful result. Since we can guarantee that in expectation that the probability that two keys mapping to the same hash value is 1/m regardless of the distribution and sampling method that produced these keys we know that we can both search and delete in expected and amortized O(1) time.
    `,
  },
  {
    id: "1",
    title: "Why Personal Websites Matter in the Age of Social Media",
    date: "2024-07-22",
    excerpt:
      "Exploring the importance of maintaining a personal website amidst the proliferation of specialized social platforms.",
    readTime: "5 min read",
    content: `
I guess the reason why I wanted to make a personal website wasn't entirely just because I thought it might be nice to have one. I actually think there's a genuine issue with how there exist multiple apps and places where we effectively host our personas on. Like how LinkedIn is for our "professional" side, Instagram/FB(if you're older) is for our "rich/successful/cool trips and showing off" side and Twitter/X is for more of our intellectual and argumentative/opinionated side. There of course are other examples of platforms which essentially take in different personas and interests but it begs the question of why there can't be one site or application that hosts all that we need?

I guess the obvious answer is that the task of building such a website/application is such a challenge that we simply don't have the technology to support such an endeavor. I think the fact that X is currently attempting to be the "Everything app" confirms this belief but I can't help but theorize that it is just the way that we humans like to organize our different personas and interests into buckets. Like if I log into Instagram I have a certain attitude and thing that I'm looking for compared to when, say, I log into X or LinkedIn. Like a specific subconscious mindset is activated which locks me into a certain thought process when I enter a certain app. The problem with doing this is that I don't believe you are representing the fullness of your being as a human when you engage with these applications. This is problematic because if we're not authentically representing ourselves then we leave connection, employment and discourse opportunities on the table all of which improve the human condition.

This is in fact why I think something like a personal website built from scratch is important to have. It essentially frees anyone from the algorithmic confines that any consumer application like Facebook, Instagram or Twitter tries to impose on you. Here I have to say that I believe Twitter does a better job at letting users understand exactly what is in the algorithm which is really cool and is why I only have Twitter (except for LinkedIn because I want to be employed but even Twitter is starting to allow the ability to post and look for jobs so I might delete it in the future if it is comprehensive enough).

I hope the future of the website looks like something that accurately represents and logs my beliefs, big or small, over the course of some significant amount of time. If all else fails at least I'll have a way for people to contact me and see what I'm up to.
    `,
  },
];
